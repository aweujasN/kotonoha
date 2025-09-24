const wordData = [
    {
        kotoba: `徒の悋気`,
        imi: `あだのりんき　悋気は嫉妬の意。<br>自分のことではないのに、他人の恋愛を見てやきもちを焼いたりねたむこと。<br>先日、あの子から気になる相手がいるという話を受けたが、最近交際することになったらしい。その男はどんなやつだ。あの子の事をどれくらい知っているのだ——ああ、全く、徒の悋気甚だしいな。彼女に女としての興味など無いのだから。`,
        gazo: [""],
        tagu: ["故事成語･諺","男女","感情"],
        hiduke: "2025-09-24"
    },
    {
        kotoba: `彳亍`,
        imi: `テキチョク　訓読みで彳「たたず-む」、亍「たたず-む」。<br>行と書くが、立ち止まる、佇む、行きつ戻りつするという意味。躑躅(テキチョク)と同義。<br>一説によると、彳は左足の歩み、亍は右足の歩みを表す。<br>「街路樹に薄桃色の可愛い花を見かけ、思わず彳亍する。」`,
        gazo: [""],
        tagu: ["漢字","熟語"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `颱`,
        imi: ` たいふう。ふうたいではない。`,
        gazo: [""],
        tagu: ["漢字","気象"],
        hiduke: "2025-09-23"
    },
    {
        kotoba: `その人の隣をゆっくり歩く。`,
        imi: `好きってこと。`,
        gazo: [""],
        tagu: ["恋"],
        hiduke: "2025-09-23"
    },
    {
        kotoba: `さつき　皐月　杜鵑花　映山紅`,
        imi: `サツキツツジ。古名、山榴(あいつつじ)。文化的に、躑躅とは区別されることが多い。映山紅(えいさんこう)はつつじも表す。<br>普通、つつじは4月から5月に咲くが、さつきは5月から7月と開花が遅く、即ち旧暦皐月の頃に咲き揃うためこう名付けられた。<br>日本の関東から近畿を中心に自生し、屋久島にも分布する。さつきは根が水気に強く、屢々水際にも自生する。これは水気を嫌うつつじとは異なる。葉の一部は越冬葉となり、この葉は冬でも枯れることがない。<br>強い酸性の土壌を好んだりと、また過酷な環境にも強く丈夫であるため栽培や園芸によく用いられる。多くの園芸品種がある。`,
        gazo: ["gazo/satsuki.jpg"],
        tagu: ["花","漢字"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `つつじ　躑躅　映山紅`,
        imi: `アジアに広く分布する植物で、濃い桃色、白、赤、薄紫などの花弁を持つ。<br>躑は「たちもとお-る」、躅は「ふ-む」と読み、即ちどちらも立ち止まる事を意味する漢字である。「躑躅」は「テキチョク」とも読むが、これは足踏みしたり立ち止まるという意で、つつじをこう書くのは「思わず足を止めて見てしまうほど美しい」ということに由来する、という説がある。<br>さつきとはサツキツツジのことであり、開花時期が他の躑躅よりひと月ふた月遅いことから区別して称される。しかし、躑躅と大きな見た目の違いはないため、つつじを表す漢字がさつきと読まれたり、さつきを表す漢字がつつじと読まれたりと、表記は屢々曖昧である。さつきも参照されたし。<br>ツツジ属の下位分類(ツツジの名を冠する花や冠しない近縁の花)は多く、石楠花(シャクナゲ)もツツジ属のひとつ。アザレアはセイヨウツツジのことである。<br>私達が街でよく見かける種の多くはオオムラサキツツジやヤマツツジと思われる。その美しい見た目とは裏腹に、過酷な環境に耐え、比較的手入れが容易であるため、街路樹として往来を色付けることも多い。<br>ネパールの国花。`,
        gazo: ["gazo/oomurasakitsutsuji.jpg","gazo/yamatsutsuji.jpg","gazo/shakunage.jpg"],
        tagu: ["花","漢字","実際に見た"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `面々の楊貴妃`,
        imi: `俺の妻･恋人は美人だ`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `比翼の鳥`,
        imi: `ひよくのとり<br>雌雄共に片目片翼しか持たず、常に雌雄一体となって飛ぶ伝説の鳥。<br>男女の契りの深いことを喩える。鴛鴦は伝説の鳥だった・・・？→鴛鴦之契`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `鴛鴦之契`,
        imi: `えんおうのちぎり<br>鴛鴦とはおしどり。夫婦の仲が睦まじいことの喩え。鴛鴦は雌雄で常に一緒にいる鳥で、非常に仲の良い夫婦に喩える。あの二人っておしどり夫婦だよねー。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `角を生やす　角を出す`,
        imi: `嫉妬心を抱く。妻に裏切られる。<br>欧州では、妻を寝取られた男の嫉妬だとか何とか。日本ではとりわけ女性に用いる表現。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺","感情"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `後家花咲かす`,
        imi: `女寡は夫婦生活をしていた時と違って身綺麗だから、男からちやほやされる。<br>類：男鰥に蛆が湧き、女寡に花が咲く。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `月下氷人`,
        imi: `媒酌人。二人の間を持つ仲人。`,
        gazo: [""],
        tagu: ["夫婦","四字熟語"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `内助の功`,
        imi: `陰で夫を支える妻の行いや功績`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `縁は異なもの味なもの`,
        imi: `男女の出会い、縁というのは何とも不思議で興味深いものだ。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `姉女房は身代の薬`,
        imi: `あねにょうぼうはしんだいのくすり<br>年上の妻はやりくりが上手だし夫を大事にするから夫婦円満でいられるよ。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `蚤の夫婦`,
        imi: `夫より妻の方が身体の大きい夫婦。うちの両親。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `二十後家は立つが三十後家は立たぬ`,
        imi: `20代で夫と死に別れた寡婦は夫婦生活の悦びを知らぬが故に生涯操を守れるが、30代で寡婦になるとその悦びを知るが故に再婚する事が多い。<br>≒十八後家は立つが四十後家は立たぬ。<br>後家を立つ。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `後家を立つ`,
        imi: `亡夫に操を立て、寡としてとしてそのまま世を暮らす。<br>二十後家は立つが三十後家は立たぬ`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-22"
    },
    {
        kotoba: `弁慶の泣き所`,
        imi: `脛。或いは強者の弱点。`,
        gazo: [""],
        tagu: ["故事成語･諺","身体"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `燕雀安んぞ鴻鵠の志を知らんや`,
        imi: `取るに足らない小さい者に大きな者の大きな志は分からん。<br>単に「鴻鵠の志」でも用いられる。<br>≒鷽鳩大鵬を笑う`,
        gazo: [""],
        tagu: ["鳥","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `うどんげ　優曇華　憂曇華`,
        imi: `3000年に1度咲く伝説の花。或いはアイラトビカズラ(相良飛び葛)の喩え。或いはクサカゲロウ(草蜉蝣)の卵塊。或いは鈴仙。`,
        gazo: [""],
        tagu: ["花","草木","キャラクター","仏教"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `やぶらん　藪蘭`,
        imi: `リリオペ、サマームスカリ。テッポウダマ(福島)、ネコノメ(新潟)、ジャガヒゲ(岐阜)、インノシポ(鹿児島)とも。<br>日本ではほぼ全土に分布し、夏から中秋にかけて花を咲かせる。<br>穂状花序に小さな粒状の淡紫色の花を咲かせる。`,
        gazo: ["gazo/yaburan.jpg"],
        tagu: ["花","実際に見て写真を撮った"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `糟糠の妻は堂より下さず`,
        imi: `そうこうのつまはどうよりくださず<br>単に「糟糠の妻」でも用いられる。<br>ひもじかった頃に傍で支えてくれた妻は生涯マジで大事にしろ。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `内縁の妻`,
        imi: `ないえんのつま<br>婚姻に準ずる関係の女性。互いに婚姻の意思があり、且つ一般的に3年以上の共同生活(事実上の夫婦として)を以て認められる。厳密な年数は定められていない。<br>結婚していなくても法律上の妻として扱われる。<br>3人の女性とそういう関係にあったらどうなるんだろうね。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `髪結いの亭主`,
        imi: `かみゆいのていしゅ<br>ヒモ男。妻の稼ぎで養われる夫。<br>江戸時代、髪結いは女性の稼げる職業だったらしい。<br>桂歌丸師匠(本名椎名巌。横浜市南区真金町に在住していた。)は落語厩火事で「かみい」と江戸訛りで発声していた。<br>俺的関連語:内縁の妻`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `一髪二姿三器量`,
        imi: `いちかみにすがたさんきりょう<br>大和撫子に必要な3拍子。女は1番に綺麗な髪、2番目に綺麗な身なり、3番目に綺麗な容姿が重要である。逆に、美人でも身なりを整えてないと綺麗に見えないし、美人で身なりを整えていても髪がボサボサじゃ綺麗に見えないよという戒め。諸説ある。<br>≒一髪二化粧三衣装`,
        gazo: [""],
        tagu: ["男女","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `一押し二金三男`,
        imi: `いちおしにかねさんおとこ<br>モテる男の3拍子。男は1番に押しの良さ、2番目に金、3番目に男ぶりが重要であるという主張。諸説ある。<br>↔一髪二化粧三衣装`,
        gazo: [""],
        tagu: ["男女","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `一髪二化粧三衣装`,
        imi: `いちかみにけしょうさんいしょう<br>いい女の3拍子。女は1番に綺麗な髪の、2番目に綺麗な化粧、3番目に綺麗な被服が重要であるという主張。諸説ある。<br>↔一押し二金三男`,
        gazo: [""],
        tagu: ["男女","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `男鰥に蛆が湧き、女寡に花が咲く`,
        imi: `おとこやもめにうじがわき、おんなやもめにはながさく<br>独り身になった男は不潔な生活になっていくが、一方女が独り身は夫に振り回される事がなくなり、また小綺麗になって一層魅力が増す。<br>確かにうちのとーちゃんかーちゃんとかそうなるかもしれない。`,
        gazo: [""],
        tagu: ["夫婦","故事成語･諺"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `やもめ　寡　孀　寡婦　釐　鰥`,
        imi: `寡婦(かふ)。widow(ウィドー)。孀婦(そうふ)。後家(ごけ)。未亡人。<br>夫を失くし独りになってしまった女性。寡婦(かふ)、widowは離婚の場合も含む。男の場合は鰥、男やもめ、寡夫(かふ)、寡男(やもお)、とも。<br>男鰥に蛆が湧き、女寡に花が咲く。<br>`,
        gazo: [""],
        tagu: ["夫婦","漢字"],
        hiduke: "2025-09-19"
    },
    {
        kotoba: `はしばみ　榛`,
        imi: `はしばみ はり<br>シン<br>はんのき。または藪、雑木林。榛荊(シンケイ)`,
        gazo: [""],
        tagu: ["漢字","草木"],
        hiduke: "2025-09-17"
    },
    {
        kotoba: `いかる　鵤　桑鳲 <br>いかるが　鵤　斑鳩`,
        imi: `頭が黒く、嘴の黄色い小鳥。嘴で木の実をころころ転がしたり木の実を好んで食べたところから、昔は「豆転がし」「まめうまし」などと呼ばれていた。<br>鳴き声が「いかるこきー」と聞こえるらしい。¿鵤に烏賊が怒るが如何か?`,
        gazo: ["gazo/ikaru.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `鷽鳩大鵬を笑う　鷽鳩笑鵬`,
        imi: `がくきゅうたいほうをわらう　がくきゅうしょうほう<br>ちっぽけなのがおっきなのを笑うこと。鷽鳩は小さな鳩の意(一説によると鵤)。<br>≒燕雀安んぞ鴻鵠の志を知らんや`,
        gazo: [""],
        tagu: ["鳥","故事成語･諺","四字熟語"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `うそ　鷽`,
        imi: `雀よりやや大きい小鳥。翼開長26cm。嘴は太くて黒くて短い。<br>全体的に灰色で、頭と翼・尾っぽは黒い。雄は首周りが橙色。<br>鷽鳩大鵬を笑う　鷽鳩笑鵬`,
        gazo: ["gazo/uso.jpg"],
        tagu: ["鳥","漢字","故事成語･諺","四字熟語"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `ひたき　鶲`,
        imi: `多くの種、多くの姿･色模様を持つ小鳥。鶫とは姉妹種。<br>雄が色気づいて、雌が垢抜けない姿が多い。秋の季語。`,
        gazo: ["gazo/nobitaki.jpg","gazo/joubitaki.jpg","gazo/ooruri.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `鶍の嘴`,
        imi: `いすかのはし　鶍の嘴の食い違いとも。<br>物事が噛み合わない、食い違うこと。<br>実際に鶍のくちばしを見られたし。`,
        gazo: [""],
        tagu: ["鳥","故事成語･諺"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `いすか　鶍　交喙`,
        imi: `嘴がばってん箸になってる小鳥。<br>雄は橙がかった赤色、メスは全体的に灰色で翼や背中に黄色い模様がある。<br>書く亊成す亊、悉く鶍の嘴だ。`,
        gazo: ["gazo/isuka.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `アサーティブネス　アサーション`,
        imi: `相手を尊重しつつ、自分の気持ちや考えを率直かつ適切に伝えるコミュスキル。<br>お互いに尊重し合ってないと成り立たない。阿呆には無理。`,
        gazo: [""],
        tagu: ["スキル","コミュニケーション"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `なつめ　棗`,
        imi: `和名なつめ、中国語でソウ。<br>漢字が棘棘しいがバラ目なので実際も棘棘してる。実はビタミンが豊富らしい。<br>棗棗石「吾輩は朿がある」`,
        gazo: [""],
        tagu: ["草木","実","漢字"],
        hiduke: "2025-09-16"
    },
    {
        kotoba: `膕`,
        imi: `よほろ　ひかがみ　膝膕(シッカク)<br>膝小僧の裏。膝窩。マニアック。`,
        gazo: ["gazo/hikagami.jpg"],
        tagu: ["身体","漢字"],
        hiduke: "2025-09-15"
    },
    {
        kotoba: `ウェンケバッハ型Ⅱ度房室ブロック`,
        imi: `モビッツⅠ型とも。<br>洞結節から心房結節までの電気信号は流れるが、房室結節からの電気信号が正常に伝達されない。<br>PQ間隔が1泊毎に徐々に延長していき、QRS波が欠落する。<br>モビッツⅡ型(PQ間隔の延長なしに突如QRS波が欠落する)になるとまずい。<br>ウェンケバッハの旋律を夜に聴いたせいです。`,
        gazo: ["gazo/sinzo.png"],
        tagu: ["病"],
        hiduke: "2025-09-14"
    },
    {
        kotoba: `ゴジラ`,
        imi: `ムカデエビ鋼ムカデエビ目ゴジラ科。海底洞窟に生息するムカデに似た細長い甲殻類。軟甲綱でもエビ目でもないためエビではない。<br>皆さんご存知ゴジラ。カリブ海に分布する2属(ゴジラ属とコビトゴジラ属)5種が存在する。<br>なお、同目にはクモンガ科、オヨギモスラ科も存在する。<br>`,
        gazo: ["gazo/mukadeebi.png"],
        tagu: ["虫","ゴジラ"],
        hiduke: "2025-09-13"
    },
    {
        kotoba: `チョウセンメクラチビゴミムシ`,
        imi: `決して悪口ではない。<br>下位にツシマメクラチビゴミムシの1種が存在する。`,
        gazo: [""],
        tagu: ["虫"],
        hiduke: "2025-09-13"
    },
    {
        kotoba: `トゲアリトゲナシトゲトゲ`,
        imi: `トゲトゲって虫がいて、そのトゲのない虫が見つかったからトゲナシトゲトゲって名前がつけられたの。そのあとにトゲのあるトゲナシトゲトゲが見つかったからトゲアリトゲナシトゲトゲって名前になったんだって。<br>なお、トゲアリトゲナシトゲトゲという和名のトゲハムシに該当するものは現在存在しない。学界で一般に呼ばれる和名は「ベニモントゲホソヒラタハムシ」。`,
        gazo: [""],
        tagu: ["虫"],
        hiduke: "2025-09-13"
    },
    {
        kotoba: `かや　茅　萱　茆　榧`,
        imi: `ちがや、芒、菅(すげ)などの細く真っ直ぐ育つ有用植物の呼称。かや葺き屋根のかや。<br>茅はちがや・ち、萱はわすれぐさ、茆はじゅんさい・ぬなわとも。<br>椿萱(チンケン)は父母。萱堂は母を敬った言葉。↔椿堂、椿庭。<br>椿萱並茂：両親が健康で暮らしていること。<br><br>榧はかやのき。20mにもなる常緑針葉樹。<br>いちい(おんこ、あららぎ)、きゃらぼくの近縁種(イチイ科カヤ属)。<br>↑こいつらと違って種に毒のある赤い実はつけない。<br>あれ甘いんだよな。ちっちゃい頃、公園のおんこの実(低木だったので多分きゃらぼくの実)をよく取って食べていた。`,
        gazo: [""],
        tagu: ["草木","実","漢字"],
        hiduke: "2025-09-12"
    },
    {
        kotoba: `むしろ　筵　莚　席　蓆　苫　蒻　蒲　莞`,
        imi: `藁や藺草などで編まれた敷物。<br>筵と莚は冠が違う。席と蓆は冠の有無。蒟蒻の蒻はがまのめ、蒲はがま・かわやなぎ。蒲(がま)で編まれた莚を蒻蓆(ジャクセキ)。苫は茅や菅義偉（元首相、歴代最長の菅茅長官。すげー。）で編んだむしろ。(植物の場合は寧ろすがよりすげが主流だろ！)。莞は藺も参照。`,
        gazo: [""],
        tagu: ["草木","漢字","物"],
        hiduke: "2025-09-12"
    },
    {
        kotoba: `いぐさ　藺　(莞)`,
        imi: `莞　い　むしろ　カン<br>藺　い　いぐさ<br>別名：燈芯草(とうしんそう)。莞は太藺(ふとい)を指す。畳のあれ。莞には筵(むしろ）、にっこり笑う様という意味もある。莞草(カンソウ)と書くと深山樒(みやましきみ)になる。<br>「莞って、藺草より寧ろ筵だ。毟ろ。おらぁそろそろ行ぐさ」<br>僕の感じの悪い言い草に、幹事の寛治は莞爾と笑った。「漢字ってのはむずかし莞ナ。」`,
        gazo: [""],
        tagu: ["草木","漢字","表情"],
        hiduke: "2025-09-12"
    },
    {
        kotoba: "にお　鳰",
        imi: "鸊鷉(かいつぶり)の古名。<br>「鳰の海」「鳰の湖(うみ)」は琵琶湖の古称。鳰とその近縁種が沢山いたことから。滋賀県の県鳥。",
        gazo: ["gazo/nionoumi.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "かいつぶり　鸊鷉",
        imi: "鸊鷉(ヘキテイ)　鷸子(つぶり)。鳰は古名。<br>全体的に焦茶色がかった消炭色。首は季節で羽色が変わり、夏は暗い赤茶色、冬は黄茶色になる。<br>翼開長40cm強。ほぼ水上生活で、潜水して魚、虫、甲殻類、貝などの獲物を捕える。1回の潜水は平均15秒くらい、長いと30秒になるが水深は2mまで。滋賀県の県鳥。",
        gazo: ["gazo/kaitsuburi.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "しぎ　鴫　鷸",
        imi: "鷸はかわせみとも。鷸子と書くとつぶり（かいつぶり）。鴫は国字。<br>渡りを行う種が殆どだがヤマシギのように留まる種もいる。夏は寒帯・亜寒帯で繁殖し、冬は南下して越冬。<br>人ちゃんの都合により種の多くは環境省や都道府県でレッドリスト入りしている。<br>鷸蚌の争い(イツボウのあらそい)：蚌(どぶがい)と争ってたらどっちも漁師に捕まっちゃった≒犬兎の争い：どっちも猟師に捕まっちゃった≒漁夫の利。蚌ははまぐり、からすがいとも。",
        gazo: ["gazo/tashigi.jpg","gazo/yamashigi.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-11"
    },
    {
        kotoba: "かわせみ　翡翠　翡　翠　鷸　魚狗　水狗　魚虎　<br>川蟬",
        imi: "翡は雄、翠は雌。鷸はしぎ、魚虎はハリセンボンとも。<br>翼はサファイヤの如き美しい碧色、胸はマンダリンガーネットのような鮮やかな橙色で飾られた、翔ぶ宝石。ネプチュナイトの嘴で水中の獲物を攫う。雌は下嘴もマンダリンガーネット。<br><br><i>”なんてことだ、私はおかしくなってしまった</i>”<br><i>”Holy cow, the jewel's playing with the water's surface.”</i><br><br>意外と土の崖地に横穴を掘って営巣するタイプの翡翠。大きな獲物は叩きつけて骨を砕いてから呑み込む。消化出来なかったものは吐く。意外とエグいタイプの翡翠。色鮮やかっつっても絵の具を塗ったようなアイツ（鴛）とは品が違うんだよ品が。",
        gazo: ["gazo/kawasemi1.jpg","gazo/kawasemi2.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "とび　鳶　鴟　鵄　鵈",
        imi: "鴟はふくろうとも。<br>烏より一回り大きい最も身近な猛禽の1つ。翼開長160cm。動物や魚をスカベンジャー。生きた鼠や小型の生物も食べる。鷹を生むことは殆ど無い。<br>鵈をみさごと読む地名があるのは、昔誰かが写し間違えた所為。",
        gazo: ["gazo/tobi.jpg","gazo/nynerutobi.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "ふくろう　梟　鴟　鴞",
        imi: "鴟はとびとも。<br>森の哲学者、森の忍者。日本で梟というと大体ウラルフクロウ。夜行性。翼開長100cm。<br>鼠が主食。木菟と違い、頭が丸っこい。ホーホーホー。",
        gazo: ["gazo/uralfukurou.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "みみずく　鵩　鶹　鵂<br> 木菟　木兎　耳木兎",
        imi: "角鴟(かくし)　鴟鵂(しきゅう)　鴟はとび・ふくろうの総称。<br>古名ツク、ズク。羽角（耳に見える羽毛）がある梟。鷲木菟の枝木にすらりと立つ姿たるや、勇ましく美しく萌え。冬の季語",
        gazo: ["gazo/wasimimizuku.jpg"],
        tagu: ["鳥","漢字"],
        hiduke: "2025-09-10"
    },
    {
        kotoba: "おしどり　鴛鴦　鴛　鴦",
        imi: "鴛は雄、鴦は雌。<br>ロシア南東部、朝鮮半島、日本、中国などの東アジアに分布。<br>雄はパレットのようで前衛的。繁殖期になると首周りがフォルムチェンジする。雌は地味。くっついて離れない2匹は、宛ら仲睦まじい夫婦のよう。鴛鴦之契。",
        gazo: ["gazo/oshidoriosumesu.jpg"],
        tagu: ["鳥","漢字","夫婦"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: `鷙鳥百を累ぬるも<br>一鶚に如かず`,
        imi: `シチョウひゃくをかさぬるもいちガクにしかず<br>有象無象無能多数＜有能1人の意。社会とか将にそんな感じ。やっぱ量より質だよな。<br>鷙鳥：鷙(あらどり)。鷲や鷹などの猛鳥の総称。<br>鶚：みさご。野蛮なあらどり共とは素質が違うんだよ素質が。`,
        gazo: [""],
        tagu: ["故事成語･諺","鳥"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "みさご　雎　鶚　鵃",
        imi: "雎鳩(ショキュウ)　魚鷹(うおたか)　Osprey<br>一目惚れするくらい格好良い。白と黒とでデザインされてるのも獲物の捕え方も優雅に留まる姿も勇ましく飛ぶ姿も兎に角全てが格好良い。格好いい。<br>魚を好んで食べるタカ科の鳥。爬虫類、鳥類、貝類を食べることもある。<br>全長60cm、翼開長180cm、体重1.5kg。主に海岸に生息するが、湖沼や河沿いなど内陸部にも。<br>水面をゆっくりと低空飛行し、獲物を捉えると素早く翼を搏かせてホバリング、獲物目掛けて急降下、水面近くで両脚を伸ばし捕まえる。夫婦仲の良い例えにも。鴛鴦と違って大人な恋愛してると思う。<br>鷙鳥百を累ぬるも一鶚に如かず。",
        gazo: ["gazo/misago1.jpg","gazo/misago2.webp","gazo/misago3.jpg"],
        tagu: ["鳥","漢字","夫婦"],
        hiduke: "2025-09-09"
    },
    {
        kotoba: "光栄",
        imi: "こうえい。",
        gazo: ["koei.m"],
        tagu: [],
        hiduke: "2001-05-30"
    }
];

// ★ 選択中(含む)と除外中のタグをそれぞれ保存
let includeTags = new Set();
let excludeTags = new Set();

// ページの読み込みが完了したら実行
window.onload = function() {
    const wordCount = wordData.length;
    const countDisplay = document.getElementById('word-count-display');
    if (countDisplay) {
        countDisplay.textContent = `登録数: ${wordCount}`;
    }
    updateDisplay();
    displayTags();
    setupEventListeners();
};

function createWordEntryElement(data, entryId) {
    const entryDiv = document.createElement('div');
    entryDiv.className = 'word-entry';
    entryDiv.id = entryId;
    entryDiv.dataset.term = data.kotoba;

    let imagesHtml = '';
    if (data.gazo && data.gazo.length > 0 && data.gazo[0] !== "") {
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

function updateDisplay() {
    const searchBox = document.getElementById('search-box');
    const query = searchBox.value.trim().toLowerCase();
    
    let filteredData = wordData;

    // 選択(含む)タグでの絞り込み
    if (includeTags.size > 0) {
        const tagsToInclude = Array.from(includeTags);
        filteredData = filteredData.filter(item => 
            tagsToInclude.every(tag => (item.tagu || []).includes(tag))
        );
    }

    // 除外タグでの絞り込み
    if (excludeTags.size > 0) {
        const tagsToExclude = Array.from(excludeTags);
        filteredData = filteredData.filter(item => 
            !tagsToExclude.some(tag => (item.tagu || []).includes(tag))
        );
    }

    // 検索キーワードでの絞り込み
    if (query) {
        const tempDiv = document.createElement('div');
        filteredData = filteredData.filter(data => {
            tempDiv.innerHTML = data.kotoba;
            const plainTerm = tempDiv.textContent.toLowerCase();
            tempDiv.innerHTML = data.imi;
            const plainDefinition = tempDiv.textContent.toLowerCase();
            return plainTerm.includes(query) || plainDefinition.includes(query);
        });
    }

    // 登録日でソート
    filteredData.sort((a, b) => new Date(b.hiduke) - new Date(a.hiduke));

    // 最終結果を表示
    displayWords(filteredData);
}

function setupEventListeners() {
    const container = document.getElementById('word-container');
    const searchBox = document.getElementById('search-box');
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzoBSFYnsEr-ZeBICWlRIO1TsoX6iw3cj98qKvMvc3PudnC3ixrlc62db3AQktvWudKQA/exec';

    searchBox.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            const query = event.target.value.trim().toLowerCase();
            if (query && WEB_APP_URL) {
                fetch(WEB_APP_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    // type: 'search' を指定
                    body: JSON.stringify({ type: 'search', content: query }),
                })
                .catch(error => console.error('Error sending search query:', error));
            }

            // --- 表示の絞り込み処理（変更なし） ---
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
        includeTags.clear();
        excludeTags.clear();
        document.querySelectorAll('#tag-container .tag-btn').forEach(b => {
            b.classList.remove('active', 'exclude');
        });
        allBtn.classList.add('active');
        updateDisplay();
    };
    tagContainer.appendChild(allBtn);

    allTags.forEach(tag => {
        const tagBtn = createTagButton(tag);
        tagBtn.onclick = () => {
            const isIncluded = includeTags.has(tag);
            const isExcluded = excludeTags.has(tag);

            if (!isIncluded && !isExcluded) {
                // 通常 -> 選択
                includeTags.add(tag);
                tagBtn.classList.add('active');
            } else if (isIncluded) {
                // 選択 -> 除外
                includeTags.delete(tag);
                excludeTags.add(tag);
                tagBtn.classList.remove('active');
                tagBtn.classList.add('exclude');
            } else if (isExcluded) {
                // 除外 -> 通常
                excludeTags.delete(tag);
                tagBtn.classList.remove('exclude');
            }

            if (includeTags.size > 0 || excludeTags.size > 0) {
                allBtn.classList.remove('active');
            } else {
                allBtn.classList.add('active');
            }
            updateDisplay();
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