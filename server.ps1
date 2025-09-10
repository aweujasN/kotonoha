# --- 設定項目 ---
# Webサーバーのルートディレクトリ（このスクリプトがある場所）
$rootDir = $PSScriptRoot
# 使用するポート番号
$port = 8080
# ----------------

# HttpListenerオブジェクトの作成
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

# サーバーの開始
Write-Host "Webサーバーを開始します。"
Write-Host "ルートディレクトリ: $rootDir"
Write-Host "URL: http://localhost:$port/"
Write-Host "停止するには Ctrl + C を押してください。"
$listener.Start()

try {
    while ($listener.IsListening) {
        # リクエストの待機
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # リクエストされたファイルのパスを特定
        $filePath = Join-Path -Path $rootDir -ChildPath $request.Url.LocalPath.Substring(1)
        # URLが"/"の場合はindex.htmlを探す
        if ([string]::IsNullOrEmpty($filePath) -or $filePath.EndsWith("\")) {
            $filePath = Join-Path -Path $filePath -ChildPath "index.html"
        }

        # ファイルが存在するか確認
        if (Test-Path $filePath -PathType Leaf) {
            try {
                # ファイルの内容を読み込んでレスポンスとして返す
                $fileContent = [System.IO.File]::ReadAllBytes($filePath)
                $response.StatusCode = 200
                # ファイルの拡張子に応じてContent-Typeを設定
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mimeType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css" }
                    ".js"   { "application/javascript" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".webp"  { "image/webp" }
                    default { "application/octet-stream" }
                }
                $response.ContentType = $mimeType
                $response.ContentLength64 = $fileContent.Length
                $response.OutputStream.Write($fileContent, 0, $fileContent.Length)
            }
            catch {
                # サーバー内部エラー
                $response.StatusCode = 500
                Write-Warning "エラーが発生しました: $_"
            }
        }
        else {
            # ファイルが見つからない場合 (404 Not Found)
            $response.StatusCode = 404
            $errorMessage = "404 Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        
        # レスポンスを閉じる
        $response.Close()
    }
}
finally {
    # サーバーの停止
    $listener.Stop()
    Write-Host "Webサーバーを停止しました。"
}