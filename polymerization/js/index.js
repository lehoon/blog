var nav_lists,oBject,oNavs="",oFronts="";for(sum1 in FrontGuide.main){var oPageT1=(oBject=FrontGuide.main[sum1]).pageT1;oNavs+=nav_lists='<a href="#page_'+sum1+'" class="nav_list"><li>'+oPageT1+"</li></a>";var pageC1=oBject.pageC1;for(sum2 in oFronts+='<div id="_page_'+sum1+'" class="content_list"><div class="content_list_title">'+oPageT1+'</div><div class="content_list_main"><div class="main_classify">',pageC1){var oPage2=pageC1[sum2],oPageT2=oPage2.pageT2,pageC2=oPage2.pageC2;for(sum3 in oFronts+='<div class="main_classify_name">'+oPageT2+'</div><div class="main_classify_war">',pageC2){var oPage3=pageC2[sum3],oNames=oPage3.Name,oTitles=oPage3.Title,oHrefs=oPage3.Href,oNews=oPage3.New,nNt="";1==oNews&&(nNt='<i class="Icon-New">NEW</i>'),oFronts+='<a title="'+oTitles+'" href="'+oHrefs+'" target="_blank"><div class="main_classify_list">'+oNames+"</div></a>"+nNt}oFronts+="</div>"}oFronts+="</div></div></div>"}oNavs='<ul id="nav_ul" class="nav_ul">'+oNavs+"</ul>",oFronts='<div id="content_war" class="content_war war">'+oFronts+"</div>",document.getElementById("nav").innerHTML=oNavs,document.getElementById("content").innerHTML=oFronts,$(document).ready(function(){$(document).on("click","#backTop",function(){$("html, body").animate({"scroll-top":0},600,"easeInOutQuint")}),$(window).scroll(function(){var t=$(this).scrollTop();600<t?$("#backTop").animate({right:"0"},200):t<=600&&($("#backTop").stop(),$("#backTop").animate({right:"-40px"},200))}),$(document).on("click",".nav_list",function(){var t="_"+$(this).attr("href").substr(1),e=document.getElementById(t).offsetTop;$("html, body").animate({"scroll-top":e-70},600,"easeInOutQuint")});var t="_"+location.href.split("#")[1];if(location.href.split("#")[1]){var e=document.getElementById(t).offsetTop;$("html, body").animate({"scroll-top":e-70},600,"easeInOutQuint")}}),$("a[title]").each(function(){var e=$(this),n=e.attr("title");null!=n&&""!=n&&e.data("title",n).removeAttr("title").hover(function(){var t=e.offset();$('<div id="TitleTip"></div>').appendTo($("body")).html(n).css({top:t.top+e.outerHeight()+10,left:t.left+e.outerWidth()/2+1}).fadeIn(function(){var t=$(this);setTimeout(function(){t.remove()},800*t.text().length)})},function(){$("#TitleTip").remove()})}),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,a,i){return jQuery.easing[jQuery.easing.def](t,e,n,a,i)},easeInQuad:function(t,e,n,a,i){return a*(e/=i)*e+n},easeOutQuad:function(t,e,n,a,i){return-a*(e/=i)*(e-2)+n},easeInOutQuad:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e+n:-a/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,a,i){return a*(e/=i)*e*e+n},easeOutCubic:function(t,e,n,a,i){return a*((e=e/i-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e+n:a/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,a,i){return a*(e/=i)*e*e*e+n},easeOutQuart:function(t,e,n,a,i){return-a*((e=e/i-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e*e+n:-a/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,a,i){return a*(e/=i)*e*e*e*e+n},easeOutQuint:function(t,e,n,a,i){return a*((e=e/i-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,a,i){return(e/=i/2)<1?a/2*e*e*e*e*e+n:a/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,a,i){return-a*Math.cos(e/i*(Math.PI/2))+a+n},easeOutSine:function(t,e,n,a,i){return a*Math.sin(e/i*(Math.PI/2))+n},easeInOutSine:function(t,e,n,a,i){return-a/2*(Math.cos(Math.PI*e/i)-1)+n},easeInExpo:function(t,e,n,a,i){return 0==e?n:a*Math.pow(2,10*(e/i-1))+n},easeOutExpo:function(t,e,n,a,i){return e==i?n+a:a*(1-Math.pow(2,-10*e/i))+n},easeInOutExpo:function(t,e,n,a,i){return 0==e?n:e==i?n+a:(e/=i/2)<1?a/2*Math.pow(2,10*(e-1))+n:a/2*(2-Math.pow(2,-10*--e))+n},easeInCirc:function(t,e,n,a,i){return-a*(Math.sqrt(1-(e/=i)*e)-1)+n},easeOutCirc:function(t,e,n,a,i){return a*Math.sqrt(1-(e=e/i-1)*e)+n},easeInOutCirc:function(t,e,n,a,i){return(e/=i/2)<1?-a/2*(Math.sqrt(1-e*e)-1)+n:a/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,a,i){var o=1.70158,u=0,s=a;if(0==e)return n;if(1==(e/=i))return n+a;if(u=u||.3*i,s<Math.abs(a)){s=a;o=u/4}else o=u/(2*Math.PI)*Math.asin(a/s);return-(s*Math.pow(2,10*--e)*Math.sin((e*i-o)*(2*Math.PI)/u))+n},easeOutElastic:function(t,e,n,a,i){var o=1.70158,u=0,s=a;if(0==e)return n;if(1==(e/=i))return n+a;if(u=u||.3*i,s<Math.abs(a)){s=a;o=u/4}else o=u/(2*Math.PI)*Math.asin(a/s);return s*Math.pow(2,-10*e)*Math.sin((e*i-o)*(2*Math.PI)/u)+a+n},easeInOutElastic:function(t,e,n,a,i){var o=1.70158,u=0,s=a;if(0==e)return n;if(2==(e/=i/2))return n+a;if(u=u||i*(.3*1.5),s<Math.abs(a)){s=a;o=u/4}else o=u/(2*Math.PI)*Math.asin(a/s);return e<1?s*Math.pow(2,10*--e)*Math.sin((e*i-o)*(2*Math.PI)/u)*-.5+n:s*Math.pow(2,-10*--e)*Math.sin((e*i-o)*(2*Math.PI)/u)*.5+a+n},easeInBack:function(t,e,n,a,i,o){return null==o&&(o=1.70158),a*(e/=i)*e*((o+1)*e-o)+n},easeOutBack:function(t,e,n,a,i,o){return null==o&&(o=1.70158),a*((e=e/i-1)*e*((o+1)*e+o)+1)+n},easeInOutBack:function(t,e,n,a,i,o){return null==o&&(o=1.70158),(e/=i/2)<1?a/2*(e*e*((1+(o*=1.525))*e-o))+n:a/2*((e-=2)*e*((1+(o*=1.525))*e+o)+2)+n},easeInBounce:function(t,e,n,a,i){return a-jQuery.easing.easeOutBounce(t,i-e,0,a,i)+n},easeOutBounce:function(t,e,n,a,i){return(e/=i)<1/2.75?a*(7.5625*e*e)+n:e<2/2.75?a*(7.5625*(e-=1.5/2.75)*e+.75)+n:e<2.5/2.75?a*(7.5625*(e-=2.25/2.75)*e+.9375)+n:a*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,a,i){return e<i/2?.5*jQuery.easing.easeInBounce(t,2*e,0,a,i)+n:.5*jQuery.easing.easeOutBounce(t,2*e-i,0,a,i)+.5*a+n}});