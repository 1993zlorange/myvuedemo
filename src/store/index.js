import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  author:'Doraengineer'
};
const mutations = {
  newAuthor(state,msg){
    state.author = msg
  }
}
const store=new Vuex.Store({
    state,
    mutations
})
export default store