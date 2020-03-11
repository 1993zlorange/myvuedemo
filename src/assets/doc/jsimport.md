写js文件
```
const findFromTree = (treeArray, id, idPropName = "id", childrenPropName = "children") => {
return ;
}
// 导出函数
export default {
  methods: {
    findFromTree
  }
```
```
export default {
  login:{"user":{"id":"310000198406275362","name":"叶洋","nickName":"Taylor","phone":"14309472560","age":74,"address":"浙江省 绍兴市 上虞市","isMale":false,"email":"w.pdmenv@rwfwadthss.tr","createTime":"1976-08-15 06:37:12","delFlag":0,"status":1,"userType":"1","no":"310000198406275362","remarks":"传方半织意意列业维领细斯样年场不次。样影此么论重示般会际开出二及西高。","avatar":"static/img/user.png"},"sid":"310000198406275362"},}


```
在需要使用的页面引入
```
 import treeter from "../components/treeter"

import defaultValue from "./default";

```
引用
```
this.selected = this.findFromTree(this.treeData, ids, this.propNames.id, this.propNames.children);
defaultValue.login
```