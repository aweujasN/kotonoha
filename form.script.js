document.addEventListener('DOMContentLoaded', () => {

    const kotobaInput = document.getElementById('kotoba');
    const imiInput = document.getElementById('imi');
    const gazoInput = document.getElementById('gazo');
    const taguInput = document.getElementById('tagu');
    const generateBtn = document.getElementById('generate-btn');
    const saveDraftBtn = document.getElementById('save-draft-btn');
    const clearDraftBtn = document.getElementById('clear-draft-btn');
    const previewOutput = document.getElementById('preview-output');
    const codeOutput = document.getElementById('code-output');
    const draftOutput = document.getElementById('draft-output');
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // ★★★ ステップ2でコピーしたウェブアプリのURLをここに貼り付け ★★★
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzoBSFYnsEr-ZeBICWlRIO1TsoX6iw3cj98qKvMvc3PudnC3ixrlc62db3AQktvWudKQA/exec';
    
    codeOutput.readOnly = false;

    function getTodayDateString() {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    }
    
    function updatePreview() {
        const todayDate = getTodayDateString();
        const data = {
            kotoba: kotobaInput.value,
            imi: imiInput.value.replace(/\n/g, '<br>'),
            gazo: gazoInput.value.split('\n').map(g => g.trim()).filter(g => g !== '').map(g => `gazo/${g}`),
            tagu: taguInput.value.split(',').map(t => t.trim()).filter(t => t !== ''),
            hiduke: todayDate
        };
        const entryDiv = document.createElement('div');
        entryDiv.className = 'word-entry';
        let imagesHtml = (data.gazo && data.gazo.length > 0) ? `<div class="word-image">...画像プレビュー...</div>` : '';
        const dateHtml = data.hiduke ? `<div class="registered-date">登録日: ${data.hiduke}</div>` : '';
        const tagsHtml = (data.tagu && data.tagu.length > 0) ? `<div class="registered-date">タグ: ${data.tagu.join(', ')}</div>` : '';
        entryDiv.innerHTML = `
            <div class="word-details">
                <div class="term-column">
                    <div class="word-term">${data.kotoba}</div>
                    ${dateHtml}
                    ${tagsHtml}
                </div>
                <div class="word-definition">${data.imi}</div>
            </div>
            ${imagesHtml}`;
        previewOutput.innerHTML = '';
        previewOutput.appendChild(entryDiv);
    }
    
    function generateCode(addToOutput = true) {
        const todayDate = getTodayDateString();
        const kotoba = kotobaInput.value;
        const imi = imiInput.value.replace(/\n/g, '<br>');
        const gazo = gazoInput.value.split('\n').map(g => g.trim()).filter(g => g !== '').map(g => `gazo/${g}`);
        const tagu = taguInput.value.split(',').map(t => t.trim()).filter(t => t !== '');
        const gazoString = JSON.stringify(gazo);
        const taguString = JSON.stringify(tagu);
        const newCode = `    {
        kotoba: \`${kotoba}\`,
        imi: \`${imi}\`,
        gazo: ${gazoString},
        tagu: ${taguString},
        hiduke: "${todayDate}"
    },`;
        if (addToOutput) {
            codeOutput.value += (codeOutput.value ? '\n' : '') + newCode;
        }
        return newCode;
    }

    // ★ 下書き保存機能を修正
    function saveDraft() {
        const draftCode = generateCode(false);
        if (!draftCode.trim()) {
            alert('保存するコードがありません。');
            return;
        }
        saveDraftBtn.textContent = "保存中...";
        saveDraftBtn.disabled = true; // ボタンを一時的に無効化

        fetch(WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ type: 'draft', content: draftCode }),
        })
        .then(() => {
            // ★ alertを削除し、ボタンのテキストを「成功」に変更
            saveDraftBtn.textContent = "成功";
            loadDraft();
            // ★ 2秒後にボタンのテキストを元に戻す
            setTimeout(() => {
                saveDraftBtn.textContent = "下書き保存";
                saveDraftBtn.disabled = false; // ボタンを再度有効化
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('保存に失敗しました。');
            // ★ 失敗した場合もボタンを元に戻す
            saveDraftBtn.textContent = "下書き保存";
            saveDraftBtn.disabled = false;
        });
    }

    function loadDraft() {
        draftOutput.value = "読み込み中...";
        fetch(WEB_APP_URL)
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    draftOutput.value = data.draft || '';
                } else {
                    draftOutput.value = '読み込みに失敗しました。';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                draftOutput.value = '読み込みエラー。';
            });
    }

    function clearDraft() {
        if (confirm('オンライン上のすべての下書きを本当にクリアしますか？')) {
            clearDraftBtn.textContent = "クリア中...";
            fetch(WEB_APP_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'clear' }),
            })
            .then(() => {
                alert('下書きをクリアしました。');
                loadDraft();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('クリアに失敗しました。');
            })
            .finally(() => {
                 clearDraftBtn.textContent = "下書きをクリア";
            });
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetTab = btn.dataset.tab;
            if(targetTab === 'draft'){
                loadDraft();
            }

            tabContents.forEach(content => {
                content.classList.toggle('active', content.id === `${targetTab}-content`);
            });
        });
    });

    [kotobaInput, imiInput, gazoInput, taguInput].forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    generateBtn.addEventListener('click', () => generateCode(true));
    saveDraftBtn.addEventListener('click', saveDraft);
    clearDraftBtn.addEventListener('click', clearDraft);
    
    updatePreview();
    loadDraft();
});
