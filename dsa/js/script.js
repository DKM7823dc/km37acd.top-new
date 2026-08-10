// 女性データ設定 - 各自に複数の画像を設定（スライダー用）
const girlsData = [
    {
        id: 1,
        images: ['img/1.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/],
        name: 'さくら',
        age: 23,
        ageGroup: '20-25',
        style: 'sweet',
        body: 'slim',
        description: '現役大学院生、新しい刺激を探究するのが好き',
        tags: ['フェラOK', '中出しOK', '3P OK', '刺激好き']
    },
    {
        id: 2,
        images: ['img/2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a4.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'ゆり',
        age: 23,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'curvy',
        description: 'セクシーなOL、抜群のプロポーションで魅惑的',
        tags: ['パイズリOK', '生挿入OK', 'バックOK', '甘くて可愛い']
    },
    {
        id: 3,
        images: ['img/3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a7.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/],
        name: 'りん',
        age: 25,
        ageGroup: '20-25',
        style: 'pure',
        body: 'slim',
        description: 'パートタイムモデル、豊満なボディ、濡れやすくイキやすい',
        tags: ['中出しOK', 'フェラOK', '顔射OK', 'サービス精神旺盛']
    },
    {
        id: 4,
        images: ['img/4.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a10.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'ゆき',
        age: 26,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '成熟した人妻、欲求不満で刺激を求めている',
        tags: ['3P OK', '生挿入OK', 'バックOK', 'テクニック一流']
    },
    {
        id: 5,
        images: ['img/5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a13.jpg*/, 'a14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a15.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a15.jpg*/],
        name: 'みみ',
        age: 23,
        ageGroup: '18-25',
        style: 'sexy',
        body: 'fit',
        description: 'プロモデル、S字カーブ、体が柔らかい',
        tags: ['フェラOK', 'パイズリOK', '豊富な体位', '持久力抜群']
    },
    {
        id: 6,
        images: ['img/6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/],
        name: 'さくら',
        age: 23,
        ageGroup: '20-25',
        style: 'sweet',
        body: 'slim',
        description: '現役大学院生、新しい刺激を探究するのが好き',
        tags: ['フェラOK', '中出しOK', '3P OK', '刺激好き']
    },
    {
        id: 7,
        images: ['img/7.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/],
        name: 'かおり',
        age: 35,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'curvy',
        description: '成熟した人妻、豊満なボディで優しく思いやりがある',
        tags: ['フェラOK', '中出しOK', 'パイズリOK', 'Dカップ']
    },
    {
        id: 8,
        images: ['img/8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/],
        name: 'まい',
        age: 32,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '熟女の女上司、色気があり、新しい刺激が好き',
        tags: ['生挿入OK', 'バックOK', 'パイズリOK', '経験豊富']
    },
    {
        id: 9,
        images: ['img/9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a10.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'ゆき',
        age: 26,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '成熟した人妻、欲求不満で刺激を求めている',
        tags: ['3P OK', '生挿入OK', 'バックOK', 'テクニック一流']
    },
    {
        id: 10,
        images: ['img/10.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/],
        name: 'あやか',
        age: 24,
        ageGroup: '18-25',
        style: 'sweet',
        body: 'fit',
        description: 'パティシエ、豊満なボディ、敏感体質',
        tags: ['顔射OK', 'フェラOK', '3P OK', '敏感体質']
    },
    {
        id: 11,
        images: ['img/11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/, 'a15.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a15.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/],
        name: 'さな',
        age: 27,
        ageGroup: '26-35',
        style: 'sexy',
        body: 'fit',
        description: 'セクシーモデル、極上のボディと一流のテクニック',
        tags: ['パイズリOK', '生挿入OK', 'バックOK', '中出しOK']
    },
    {
        id: 12,
        images: ['img/12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a4.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'ゆり',
        age: 23,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'curvy',
        description: 'セクシーなOL、抜群のプロポーションで魅惑的',
        tags: ['パイズリOK', '生挿入OK', 'バックOK', '甘くて可愛い']
    },
    {
        id: 13,
        images: ['img/13.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/],
        name: 'ひな',
        age: 33,
        ageGroup: '26-35',
        style: 'mature',
        body: 'slim',
        description: 'スリムな熟女、飢えていて満足を求めている',
        tags: ['生挿入OK', '3P OK', 'バックOK', '超欲求不満']
    },
    {
        id: 14,
        images: ['img/14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'なな',
        age: 25,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'slim',
        description: 'セクシーダンサー、豊満なボディでセクシーダンスが得意',
        tags: ['フェラOK', 'パイズリOK', '顔射OK', '爆乳']
    },
    {
        id: 15,
        images: ['img/15.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a13.jpg*/, 'a14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a15.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a15.jpg*/],
        name: 'みみ',
        age: 23,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'fit',
        description: 'プロモデル、S字カーブ、体が柔らかい',
        tags: ['フェラOK', 'パイズリOK', '豊富な体位', '持久力抜群']
    },
    {
        id: 16,
        images: ['img/16.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/],
        name: 'さくら',
        age: 23,
        ageGroup: '20-25',
        style: 'sweet',
        body: 'slim',
        description: '現役大学院生、新しい刺激を探究するのが好き',
        tags: ['フェラOK', '中出しOK', '3P OK', '刺激好き']
    },
    {
        id: 17,
        images: ['img/17.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/],
        name: 'かおり',
        age: 35,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'curvy',
        description: '成熟した人妻、豊満なボディで優しく思いやりがある',
        tags: ['フェラOK', '中出しOK', 'パイズリOK', 'Dカップ']
    },
    {
        id: 18,
        images: ['img/18.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/],
        name: 'まい',
        age: 32,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '熟女の女上司、色気があり、新しい刺激が好き',
        tags: ['生挿入OK', 'バックOK', 'パイズリOK', '経験豊富']
    },
    {
        id: 19,
        images: ['img/19.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a4.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'ゆり',
        age: 23,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'curvy',
        description: 'セクシーなOL、抜群のプロポーションで魅惑的',
        tags: ['パイズリOK', '生挿入OK', 'バックOK', '甘くて可愛い']
    },
    {
        id: 20,
        images: ['img/21.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/],
        name: 'ひな',
        age: 33,
        ageGroup: '26-35',
        style: 'mature',
        body: 'slim',
        description: 'スリムな熟女、飢えていて満足を求めている',
        tags: ['生挿入OK', '3P OK', 'バックOK', '超欲求不満']
    },
    {
        id: 21,
        images: ['img/20.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'なな',
        age: 25,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'slim',
        description: 'セクシーダンサー、豊満なボディでセクシーダンスが得意',
        tags: ['フェラOK', 'パイズリOK', '顔射OK', '爆乳']
    },
    {
        id: 22,
        images: ['img/22.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a7.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/],
        name: 'りん',
        age: 25,
        ageGroup: '20-25',
        style: 'pure',
        body: 'slim',
        description: 'パートタイムモデル、豊満なボディ、濡れやすくイキやすい',
        tags: ['中出しOK', 'フェラOK', '顔射OK', 'サービス精神旺盛']
    },
    {
        id: 23,
        images: ['img/23.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/, 'a1.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/],
        name: 'あみ',
        age: 28,
        ageGroup: '26-35',
        style: 'pure',
        body: 'slim',
        description: '清純派熟女、美容師、スリムで上品な雰囲気',
        tags: ['フェラOK', '中出しOK', 'サービス精神旺盛', 'パイパン']
    },
    {
        id: 24,
        images: ['img/24.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/, 'a13.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a13.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/],
        name: 'あや',
        age: 30,
        ageGroup: '26-35',
        style: 'pure',
        body: 'curvy',
        description: '豊満な人妻、豊満なボディで気品がある',
        tags: ['ビクビクしやすい', '3P OK', 'バックOK', '清楚ビッチ']
    },
    {
        id: 25,
        images: ['img/29.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a10.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'ゆき',
        age: 26,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '成熟した人妻、欲求不満で刺激を求めている',
        tags: ['3P OK', '生挿入OK', 'バックOK', 'テクニック一流']
    },
    {
        id: 26,
        images: ['img/25.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/],
        name: 'あやか',
        age: 24,
        ageGroup: '18-25',
        style: 'sweet',
        body: 'fit',
        description: 'パティシエ、豊満なボディ、敏感体質',
        tags: ['顔射OK', 'フェラOK', '3P OK', '敏感体質']
    },
    {
        id: 27,
        images: ['img/26.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/, 'a1.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/],
        name: 'しずか',
        age: 29,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'slim',
        description: '甘いマスクの熟女、スリムで優しく可愛らしい',
        tags: ['フェラOK', '中出しOK', '顔射OK', '超優しい']
    },
    {
        id: 28,
        images: ['img/27.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a13.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'こころ',
        age: 28,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'curvy',
        description: '甘いマスクの人妻、豊満でセクシー、優しく思いやりがある',
        tags: ['パイズリOK', '3P OK', '生挿入OK', '気配り上手']
    },
    {
        id: 29,
        images: ['img/28.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/, 'a7.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a7.jpg*/],
        name: 'みく',
        age: 31,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'fit',
        description: '甘いマスクの熟女、フィットネスボディで活力に溢れている',
        tags: ['バックOK', '中出しOK', '豊富な体位', '超エネルギッシュ']
    },
    {
        id: 30,
        images: ['img/30.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a15.jpg*/, 'a4.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/],
        name: 'れい',
        age: 27,
        ageGroup: '26-35',
        style: 'mature',
        body: 'slim',
        description: '成熟して知的、スリムで上品な雰囲気',
        tags: ['フェラOK', '3P OK', 'サービス精神旺盛', '超知的']
    },
    {
        id: 31,
        images: ['img/31.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/],
        name: 'さくら',
        age: 23,
        ageGroup: '20-25',
        style: 'sweet',
        body: 'slim',
        description: '現役大学院生、新しい刺激を探究するのが好き',
        tags: ['フェラOK', '中出しOK', '3P OK', '刺激好き']
    },
    {
        id: 32,
        images: ['img/32.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/],
        name: 'かおり',
        age: 35,
        ageGroup: '26-35',
        style: 'sweet',
        body: 'curvy',
        description: '成熟した人妻、豊満なボディで優しく思いやりがある',
        tags: ['フェラOK', '中出しOK', 'パイズリOK', 'Dカップ']
    },
    {
        id: 33,
        images: ['img/33.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/, 'a9.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a9.jpg*/],
        name: 'まい',
        age: 32,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '熟女の女上司、色気があり、新しい刺激が好き',
        tags: ['生挿入OK', 'バックOK', 'パイズリOK', '経験豊富']
    },
    {
        id: 34,
        images: ['img/34.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a4.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'ゆり',
        age: 23,
        ageGroup: '20-25',
        style: 'sexy',
        body: 'curvy',
        description: 'セクシーなOL、抜群のプロポーションで魅惑的',
        tags: ['パイズリOK', '生挿入OK', 'バックOK', '甘くて可愛い']
    },
    {
        id: 35,
        images: ['img/35.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/, 'a8.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a8.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/],
        name: 'ひな',
        age: 33,
        ageGroup: '26-35',
        style: 'mature',
        body: 'slim',
        description: 'スリムな熟女、飢えていて満足を求めている',
        tags: ['生挿入OK', '3P OK', 'バックOK', '超欲求不満']
    }
    ,
    {
        id: 36,
        images: ['img/36.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a10.jpg*/, 'a11.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a12.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/],
        name: 'ゆき',
        age: 26,
        ageGroup: '26-35',
        style: 'mature',
        body: 'curvy',
        description: '成熟した人妻、欲求不満で刺激を求めている',
        tags: ['3P OK', '生挿入OK', 'バックOK', 'テクニック一流']
    },
    {
        id: 37,
        images: ['img/37.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a11.jpg*/, 'a14.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/],
        name: 'あやか',
        age: 36,
        ageGroup: '35+',
        style: 'sweet',
        body: 'fit',
        description: 'パティシエ、豊満なボディ、敏感体質',
        tags: ['顔射OK', 'フェラOK', '3P OK', '敏感体質']
    },
    {
        id: 38,
        images: ['img/38.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a12.jpg*/, 'a1.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a1.jpg*/, 'a5.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a5.jpg*/],
        name: 'しずか',
        age: 39,
        ageGroup: '35+',
        style: 'sweet',
        body: 'slim',
        description: '甘いマスクの熟女、スリムで優しく可愛らしい',
        tags: ['フェラOK', '中出しOK', '顔射OK', '超優しい']
    },
    {
        id: 39,
        images: ['img/39.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a13.jpg*/, 'a2.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a2.jpg*/, 'a6.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a6.jpg*/],
        name: 'こころ',
        age: 38,
        ageGroup: '35+',
        style: 'sweet',
        body: 'curvy',
        description: '甘いマスクの人妻、豊満でセクシー、優しく思いやりがある',
        tags: ['パイズリOK', '3P OK', '生挿入OK', '気配り上手']
    },
    {
        id: 40,
        images: ['img/40.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a14.jpg*/, 'a3.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a3.jpg*/, 'a7.jpg'/*tpa=https://yyffhy.top/aakk19/static/js/static/images/girls/a7.jpg*/],
        name: 'みく',
        age: 36,
        ageGroup: '35+',
        style: 'sweet',
        body: 'fit',
        description: '甘いマスクの熟女、フィットネスボディで活力に溢れている',
        tags: ['バックOK', '中出しOK', '豊富な体位', '超エネルギッシュ']
    },
];

// 現在のフィルター条件
let currentFilters = {
    age: 'all',
    style: 'all',
    body: 'all'
};

let filteredGirls = [];

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initFilters();
    renderGirls();
});

// モーダル表示
function showModal() {
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// モーダル非表示
function closeModal() {
    const modal = document.getElementById('successModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// フィルター初期化
function initFilters() {
    const ageFilter = document.getElementById('age-filter');
    const styleFilter = document.getElementById('style-filter');
    const bodyFilter = document.getElementById('body-filter');

    ageFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            setActiveFilter(ageFilter, e.target);
            currentFilters.age = e.target.dataset.filter;
            renderGirls();
        }
    });

    styleFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            setActiveFilter(styleFilter, e.target);
            currentFilters.style = e.target.dataset.filter;
            renderGirls();
        }
    });

    bodyFilter.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            setActiveFilter(bodyFilter, e.target);
            currentFilters.body = e.target.dataset.filter;
            renderGirls();
        }
    });
}

// アクティブフィルターボタン設定
function setActiveFilter(container, activeBtn) {
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

// 女性カードのレンダリング
function renderGirls() {
    const grid = document.getElementById('girls-grid');
    
    // データフィルタリング
    filteredGirls = girlsData.filter(girl => {
        const ageMatch = currentFilters.age === 'all' || girl.ageGroup === currentFilters.age;
        const styleMatch = currentFilters.style === 'all' || girl.style === currentFilters.style;
        const bodyMatch = currentFilters.body === 'all' || girl.body === currentFilters.body;
        return ageMatch && styleMatch && bodyMatch;
    });

    // HTML生成
    if (filteredGirls.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #fff; font-size: 18px;">条件に一致する会員がいません。絞り込み条件を変更してください。</div>';
        return;
    }

    grid.innerHTML = filteredGirls.map((girl, index) => `
        <div class="girl-card">
            <div class="girl-image-container">
                <img src="${girl.images[0]}" alt="${girl.name}" class="girl-image">
                <div class="online-badge">オンライン</div>
            </div>
            <div class="girl-info">
                <div class="girl-header">
                    <div class="girl-name">${girl.name}</div>
                    <div class="girl-age">${girl.age}歳</div>
                </div>
                <div class="girl-desc">${girl.description}</div>
                <div class="girl-tags">
                    ${girl.tags.map(tag => `<span class="tag ${tag.includes('3P') || tag.includes('生挿入') || tag.includes('中出し') ? 'hot' : ''}">${tag}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.startsWith('#!')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});