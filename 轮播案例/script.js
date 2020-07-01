//声明全局变量 
var index=0,//当前显示图片的索引，默认值为0，
prev=byId("prev") ,
next=byId("next"), 

pics=byId("banner").getElementsByTagName('div'),
size=pics.length;





//封装getElemengtById()
function byId(id){
    return typeof(id)==="string"? document.getElementById(id):id;

}
//封装不同浏览器事件处理程序
function addHandler(element,type,handler){
    //非IE浏览器
    if(element.addEventListener){
        element.addEventListener(type,handler,true);
        //IE浏览器支持DOM2级
    }else if(element.attachEvent){
        element.attachEvent("on"+type,handler);
        //IE浏览器不支持DOM2级
    }else{
        element["on"+type]=handler;
    }
}
//点击下一张按钮显示下一张图片
addHandler(next,"click",function(){
    index++;
    if(index>=size) index=0;
    for(i=0;i<size;i++){
        pics[i].style.display="none";
    }
   pics[index].style.display="block"
})
