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


    },
    actions: {
        tableData: ({ commit, state }, n) => {
            // console.log(state.number, number)
            return commit('tableData', n)
        }
    }
}


export default backstageDraft