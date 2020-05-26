 //store.js中
 import Vue from 'vue'
 import Vuex from 'vuex'
 import loginVuex from './loginVuex.js'
 import backstageArticle from './backstage/backstageArticle.js'
 import backstageDraft from './backstage/backstageDraft.js'
 import backstageLog from './backstage/backstageLog.js'
 import backstageComment from './backstage/backstageComment.js'
 import backstageLocal from './backstage/backstageLocal.js'
 Vue.use(Vuex)




 export default new Vuex.Store({
     modules: {
         loginVuex: loginVuex,
         backstageArticle: backstageArticle,
         backstageDraft: backstageDraft,
         backstageLog: backstageLog,
         backstageComment: backstageComment,
         backstageLocal: backstageLocal
     }
 })