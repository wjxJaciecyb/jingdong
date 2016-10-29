// 思路 : 
// 1  判断浏览器
     // document.getElementsByClassName()
// 2  获取所有元素
// 3 元素的类名是否等于指定的类名
// 4  返回条件到存储数组
// 5  返回数组

 function getclass(classname,range)
	       {
	             range=range?range:document;
	             if(document.getElementsByClassName)
	          {    		
			return range.getElementsByClassName(classname)
	}
	else{
		var ones=range.getElementsByTagName("*");
	  	var newarr=[];
	  	for(var i=0;i<ones.length;i++)
	  	{
	  		if(checkname(ones[i].className,classname))//判断函数是否有相应的类名
	  		{
               newarr.push(ones[i])
	  		}
	  	}
	  	return newarr;
	  }
	}

function checkname(classstr,classname)
{
	var arr=classstr.split(" ");
	for(var i=0;i<arr.length;i++)
	{
		if(arr[i]===classname)
		{
			return true;
		}
	}
	return false;
}
// 初始化参数range
// classname去空
// 判断第一个字符
// 获取元素

function $(classname,range)
{   
  if(typeof classname=="function" )
  {
    window.onload=function(){classname();}
  }
  else if(typeof classname=="string"){
       range=range||document;
    // classname=classname.trim();

      if(classname.charAt(0)==".")
        {  
    return getclass(classname.substring(1),range)   
    
  }
  else if(classname.charAt(0)=="#")
  {
    return document.getElementById(classname.substring(1))
  }
  else if(/^[a-z][a-z1-6]{0,8}$/.test(classname))
  {
    return range.getElementsByTagName(classname)
  }
  else if(/^<[a-z][a-z1-6]{0,8}>$/.test(classname))
  {
     return document.createElement(classname.slice(1,-1))
  }
  }
}
function getContent(obj,value){
	if(value)
	{
       if(obj.innerText)
       {
       	obj.innerText=value;
       }
       else
       {
       	obj.textContent=value;
       }
	}
	else
	{
        if(obj.innerText)
       {
       	return obj.innerText;
       }
       else
       {
       	return obj.textContent;
       }
	}
}
function getStyle(obj,attr)
{
	if(window.getComputedStyle)
	{
		return getComputedStyle(obj,null)[attr];
	}
	else
	{
         return obj.currentStyle[attr];
	}
	//获取指定元素的子元素的对象
}
	function getChild(obj,type)
	{
	 var arr=[];
     var child=obj.childNodes;
     type=type==undefined?true:type;
     if(type)
     {
       for(var i=0;i<child.length;i++)
       {
       	if(child[i].nodeType==1)
       	{
       		arr.push(child[i])
       	}
       }
       
     }
      else
     {
     	for(var i=0;i<child.length;i++)
       {
       	if(child[i].nodeType==1||(child[i].nodeType==3&&child[i].nodeValue.replace(/^\s*|\s*$/g ,"")))
       	       {
       		arr.push(child[i])
             	}
       }
       
      }
  return arr;
}
     // 获得元素第一个子元素
    function getFirst(obj,type)
    {    
        type=type==undefined?true:type;
        if(type)
        { return getChild(obj)[0];
        }
        else
        {
        return getChild(obj,type)[0]
        }
    }
    // 获得元素最后一个子元素
    function getLast(obj)
    {   var last=getChild(obj).length-1;
        return getChild(obj)[last];
    }
     // 获得元素任何一个子元素
     function getRandom(obj,num)
    {   
        return getChild(obj)[num];
    }
    // 获得对象下一个兄弟对象
    // 思路
    // 1 先获取兄弟节点 next
    //   没有 false
    // 2 有 
    //   判断兄弟节点
  
   function getNext(obj,type)
   {   type=type==undefined?true:type
    if(type)
    {
      
       return getNext1(obj)
    }
    else
    {
      return getNext2(obj)
    }

   }
    function getPrevious(obj,type)
   {   type=type==undefined?true:type
    if(type)
    {
      
       return getPrevious1(obj)
    }
    else
    {
      return getPrevious2(obj)
    }

   }
    function getNext1(obj)
    {
           var next=obj.nextSibling;
           //console.log()
           if(next==null)
           {
           	return false;
           }
         
           while(next.nodeType!=1)
           {
           	next=next.nextSibling;
           	 if(next==null)
               {
           	return false;
               }
           }
           return next;
         
    }
     function getNext2(obj)
    {
           var next=obj.nextSibling;
           //console.log()
           if(next==null)
           {
            return false;
           }
         
           while(next.nodeType==3&&!next.nodeValue.replace(/^\s*|\s*$/g ,"")||next.nodeType==8)
           {
            next=next.nextSibling;
             if(next==null)
               {
            return false;
               }
           }
           return next;
         
    }

    // 获得对象上一个兄弟对象
    function getPrevious2(obj)
    {
           var previous=obj.previousSibling;
           if(previous==null)
           {
           	return ;
           }
           while(previous.nodeType==3&&!previous.nodeValue.replace(/^\s*|\s*$/g ,"")||previous.nodeType==8)
           {
           	previous=previous.previousSibling;
           	 if(previous==null)
           {
           	return ;
           }
           }
           return previous;
    }
    function getPrevious1(obj)
    {
           var previous=obj.previousSibling;
           if(previous==null)
           {
            return ;
           }
           while(previous.nodeType!=1)
           {
            previous=previous.previousSibling;
             if(previous==null)
           {
            return ;
           }
           }
           return previous;
    }
    // insertAfter
    // 将obj1插入到obj2后面
    // obj1要插入的元素
    // type true  false

    function insertLater(obj1,obj2,type){
      var parent=obj2.parentNode;
      console.log(parent)
    	if(getNext(obj2,type))
    	{     
          parent.insertBefore(obj1,getNext(obj2,type))
    	}
    	else
    	{
            parent.appendChild(obj1);
    	}
    }
    // 将谁添加到谁里面
    Object.prototype.appendTo=function(obj)
    {
        obj.appendChild(this)
    }
    Object.prototype.insertAfter=function(obj1,obj2)
    {
          if(getNext(obj2))
      {     
          this.insertBefore(obj1,getNext(obj2))
      }
        else
      {
           this.appendChild(obj1);
      }
    }



//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }


//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }