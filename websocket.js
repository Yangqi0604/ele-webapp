const WebSocket = require("ws")
const Server = new WebSocket.Server({
  port:8082
})
//监听链接事件
Server.on("connection",(ws)=>{
  //当链接成功后有一端发送数据到服务器
  console.log(ws);
  ws.on("message",(data)=>{
    console.log(data);
    switch(data){
      case "你好":ws.send("你好，亲");break;
      case "在吗":ws.send("在的，亲");break;
      case "有":ws.send("您请讲");break;
      case "再见":ws.send("再见");break;
      case "没有":ws.send("好的，打扰了");break;
      case "有啥服务":ws.send("您好，这里是饿了么，可以点餐了");break;
      case "亲":ws.send("饿了么，为你服务");break;
      case "可以点餐吗":ws.send("可以的，随便下单");break;
      default:ws.send("您好，有什么可以帮助你的吗?");break;
    }

  })
})

console.log("websocket server is ready ")
