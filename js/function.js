//获取某个标签类名的兼容性
function getClass(classname,obj){
    //输入类名与所在的相应的文档
    var obj=obj||document;
    //将输入的文档初始化；
    if(obj.getElementsByClassName){
        //如果文档obj里含有该类名
    	return obj.getElementsByClassName(classname);
        // 将文档的类名返回出去
    }else{
        // 如果不能识别该类名
    	var arr=[];
    	var objs=obj.getElementsByTagName("*");
        // 选择document里的所有的标签
    	for(var i=0;i<objs.length;i++){
            //将该标签一一遍历一下
            var dom=checkClass(classname,objs[i]);
            //定义变量dom
    		if(dom==true){
                //选出与所需标签类名相同的标签
                arr.push(objs[i])
                // 将所需的标签放入一数组里
    		}
    	}
    	 return arr;
         // 将数组arr返回出去
    }
}
// console.log(obj.length)
 function checkClass(val,obj){
    //接受传入的实参
    var str=obj.className;
    //将obj里的所有类名赋值给str
    var brr=str.split(" ");
    //将字符串转化为数组
    for(var j=0;j<brr.length;j++){
        //遍历该数组
           if(brr[j]==val){
            //判断该数组里的某个值是不是所需的类名
            return true;
           }
    }
     return false;
 }


 function $(val,obj){


    if (typeof val=="string") {
       
            obj=obj||document;
            val=val.replace(/^\s*|\s*$/g,"");
            if(val.charAt(0)=="#"){
                return document.getElementById(val.slice(1));
            }else if(val.charAt(0)=="."){
                return getClass(val.slice(1),obj);
            }else if(/^[a-zA-Z][a-zA-Z0-9]{0,10}$/.test(val)){
                return obj.getElementsByTagName(val)
            }else if(/^<[a-zA-Z][a-zA-Z0-9]{0,10}>$/.test(val)){
              return document.creatElement(slice(1,-1))
            }
      
    }else if(typeof val=="function"){
        window.onload=function(){
            val();
        }
    }
        
}

// 样式
function getStyle(obj,style){
    if(obj.currentStyle){
        return obj.currentStyle[style];
    }else{
        return getComputedStyle(obj,null)[style];
    }
}
// 先定义
function getChilds(obj,type){
   var type=type||"no"
   var kids=obj.childNodes;
   var arr=[];
   for(var i=0;i<kids.length;i++){
        if(type=="no"){
          if(kids[i].nodeType=="1"){
            arr.push(kids[i])
          }
       }else if(type=="yes"){
        if(kids[i].nodeType=="1"||kids[i].nodeType==3&&kids[i].nodeValue.replace(/^\s*|\s*$/g,"")){
           arr.push(kids[i])
        }
       }
   }
   return arr;
}

function getFirst(obj,type){
  var type=type||"no"
  
  return getChilds(obj,type)[0];
}  


function getLast(obj,type){
  var type=type||"no"
  var childs=getChilds(obj,type)
  return childs[childs.length-1]
} 

// 取第n个节点
function getN(obj,n,type){
  var type=type||"no"
  var childs=getChilds(obj,type)
  if(n>childs.length||n<1){
    return false
  }
  return childs[n-1];
}

// 取下一个兄弟节点
function getNext(obj,type){
   var type=type||"no";
  var next=obj.nextSibling;
  if(next=="null"){
    return false;

  }if(type=="no"){
    while(next.nodeType=="3"||next.nodeType=="8"){
      next=next.nextSibling
      if(next==null){
        return false
      }
    }
    return next;
  }else if(type=="yes"){
    while(next.nodeType=="3"&&next.nodeValue.replace(/^\s*|\s*$/g,"")||next.nodeType=="8"){
      next=next.nextSibling
      if(next==null){
        return false
      }
    }
    return next;
  }

}


// 取上一个兄弟节点
function getPrevious(obj,type){
   var type=type||"no";
  var Previous=obj.previousSibling;
  if(Previous=="null"){
    return false;

  }if(type=="no"){
    while(Previous.nodeType=="3"||Previous.nodeType=="8"){
      Previous=Previous.previousSibling
      if(Previous==null){
        return false
      }
    }
    return Previous;
  }else if(type=="yes"){
    while(Previous.nodeType=="3"&&Previous.nodeValue.replace(/^\s*|\s*$/g,"")||Previous.nodeType=="8"){
      Previous=Previous.previousSibling
      if(Previous==null){
        return false
      }
    }
    return Previous;
  }

}



function insertBefore(obj,beforeObj){
  var before=beforeObj.parentNode;
  before.insertBefore(obj,beforeObj)
  
}



function insertAfter(obj,afterObj){
  var after=afterObj.parentNode;
  var next=getNext(afterObj,"yes")
  if(!next){
    after.appendChild(obj);
  }else{
    after.insertBefore(obj,next)
  }
}