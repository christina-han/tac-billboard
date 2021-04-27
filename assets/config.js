// cpanel - site_templates/countdown_tech/assets/config.js.tt Copyright(c) 2016 cPanel, Inc.
//                                                          All rights Reserved.
// copyright@cpanel.net                                        http://cpanel.net
// This code is subject to the cPanel license. Unauthorized copying is prohibited
window.cpanel = {
    data: {
        email: "",
        logo: "Tron Angel Coin (TAC) Will Coming Soon !!",
        social: [
        ],
        page1: {
            button: 'JOIN TELEGRAM', // 第一頁第一個按鈕, 同下方第一個 countdown 的 buttonText
            text2: 'JOIN TWITTER', // 第一頁第二個按鈕
            href2: 'https://www.google.com/', // 第一頁第二個按鈕連結
            text3: 'JOIN FARM', // 第一頁第三個按鈕
            href3: 'https://www.google.com/', // 第一頁第三個按鈕連結
            text4: 'BUY JUSTSWAP', // 第一頁第四個按鈕
            href4: 'https://justswap.network/?lang=zh-CN#/home?tokenAddress=TXKnbFEZFNjYRSve7dkJSHySBfu5QRuLYf&type=swap'  // 第一頁第四個按鈕連結
        },
        page2: {
            button: 'BULLETIN BOARD', // 第二頁第一個按鈕, 同下方第二個 countdown 的 buttonText
            content: [ // 內文
                {
                    date: '11/20',
                    text: '這裡是內文1, Put some new information over here!!'
                },
                {
                    date: '11/21',
                    text: '這裡是內文2, Put some new information over here!!'
                },
                {
                    date: '11/21',
                    text: '這裡是內文3, Put some new information over here!!'
                },
                {
                    date: '11/22',
                    text: '這裡是內文4, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文5, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文6, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文7, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文8, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文9, Put some new information over here!!'
                },
                {
                    date: '11/23',
                    text: '這裡是內文10, Put some new information over here!!'
                },
                
            ]
        }
    },
    style: {
        primary: "",
    },
    slides: [
        {
            type: 'countdown',
            backgroundImage: "",
            backgroundColor: "",
            color: "#ffffff",
            buttonText: "JOIN TELEGRAM",
            buttonLink: "https:\/\/t.me\/TronAngelCoin",
            endTime: '2020-12-04T04:00:00.000Z',
            content: "Defi start 10000%\nFree gambling tokens for mining (available for sale)",
        },
        {
            type: 'countdown',
            backgroundImage: "",
            backgroundColor: "",
            color: "#ffffff",
            buttonText: "BULLETIN BOARD",
            buttonLink: "#/",
        }
    ]
};

