组件一般包在div块里
在需要添加组件的vue里添加js
```
// 导入包
import myechart from '@/components/testechart'
export default {
  name: 'App',
   // 2、添加自定义组件
  components:{
    myechart
  }
}
```
在需要引入的地方使用组件
```
  <myechart></myechart>
```