const backstageLocal = {
    state: {
        routerActive: "pageArticle",
    },
    mutations: {
        routerActive: (state, n) => {
            //传入登录状态islogin
            let routerActive = n;
            state.routerActive = routerActive;
        },


    }
}


export default backstageLocal