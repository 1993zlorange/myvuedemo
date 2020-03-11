* vuex
在vue中我们可以使用vuex来保存我们需要管理的状态值，值一旦被修改，所有引用该值的地方就会自动更新
get,post,flask怎么拿get,post
新建store文件夹，建立index.js
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const state = {
  author:'Wise Wang'
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

```
main.js
```
import store from "./store";
//vue 里
component{
  store,
}
```
