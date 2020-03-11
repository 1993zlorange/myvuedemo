在method里添加
```
        // 发送ajax请求
        var url = 'http://localhost:5000/';
        this.$http.get(url).then(function(data){
            console.log(data.body);
            this.list = data.body;
```