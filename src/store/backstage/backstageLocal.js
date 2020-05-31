const backstageLocal = {
    state: {
        routerActive: "pageArticle",
        ArticleData: `ava`
    },
    mutations: {
        routerActive: (state, n) => {
            //传入登录状态islogin
            let routerActive = n;
            state.routerActive = routerActive;
        },
        ArticleData: (state, n) => {
            //传入登录状态islogin
            let routerActive = n;
            state.ArticleData = routerActive;
        },


    }
}


export default backstageLocal