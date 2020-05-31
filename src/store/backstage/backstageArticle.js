const backstageArticle = {
    state: {
        //是否登录判断
        titleList: {
            css1: [{
                    title: "文章",
                    publish: "未发布a",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布b",
                    comment: 132,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布b",
                    comment: 132,
                    reading: 1234
                }
            ],
            git1: [{
                    title: "文章",
                    publish: "未发布c",
                    comment: 123,
                    reading: 12354
                },
                {
                    title: "2016-05-b",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                }
            ],
            html1: [{
                    title: "文章",
                    publish: "未发布a",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                }
            ],
            js1: [{
                    title: "文章",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                }
            ],
            koa21: [{
                    title: "文章",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                }
            ],
            mongodb1: [{
                    title: "文章",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布",
                    comment: 123,
                    reading: 1234
                }
            ],

        },
        activeRouter: "",
        total: 0,
        tableData: [{
                title: "文章",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-b",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-c",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            },
            {
                title: "2016-05-04",
                publish: "未发布",
                comment: 123,
                reading: 1234
            }
        ]
    },
    mutations: {
        tableData: (state, n) => {
            //传入登录状态islogin
            let tableData = JSON.parse(n);
            console.log(tableData);
            state.tableData = tableData;
        },
        backstageArticleTotal: (state, n) => {
            let TempTotal = n
            state.total = TempTotal
            console.log(state.total)
        }


    },
    actions: {
        tableData: ({ commit, state }, n) => {
            // console.log(state.number, number)
            return commit('tableData', n)
        }
    }
}


export default backstageArticle