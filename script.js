const wordData = [
    {
        kotoba: "にお　鳰",
        imi: "鸊鷉(かいつぶり)の古名。<br>「鳰の海」「鳰の湖(うみ)」は琵琶湖の古称。鳰とその近縁種が沢山いたことから。滋賀県の県鳥。",
        gazo: ["gazo/nionoumi.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "かいつぶり　鸊鷉",
        imi: "鸊鷉(ヘキテイ)　鷸子(つぶり)。鳰は古名。<br>全体的に焦茶色がかった消炭色。首は季節で羽色が変わり、夏は暗い赤茶色、冬は黄茶色になる。<br>翼開長40cm強。ほぼ水上生活で、潜水して魚、虫、甲殻類、貝などの獲物を捕える。1回の潜水は平均15秒くらい、長いと30秒になるが水深は2mまで。滋賀県の県鳥。",
        gazo: ["gazo/kaitsuburi.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "しぎ　鴫　鷸",
        imi: "鷸はかわせみとも。鷸子と書くとつぶり（かいつぶり）。鴫は国字。<br>渡りを行う種が殆どだがヤマシギのように留まる種もいる。夏は寒帯・亜寒帯で繁殖し、冬は南下して越冬。<br>人ちゃんの都合により種の多くは環境省や都道府県でレッドリスト入りしている。<br>鷸蚌の争い(イツボウのあらそい)：蚌(どぶがい)と争ってたらどっちも漁師に捕まっちゃった≒犬兎の争い：どっちも猟師に捕まっちゃった≒漁夫の利。蚌ははまぐり、からすがいとも。",
        gazo: ["gazo/tashigi.jpg","gazo/yamashigi.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "かわせみ　翡翠　翡　翠　鷸　<br>魚狗　水狗　魚虎　川蟬",
        imi: "翡は雄、翠は雌。鷸はしぎ、魚虎はハリセンボンとも。<br>翼はサファイヤの如き美しい碧色、胸はマンダリンガーネットのような鮮やかな橙色で飾られた、翔ぶ宝石。ネプチュナイトの嘴で水中の獲物を攫う。雌は下嘴もマンダリンガーネット。<br><br><i>”なんてことだ、私はおかしくなってしまった</i>”<br><i>”Holy cow, the jewel's playing with the water's surface.”</i><br><br>意外と土の崖地に横穴を掘って営巣するタイプの翡翠。大きな獲物は叩きつけて骨を砕いてから呑み込む。消化出来なかったものは吐く。意外とエグいタイプの翡翠。色鮮やかっつっても絵の具を塗ったようなアイツ（鴛）とは品が違うんだよ品が。",
        gazo: ["gazo/kawasemi1.jpg","gazo/kawasemi2.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "とび　鳶　鴟　鵄　鵈",
        imi: "鴟はふくろうとも。<br>烏より一回り大きい最も身近な猛禽の1つ。翼開長160cm。動物や魚をスカベンジャー。生きた鼠や小型の生物も食べる。鷹を生むことは殆ど無い。<br>鵈をみさごと読む地名があるのは、昔誰かが写し間違えた所為。",
        gazo: ["gazo/tobi.jpg","gazo/nynerutobi.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "ふくろう　梟　鴟　鴞",
        imi: "鴟はとびとも。<br>森の哲学者、森の忍者。日本で梟というと大体ウラルフクロウ。夜行性。翼開長100cm。<br>鼠が主食。木菟と違い、頭が丸っこい。ホーホーホー。",
        gazo: ["gazo/uralfukurou.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "みみずく　鵩　鶹　鵂<br> 木菟　木兎　耳木兎",
        imi: "角鴟(かくし)　鴟鵂(しきゅう)　鴟はとび・ふくろうの総称。<br>古名ツク、ズク。羽角（耳に見える羽毛）がある梟。鷲木菟の枝木にすらりと立つ姿たるや、勇ましく美しく萌え。冬の季語",
        gazo: ["gazo/wasimimizuku.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "おしどり　鴛鴦　鴛　鴦",
        imi: "鴛は雄、鴦は雌。<br>ロシア南東部、朝鮮半島、日本、中国などの東アジアに分布。<br>雄はパレットのようで前衛的。繁殖期になると首周りがフォルムチェンジする。雌は地味。くっついて離れない2匹は、宛ら仲睦まじい夫婦のよう。鴛鴦之契。",
        gazo: ["gazo/oshidoriosumesu.jpg"],
        tagu: ["鳥","夫婦"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "みさご　雎　鶚　鵃",
        imi: "雎鳩(ショキュウ)　魚鷹(うおたか)　Osprey<br>格好良い。白と黒とでデザインされてるのも獲物の捕え方も留まる姿も飛ぶ姿も兎に角格好良い。<br>魚を好んで食べるタカ科の鳥。爬虫類、鳥類、貝類を食べることもある。全長60cm、翼開長180cm、体重1.5kg。<br>主に海岸に生息するが、湖沼や河沿など内陸部にも生息。<br>水面をゆっくりと低空飛行し、獲物を見つけると素早く翼を羽ばたかせてホバリング、急降下、水面近くで脚を伸ばし両足で獲物を捕らえる。夫婦仲の良い例えにも。鴛鴦より大人な恋愛してるだろう。<br>鷙鳥百を累ぬるも一鶚に如かず：無能な人間、有象無象が沢山いても有能な人間一人には敵わない。素質が違うんだよ素質が。会社とか将にそんな感じ。<br>鷙鳥(シチョウ)：鷙(あらどり)。鷲や鷹などの猛鳥の総称。",
        gazo: ["gazo/misago1.jpg","gazo/misago2.webp","gazo/misago3.jpg"],
        tagu: ["鳥","夫婦"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "光栄",
        imi: "こうえい。",
        gazo: [""],
        tagu: [],
        hiduke: "2001-05-30"
    }
];

// ページの読み込みが完了したら実行
window.onload = function() {
    // ★ 単語数を計算して表示
    const wordCount = wordData.length;
    const countDisplay = document.getElementById('word-count-display');
    if (countDisplay) {
        countDisplay.textContent = `登録数: ${wordCount}`;
    }

    wordData.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));
    displayWords(wordData);
    displayTags();
    setupEventListeners();
};


function createWordEntryElement(data, entryId) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'word-entry';
    entryDiv.id = entryId;
    entryDiv.dataset.term = data.kotoba;

    let imagesHtml = '';
    if (data.gazo && data.gazo.length > 0) {
        const imageLinks = data.gazo.map((imgSrc, i) =>
            `<span class="image-toggler" data-img-id="${entryId}-img-${i}">${imgSrc.replace('gazo/', '')}</span>`
        ).join('');
        const imageTags = data.gazo.map((imgSrc, i) =>
            `<img src="${imgSrc}" alt="${data.kotoba.replace(/<[^>]*>/g, '')}" id="${entryId}-img-${i}" style="display: none;">`
        ).join('');
        imagesHtml = `<div class="word-image">${imageLinks}${imageTags}</div>`;
    }

    const dateHtml = data.hiduke ? `<div class="registered-date">登録日: ${data.hiduke}</div>` : '';

    let tagsHtml = '';
    if (data.tagu && data.tagu.length > 0) {
        tagsHtml = `<div class="registered-date">タグ: ${data.tagu.join(', ')}</div>`;
    }

    entryDiv.innerHTML = `
        <div class="word-details">
            <div class="term-column">
                <div class="word-term">${data.kotoba}</div>
                ${dateHtml}
                ${tagsHtml} 
            </div>
            <div class="word-definition">${data.imi}</div>
        </div>
        ${imagesHtml}
    `;
    return entryDiv;
}

function findAndReplaceWithLinks(element, currentTerm) {
    const linkableTerms = [];
    const tempDiv = document.createElement('div');

    wordData.forEach(linkTargetEntry => {
        if (linkTargetEntry.kotoba === currentTerm) return;
        
        const plainTerm = linkTargetEntry.kotoba.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]*>/g, '');
        
        plainTerm.split(/[\s　]+/).filter(p => p).forEach(part => {
            linkableTerms.push({ text: part, originalTerm: linkTargetEntry.kotoba });
        });
    });

    linkableTerms.sort((a, b) => b.text.length - a.text.length);
    
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
    const nodesToProcess = [];
    while (walker.nextNode()) {
        const parent = walker.currentNode.parentElement;
        if (parent.tagName !== 'RT' && !parent.classList.contains('internal-link')) {
            nodesToProcess.push(walker.currentNode);
        }
    }
    
    nodesToProcess.forEach(node => {
        const text = node.nodeValue;
        const fragment = document.createDocumentFragment();
        let lastIndex = 0;

        for (let i = 0; i < text.length; i++) {
            const remainingText = text.substring(i);
            const matchedLink = linkableTerms.find(link => remainingText.startsWith(link.text));
            
            if (matchedLink) {
                if (i > lastIndex) {
                    fragment.appendChild(document.createTextNode(text.substring(lastIndex, i)));
                }
                const linkNode = document.createElement('span');
                linkNode.className = 'internal-link';
                linkNode.dataset.term = matchedLink.originalTerm;
                linkNode.textContent = matchedLink.text;
                fragment.appendChild(linkNode);
                
                i += matchedLink.text.length - 1;
                lastIndex = i + 1;
            }
        }
        
        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
        }
        
        if (fragment.childNodes.length > 1 || (fragment.firstChild && fragment.firstChild.nodeType !== Node.TEXT_NODE)) {
            node.parentNode.replaceChild(fragment, node);
        }
    });
}

function displayWords(words) {
    const container = document.getElementById('word-container');
    container.innerHTML = '';
    
    const elementsToAppend = [];
    words.forEach(data => {
        const uniqueIdPart = data.kotoba.replace(/<[^>]*>|\s|　/g, '');
        const element = createWordEntryElement(data, `word-entry-${uniqueIdPart}`);
        elementsToAppend.push(element);
    });

    elementsToAppend.forEach(el => container.appendChild(el));
    
    elementsToAppend.forEach(el => {
        const currentTerm = el.dataset.term;
        const defElement = el.querySelector('.word-definition');
        if (defElement) findAndReplaceWithLinks(defElement, currentTerm);
    });
}

function setupEventListeners() {
    const container = document.getElementById('word-container');
    const searchBox = document.getElementById('search-box');
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyXYQ3iSMqCZigJdQYe5CIzL853edORW-o7hTElKSC-ODZAeHSDnP9ND5KcFLM217Ni/exec';

    searchBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();

            if (query && WEB_APP_URL) {
                fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query: query }),
                })
                .catch(error => console.error('Error:', error));
            }

            if (!query) {
                wordData.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));
                displayWords(wordData);
                return;
            }

            const tempDiv = document.createElement('div');
            const filteredData = wordData.filter(data => {
                tempDiv.innerHTML = data.kotoba;
                const plainTerm = tempDiv.textContent.toLowerCase();
                tempDiv.innerHTML = data.imi;
                const plainDefinition = tempDiv.textContent.toLowerCase();
                return plainTerm.includes(query) || plainDefinition.includes(query);
            });

            filteredData.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));
            displayWords(filteredData);
        }
    });

    container.addEventListener('click', function(event) {
        const target = event.target;

        if (target.classList.contains('image-toggler')) {
            const imgId = target.dataset.imgId;
            const imgElement = document.getElementById(imgId);
            if (imgElement) {
                imgElement.style.display = imgElement.style.display === 'none' ? 'block' : 'none';
                target.classList.toggle('active');
            }
        }

        if (target.classList.contains('internal-link')) {
            const term = target.dataset.term;
            const parentEntry = target.closest('.word-entry');
            const uniqueIdPart = term.replace(/<[^>]*>|\s|　/g, '');
            const entryId = `inserted-${uniqueIdPart}`;
            const existingEntry = document.getElementById(entryId);
            
            if (existingEntry) {
                existingEntry.remove();
            } else {
                const wordToShow = wordData.find(d => d.kotoba === term);
                if (wordToShow && parentEntry) {
                    const newElement = createWordEntryElement(wordToShow, entryId);
                    const defElement = newElement.querySelector('.word-definition');
                    if (defElement) findAndReplaceWithLinks(defElement, wordToShow.kotoba);
                    parentEntry.insertAdjacentElement('afterend', newElement);
                }
            }
        }
    });
}

function displayTags() {
    const tagContainer = document.getElementById('tag-container');
    if (!tagContainer) return;
    tagContainer.innerHTML = '';
    const allTags = new Set(wordData.flatMap(d => d.tagu || []));
    const allBtn = createTagButton('すべて表示');
    allBtn.classList.add('active');
    allBtn.onclick = () => {
        wordData.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));
        displayWords(wordData);
        updateActiveButton(allBtn);
    };
    tagContainer.appendChild(allBtn);
    allTags.forEach(tag => {
        const tagBtn = createTagButton(tag);
        tagBtn.onclick = () => {
            const filteredWords = wordData.filter(d => (d.tagu || []).includes(tag));
            filteredWords.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));
            displayWords(filteredWords);
            updateActiveButton(tagBtn);
        };
        tagContainer.appendChild(tagBtn);
    });
}
function createTagButton(text) {
    const button = document.createElement('button');
    button.className = 'tag-btn';
    button.textContent = text;
    return button;
}
function updateActiveButton(activeBtn) {
    document.querySelectorAll('.tag-btn').forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');

}
