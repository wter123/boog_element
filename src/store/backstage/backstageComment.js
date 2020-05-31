const backstageComment = {
    state: {
        //是否登录判断

        titleList: {
            "我发表的评论": [{
                title: "评论",
                author: "miswang",
                date: "2020-5-23",
            }, {
                title: "评论",
                author: "miswang",
                date: 2020 - 5 - 23,
            }],
            "我回复的评论": [{
                title: "评论",
                author: "miswang",
                date: 2020 - 5 - 23,
            }, {
                title: "评论",
                author: "miswang",
                date: 123,
            }, {
                title: "评论",
                author: "miswang",
                date: 123,
            }, {
                title: "评论",
                author: "miswang",
                date: 123,
            }]
        },
        activeRouter: "",
        total: 0,
        tableData: [{
            title: "评论",
            author: "miswang",
            date: "2020-5-23",
        }, {
            title: "评论",
            author: "miswang",
            date: 2020 - 5 - 23,
        }, {
            title: "评论",
            author: "miswang",
            date: "2020-5-23",
        }, {
            title: "评论",
            author: "miswang",
            date: 2020 - 5 - 23,
        }, {
            title: "评论",
            author: "miswang",
            date: "2020-5-23",
        }, {
            title: "评论",
            author: "miswang",
            date: 2020 - 5 - 23,
        }]
    },
    mutations: {
        tableData: (state, n) => {
            //传入登录状态islogin
            let tableData = JSON.parse(n);
            console.log(tableData);
            state.tableData = tableData;
        },
        backstageCommentTotal: (state, n) => {
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


export default backstageComment