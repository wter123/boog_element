const backstageDraft = {
    state: {
        //是否登录判断

        titleList: {
            css2: [{
                    title: "文章",
                    publish: "未发布a",
                    comment: 123,
                    reading: 1234
                },
                {
                    title: "2016-05-b",
                    publish: "未发布b",
                    comment: 123,
                    reading: 1234
                }
            ],
            git2: [{
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
            html2: [{
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
            js2: [{
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
            koa22: [{
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
            mongodb2: [{
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
                title: "随笔",
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
            }
        ]
    },
    mutations: {
        tableData: (state, n) => {
            //传入登录状态islogin
            let tableData = JSON.parse(n);
            state.tableData = tableData;
        },
        backstageDraftTotal: (state, n) => {
            let TempTotal = n
            state.total = TempTotal
        }

    },
    actions: {
        tableData: ({ commit, state }, n) => {
            return commit('tableData', n)
        }
    }
}


export default backstageDraft