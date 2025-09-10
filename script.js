const wordData = [
    {
        kotoba: "とび",
        imi: "鳶　鴟（ふくろうとも）　鵄　鵈<br>とんび。カラスより一回り大きい猛禽。翼開長160cm。動物や魚をスカベンジャー。腐った肉だけじゃなくてねずみ等の小型の生物も食べる。たかを生むことは殆ど無い。<br>鵈をみさごと読む地名があるのは、昔誰かが写し間違えた。",
        gazo: ["gazo/tobi.jpg","gazo/nynerutobi.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "ふくろう",
        imi: "梟　鴞<br>森の哲学者、森の忍者。日本でふくろうというと大体ウラルフクロウ。全長60cm、翼開長100cm。<br>夜行性でねずみをよく食べる。みみずくと違い、頭が丸っこい。ホーホーホー。",
        gazo: ["gazo/uralfukurou.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "みみずく",
        imi: "木兎　耳木兎　鵩　鶹　鵂　角鴟(かくし)　鴟鵂(しきゅう)<br>古名ツク、ズク。羽角（耳に見える羽毛）があるふくろう。鷲木菟の枝木に立つ姿たるや、勇ましく美しく萌え。冬の季語",
        gazo: ["gazo/wasimimizuku.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "みさご",
        imi: "雎　鶚　鵃　雎鳩(ショキュウ)　魚鷹(うおたか)　Osprey<br>魚を好んで食べるタカ科の鳥。爬虫類、鳥類、貝類を食べることもある。全長60cm、翼開長180cm、体重1.5kg。<br>主に海岸に生息するが、湖沼や河沿など内陸部にも生息。<br>水面をゆっくりと低空飛行し、獲物を見つけると素早く翼を羽ばたかせてホバリング、急降下、水面近くで脚を伸ばし両足で獲物を捕らえる。夫婦仲が良い例えにも。おしどりより大人な恋愛してそう。<br>鷙鳥百を累ぬるも一鶚に如かず：無能な人間が沢山いても有能な人間一人には敵わない。営業会社とか将にそんな感じ。<br>（鷙鳥（シチョウ）：鷙（あらどり）。鷲や鷹などの猛鳥の総称）",
        gazo: ["gazo/misago1.jpg","gazo/misago2.webp","gazo/misago3.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "おしどり",
        imi: "鴛鴦(おしどり、エンオウ)　鴛(おしどり(雄))　鴦(おしどり(雌))<br>ロシア南東部、朝鮮半島、日本、中国などの東アジアに分布。全長48cmくらい。<br>オスはパレットみたいな色合いで前衛的。繁殖期になると首周りがフォルムチェンジする。メスは地味。常に一緒にいる仲睦まじい男女に喩える。",
        gazo: ["gazo/oshidoriosumesu.jpg"],
        tagu: ["鳥"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "光栄",
        imi: "こうえい。",
        gazo: [],
        tagu: [],
        hiduke: "2001-05-30"
    }

];

// ページの読み込みが完了したら実行
window.onload = function() {
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
        tempDiv.innerHTML = linkTargetEntry.kotoba;
        const plainTerm = tempDiv.textContent;
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

    // ステップ1でコピーしたウェブアプリのURLをここに貼り付け
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzyQf_iow0vedp-EL1_49utcNZfaXmgDAZeDXBbJpF2lItKX_2ozBl3PxSY6mvzn1R_/exec';

    searchBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();

            // サーバーに検索キーワードを送信
            if (query && WEB_APP_URL) {
                fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors', // CORSエラーを回避するため
                    headers: {
                        'Content-Type': 'application/json',
                    },
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