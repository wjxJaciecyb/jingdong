$(function(){

	var j=jQuery.noConflict();
	j("img").lazyload({
		threshold:500,
		effect:"fadeIn",
	})


	function nodelunbo(c){
		var center=c;
		// console.log(center)
		var imgs=$(".picture",center)
		// console.log(imgs)
		var circle=$(".circle-list",center)
		var left=$(".banner-left",center)[0]
		var right=$(".banner-right",center)[0]
		var n=0;
		var flag=true;
		var t=setInterval(move,4000)
		function move(){
			// next=n+1;
			if(n>=imgs.length){
				n=0;
			}
			for(var i=0;i<imgs.length;i++){
				for(var j=0;j<imgs.length;j++){
					circle[j].style.background="#3E3E3E"
					animate(imgs[j],{opacity:0},600);
				}
				circle[n].style.background="#B61B1F"
				animate(imgs[n],{opacity:1},600,function(){

				});
			}
			n++;
		}
		center.onmouseover=function(){
	        clearInterval(t);
	        left.style.display="block"
	        right.style.display="block"
		}
		center.onmouseout=function(){
			t=setInterval(move,4000)
			left.style.display="none"
	        right.style.display="none"
		}
		for(var i=0;i<circle.length;i++){
			circle[i].index=i;
			circle[i].onmouseover=function(){
				for(var i=0;i<circle.length;i++){
					circle[i].style.background="#3E3E3E"
					animate(imgs[i],{opacity:0},600)
				}
				this.style.background="#B61B1F"
				animate(imgs[this.index],{opacity:1},600)
				n=this.index
			}
		}
		right.onclick=function(){
			move();
		}
		left.onclick=function(){
			// next=n-1;s
			if(n<0){
				n=imgs.length-1;
			}
			for(var i=0;i<imgs.length;i++){
				for(var j=0;j<imgs.length;j++){
					circle[j].style.background="#3E3E3E"
					animate(imgs[j],{opacity:0},600)
				}
					circle[n].style.background="#B61B1F"
					animate(imgs[n],{opacity:1},600)
			}
			n--;
		}

	}

	nodelunbo($("#center"))
	



// 楼层跳转
    // var top_hidden=$('#top-hidden');
    var floor_nav=$('.floor-nav')[0];
    var floor_lis=$('.floor-lis')
    var floor=$('.floor-first');
    var cHeight=document.documentElement.clientHeight; 

    // console.log(top_hidden,floor_nav,floor_lis,floor,cHeight,nHeight)

 
    
    for(var i=0;i<floor.length;i++){
    	floor[i].h=floor[i].offsetTop;
        // console.log(floor[i].h)楼层的高度存起来
    }
    window.onscroll=function(){
    	var obj=document.body.scrollTop?document.body:document.documentElement;
    	var top=obj.scrollTop;
    	if(top>=floor[0].h-300){
    		floor_nav.style.display='block';

            var nHeight=floor_nav.offsetHeight;
            // 获取本身的高度
            floor_nav.style.top=(cHeight-nHeight)/2+"px";
            // 垂直居中

    		// console.log(top)滚动出值
            // 出效果：左框出来
    	}
        if(top<floor[0].h-200){
            floor_nav.style.display='none'
        }
    	for(var i=0;i<floor.length;i++){
    		if(top>=floor[i].h-600){
    			for(var j=0;j<floor_lis.length;j++){
    				floor_lis[j].style.background='#fff';
    			}
    			floor_lis[i].style.background=' #C81623';
                now=i;
    		}    
    	}
    }          //整个楼层出效果
    	for(var i=0;i<floor.length;i++){
    		floor_lis[i].index=i;
    		floor_lis[i].onclick=function(){
    			animate(document.body,{scrollTop:floor[this.index].h})
                now=this.index;
    			animate(document.documentElement,{scrollTop:floor[this.index].h})
    		
    	}
    floor_lis[i].onmouseover=function(){
        this.style.background=' #C81623';

    }
    floor_lis[i].onmouseout=function(){
        if(this.index==now){
            return;
        }
        this.style.background='#fff';
    }



    }
                  // 按钮点击变换楼层



 // banner下的轮播  
   var lunbo=$(".lunbo")[0]
   // console.log(lunbo)
	var imgBox=$(".lub-pic");
	// console.log(imgBox)
	var obj=$(".inter")[0]
	// console.log(obj)
	var leftone=$(".view-left")[0]
	var rightone=$(".view-right")[0]
    var widthone=parseInt(getStyle($(".lub-pic")[0],"width"));
    // console.log(widthone)
    var time=setInterval(lub,2000)
		function lub(){
			animate(obj,{left:-widthone},1000,function(){
			var imgFirst=getFirst(obj)
			// console.log(imgFirst)
			obj.appendChild(imgFirst)
			obj.style.left=0+"px"

			})
			
		}
	lunbo.onmouseover=function(){
		// alert(1)
       clearInterval(time)
	}
	lunbo.onmouseout=function(){
		time=setInterval(lub,2000)
	} 
	leftone.onclick=function(){
	
       var last=getLast(obj);
       var First=getFirst(obj);

       insertBefore(last,First);
       obj.style.left=-widthone+"px"
       animate(obj,{left:0},1000)

	}
	rightone.onclick=function(){

		lub();
	}

	var nz=$(".text")[0]

	nz.onmouseover=function(){
		nz.style.background="#fff"
		var bd=$(".beijing")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		nz.style.background="#F1F1F1"
		var bd=$(".beijing")[0]

		bd.style.display="none"
	}


	var nz=$(".My-jd")[0]

	nz.onmouseover=function(){

		var bd=$(".My-bot")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){

		var bd=$(".My-bot")[0]

		bd.style.display="none"
	}


	var nz=$(".view")[0]

	nz.onmouseover=function(){

		var bd=$(".pj")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){

		var bd=$(".pj")[0]

		bd.style.display="none"
	}



	var nz=$(".fixed")[0]
	nz.onmouseover=function(){
		// nz.style.background="#fff"
		var bd=$(".dg")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		// nz.style.background="#F1F1F1"
		var bd=$(".dg")[0]

		bd.style.display="none"
	}


var nz=$(".class")[0]
	nz.onmouseover=function(){
		// nz.style.background="#fff"
		var bd=$(".pict")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		// nz.style.background="#F1F1F1"
		var bd=$(".pict")[0]

		bd.style.display="none"
	}


	var nz=$(".mini")[0]
	nz.onmouseover=function(){
		// nz.style.background="#fff"
		var bd=$(".cycle")[0]
		bd.style.display="block"
	}
	nz.onmouseout=function(){
		// nz.style.background="#F1F1F1"
		var bd=$(".cycle")[0]

		bd.style.display="none"
	}




  var data=$(".home")
  for(var i=0;i<data.length;i++){
  		data[i].onmouseover=function(){
			// this.style.background="#fff"
			this.style.color="#C81623"
			var data_bg=$(".math",this)[0]
			data_bg.style.display="block"
		}
		data[i].onmouseout=function(){
			// this.style.background="#C81623"
			this.style.color="#fff"
			var data_bg=$(".math",this)[0]

			data_bg.style.display="none"
		}
  }
  
  
  
//第二楼小轮播
  function nodeLunbb(two){
	var banner=two
    var img=$(".et-port",banner);
    var lis=$(".lis-circle",banner);
    var flag=true;
	var lefta=$(".lis-left",banner)[0];
	var righta=$(".lis-right",banner)[0];
    var width=parseInt(getStyle(banner,"width"));
    var now=0;
	var next=0;
	var time=setInterval(moveTo,2000);
	function moveTo(obj){
		if(flag==false){
			return;
		}
		flag=false;
		obj=obj||"left";
		if(obj=="left"){
			next=now+1;
			if(next>=img.length){
				next=0;
			}
			img[next].style.left=width+"px";
			animate(img[now],{left:-width},600);
		}else if(obj=="right"){
			next=now-1;
			if(next<0){
				next=img.length-1;
			}
			img[next].style.left=-width+"px";
			animate(img[now],{left:width},600);
		}
		animate(img[next],{left:0},600,function(){
			flag=true;
		})
		lis[now].style.background="#3E3E3E";
		lis[next].style.background="#B61B1F";
		now=next;
	}
	banner.onmouseover=function(){
		clearInterval(time);
		lefta.style.display="block";
		righta.style.display="block";
	}
	banner.onmouseout=function(){
		time=setInterval(moveTo,2000);
		lefta.style.display="none";
		righta.style.display="none";
	}
	righta.onclick=function(){

		moveTo("left")
	}
	lefta.onclick=function(){
		moveTo("right")
	}
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onmouseover=function(){
			if(flag==false){
				return;
			}
			flag=false;
			if(now>this.index){
				img[this.index].style.left=-width+"px";
				animate(img[now],{left:width},600);
		    }else if(now<this.index){

				img[this.index].style.left=width+"px";
				animate(img[now],{left:-width},600);
			}
			animate(img[this.index],{left:0},600,function(){
				flag=true
			});
			lis[now].style.background="#3E3E3E";
			lis[this.index].style.background="#B61B1F";
			now=this.index
		}
	}
}
  var two=$(".catton");
for(var i=0;i<two.length;i++){
	nodeLunbb(two[i]);
}
// 第一楼层
function nodeloutwo(one){
	var parent=one;
    var bannera=$(".lithree",parent)[0];
    var imgsa=$(".atwo",bannera);
//  console.log(imgsa)
    var lisa=$(".lis",bannera);
    var flaga=true;
	var leftb=$(".btn-left",bannera)[0];
	var rightb=$(".btn-right",bannera)[0];
    var widtha=parseInt(getStyle(bannera,"width"));
    var na=0;
	var nexta=0;
	var ta=setInterval(movea,2000);
	function movea(obj){
		if(flaga==false){
			return;
		}
		flaga=false;
		obj=obj||"left";
		if(obj=="left"){
			nexta=na+1;
			if(nexta>=imgsa.length){
				nexta=0;
			}
			imgsa[nexta].style.left=widtha+"px";
			animate(imgsa[na],{left:-widtha},600);
		}else if(obj=="right"){
			nexta=na-1;
			if(nexta<0){
				nexta=imgsa.length-1
			}
			imgsa[nexta].style.left=-widtha+"px";
			animate(imgsa[na],{left:widtha},600);
		}
		animate(imgsa[nexta],{left:0},600,function(){
			flaga=true;
		})
		lisa[na].style.background="#3E3E3E";
		lisa[nexta].style.background="#B61B1F";
		na=nexta;
	}
	bannera.onmouseover=function(){
		clearInterval(ta);
		leftb.style.display="block";
		rightb.style.display="block";
	}
	bannera.onmouseout=function(){
		ta=setInterval(movea,2000);
		leftb.style.display="none";
		rightb.style.display="none";
	}
	rightb.onclick=function(){
		movea("left")
//		alert(1)
	}
	leftb.onclick=function(){
		movea("right")
	}
	for(var i=0;i<lisa.length;i++){
		lisa[i].index=i;
		lisa[i].onmouseover=function(){
			if(flaga==false){
				return;
			}
			flaga=false;
			if(na>this.index){
				imgsa[this.index].style.left=-widtha+"px";
				animate(imgsa[na],{left:widtha},600);
		    }else if(na<this.index){
				imgsa[this.index].style.left=widtha+"px";
				animate(imgsa[na],{left:-widtha},600);
			}
			animate(imgsa[this.index],{left:0},600,function(){
				flaga=true
			});
			lisa[na].style.background="#3E3E3E";
			lisa[this.index].style.background="#B61B1F";
			na=this.index
		}
	}
}
nodeloutwo($(".first-floor-rightl")[0])
//第三楼小轮播
function nodeLunboc(obj){
	var parentc=obj
    var banner3=$(".mt",parentc)[0];
    var imgs3=$(".aclass",banner3);
    // console.log(imgs3)
    var lis3=$(".lis",banner3);
    var flag3=true;
	var left3=$(".btn-left",banner3)[0];
	var right3=$(".btn-right",banner3)[0];
    var width3=parseInt(getStyle(banner3,"width"));
    var n3=0;
	var next3=0;
	var t3=setInterval(move3,2000);
	function move3(obj){
		if(flag3==false){
			return;
		}
		flag3=false;
		obj=obj||"left";
		if(obj=="left"){
			next3=n3+1;
			if(next3>=imgs3.length){
				next3=0
			}
			imgs3[next3].style.left=width3+"px";
			animate(imgs3[n3],{left:-width3},600);
		}else if(obj=="right"){
			next3=n3-1;
			if(next3<0){
				next3=imgs3.length-1
			}
			imgs3[next3].style.left=-width3+"px";
			animate(imgs3[n3],{left:width3},600);
		}
		animate(imgs3[next3],{left:0},600,function(){
			flag3=true;
		})
		lis3[n3].style.background="#3E3E3E";
		lis3[next3].style.background="#B61B1F";
		n3=next3;
	}
	banner3.onmouseover=function(){
		clearInterval(t3);
		left3.style.display="block";
		right3.style.display="block";
	}
	banner3.onmouseout=function(){
		t3=setInterval(move3,2000);
		left3.style.display="none";
		right3.style.display="none";
	}
	right3.onclick=function(){
		move3("left")
	}
	left3.onclick=function(){
		move3("right")
	}
	for(var i=0;i<lis3.length;i++){
		lis3[i].index=i;
		lis3[i].onmouseover=function(){
			if(flag3==false){
				return;
			}
			flag3=false;
			if(n3>this.index){
				imgs3[this.index].style.left=-width3+"px";
				animate(imgs3[n3],{left:width3},600);
		    }else if(n3<this.index){
				imgs3[this.index].style.left=width3+"px";
				animate(imgs3[n3],{left:-width3},600);
			}
			animate(imgs3[this.index],{left:0},600,function(){
				flag3=true
			});
			lis3[n3].style.background="#3E3E3E";
			lis3[this.index].style.background="#B61B1F";
			n3=this.index
		}
	}
}
var obj=$(".third-floor-right");
for(var i=0;i<obj.length;i++){
	nodeLunboc(obj[i]);
}
//选项卡1
function navsty(obj11,obj22){
		var bar=$("a",obj11);
	    obj22[0].style.display="block"
		  for(var i=0;i<bar.length;i++){
		  	bar[i].index=i;
		  	bar[i].onmouseover=function(){
	               for(var i=0;i<bar.length;i++){
	               	bar[i].className="box";
	               	bar[i].color="#333333";
	               	// console.log(bar[i])
	                obj22[i].style.display="none";
	               }
	                this.className="first"
	                this.color="#fff";
	                obj22[this.index].style.display="block";
		  	}
		  } 
    }
	var floor_1=$(".floor-first")[0]
	var firstl=$(".mt1")[0]
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[1]
	var firstl=$(".mt1")[1] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[2]
	var firstl=$(".mt1")[2] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[3]
	var firstl=$(".mt1")[3] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[4]
	var firstl=$(".mt1")[4] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[5]
	var firstl=$(".mt1")[5] 
//	var hidden=$(".biaxian",floor_1)
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[6]
	var firstl=$(".mt1")[6] 
	
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[7]
	var firstl=$(".mt1")[7] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[8]
	var firstl=$(".mt1")[8] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[9]
	var firstl=$(".mt1")[9] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    var floor_1=$(".floor-first")[10]
	var firstl=$(".mt1")[10] 
    var main=$(".PIC",floor_1);
    navsty(firstl,main);
    
    // 回到顶部动画
  var topImg=$(".topImg");
  for(var i=0;i<topImg.length;i++){
    hover(topImg[i],function(){
      var width=this.offsetWidth;
      this.style.background="#B1191A";
      this.style.overflow="inherit";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:80},300);
    },function(){
      var that=this;
      that.style.background="#7A6E6E";
      that.style.overflow="hidden";
      var ul=$(".tab-text",this)[0];
      animate(ul,{width:0},100);
    })
  }


  //热门晒单
	  var readall=$(".read")[0]
	  var reads=$(".read1");
	  // console.log(reads)
	  reads[0].style.top=0;
	  reads[1].style.top=123+"px";
	  for(var i=0;i<reads.length;i++){
	    if(i>1){
	      reads[i].style.top=-123+"px";
	    }
	  }

	  var nowday=0;
	  var front;
	  var nextday=0;
	  var ct=setInterval(xiabo,2000)
	  readall.onmouseover=function(){
	    clearInterval(ct)
	  }
	  readall.onmouseout=function(){
	    ct=setInterval(xiabo,2000)
	  }
	  function xiabo(){
	    front=nowday-1
	    nextday=nowday+1
	    if(front<0)
	    {
	      front=reads.length-1
	    }
	    if(nextday==reads.length)
	    {
	      nextday=0;
	    }
	    reads[front].style.top=-123+"px";
	    animate(reads[nowday],{top:123})
	    animate(reads[front],{top:0})
	    animate(reads[nextday],{top:246})
	    nowday=front;
	    nextday=nowday;
	  }





})
	