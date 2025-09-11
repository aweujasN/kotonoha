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

    function saveDraft() {
        const draftCode = generateCode(false); // 出力エリアには追加しない
        localStorage.setItem('draftCode', draftCode);
        alert('下書きを保存しました。');
        loadDraft();
    }

    function loadDraft() {
        draftOutput.value = localStorage.getItem('draftCode') || '';
    }

    function clearDraft() {
        if (confirm('下書きを本当にクリアしますか？')) {
            localStorage.removeItem('draftCode');
            loadDraft();
        }
    }

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const targetTab = btn.dataset.tab;
            tabContents.forEach(content => {
                if (content.id === `${targetTab}-content`) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    [kotobaInput, imiInput, gazoInput, taguInput].forEach(input => {
        input.addEventListener('input', updatePreview);
    });
    generateBtn.addEventListener('click', () => generateCode(true));
    saveDraftBtn.addEventListener('click', saveDraft);
    clearDraftBtn.addEventListener('click', clearDraft);
    
    // 初期表示
    updatePreview();
    loadDraft();
});