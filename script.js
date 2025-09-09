// 表示したい単語のデータをここに追加していきます
const wordData = [
    {
        term: "<ruby>みさご<rt>Osprey</rt></ruby>　<ruby>雎<rt>(ショ)</rt></ruby>　<ruby>鶚<rt>(ガク)</rt></ruby>　鵃　<ruby>雎鳩<rt>ショキュウ</rt></ruby>　<ruby>魚鷹<rt>うおたか</rt></ruby>",
        definition: "魚を好んで食べる。爬虫類、鳥類、貝類を食べることもある。全長54–64cm、翼開張150–180cm、体重1.2–2kg。<br>主に海岸に生息するが、内陸部の湖沼、広い河川、河口等にも生息。<br>水面をゆっくりと低空飛行し獲物を探す。獲物を見つけると素早く翼を羽ばたかせてホバリング、急降下し、水面近くで脚を伸ばし両足で獲物を捕らえる。単独か番で生活する。<br><ruby>鷙鳥<rt>しちょう<rt/></ruby>百を<ruby>累<rt>かさ</rt></ruby>ぬるも<ruby>一鶚<rt>いちがく</rt></ruby>に如かず：無能な人間がたくさんいても有能な人間一人にはかなわない。<br>（<ruby>鷙鳥<rt>しちょう</rt></ruby>：あらどり。ワシ・タカなどの猛鳥の総称）",
        images: ["gazo/misago1.jpg","gazo/misago2.webp","gazo/misago3.jpg"],
        tags: ["鳥", "故事成語・諺"],
        registeredDate: "2025-09-09"
    }
];

    // ▼ 新しい単語を追加する場合は、この下にカンマ(,)を打ち、上の形式をコピーして追記します ▼
    // {
    //     term: "<ruby><rt></rt></ruby>新しい単語",
    //     definition: "ここに単語の意味を記述します。",
    //     image: "new_image.jpg",
    //     tags: ["タグ1", "タグ2"]
    // }

// ページの読み込みが完了したら実行
window.onload = function() {
    displayTags();
    displayWords(wordData);
};

// 単語リストを表示する関数
function displayWords(words) {
    const container = document.getElementById('word-container');
    container.innerHTML = '';

    words.forEach((data, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'word-entry';

        // 画像リストのHTMLを生成
        let imagesHtml = '';
        if (data.images && data.images.length > 0) {
            const imageLinks = data.images.map((imgSrc, i) =>
                `<span class="image-toggler" data-img-id="img-${index}-${i}">${imgSrc.replace('gazo/', '')}</span>`
            ).join('');
            const imageTags = data.images.map((imgSrc, i) =>
                `<img src="${imgSrc}" alt="${data.term}" id="img-${index}-${i}" style="display: none;">`
            ).join('');
            imagesHtml = `<div class="word-image">${imageLinks}${imageTags}</div>`;
        }

        const dateHtml = data.registeredDate ? `<div class="registered-date">登録日: ${data.registeredDate}</div>` : '';

        // ★ HTMLの構造を「単語・日付」と「意味」が並ぶように変更
        entryDiv.innerHTML = `
            <div class="word-details">
                <div class="term-column">
                    <div class="word-term">${data.term}</div>
                    ${dateHtml}
                </div>
                <div class="word-definition">${data.definition}</div>
            </div>
            ${imagesHtml}
        `;
        container.appendChild(entryDiv);

        // 各画像名にクリックイベントを設定
        entryDiv.querySelectorAll('.image-toggler').forEach(toggler => {
            toggler.addEventListener('click', () => {
                const imgId = toggler.dataset.imgId;
                const imgElement = document.getElementById(imgId);
                if (imgElement) {
                    imgElement.style.display = imgElement.style.display === 'none' ? 'block' : 'none';
                    toggler.classList.toggle('active');
                }
            });
        });
    });
}

// タグ一覧を表示する関数
function displayTags() {
    const tagContainer = document.getElementById('tag-container');
    const allTags = new Set(wordData.flatMap(d => d.tags));

    const allBtn = createTagButton('すべて表示');
    allBtn.classList.add('active');
    allBtn.onclick = () => {
        displayWords(wordData);
        updateActiveButton(allBtn);
    };
    tagContainer.appendChild(allBtn);

    allTags.forEach(tag => {
        const tagBtn = createTagButton(tag);
        tagBtn.onclick = () => {
            const filteredWords = wordData.filter(d => d.tags.includes(tag));
            displayWords(filteredWords);
            updateActiveButton(tagBtn);
        };
        tagContainer.appendChild(tagBtn);
    });
}

// タグボタンを作成する補助関数
function createTagButton(text) {
    const button = document.createElement('button');
    button.className = 'tag-btn';
    button.textContent = text;
    return button;
}

// 選択中のボタンのスタイルを更新する関数
function updateActiveButton(activeBtn) {
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}