// 数据遍历
var oNavs = "";
var oFronts = "";

var nav_lists;
var oBject;
for(sum1 in FrontGuide['main']){
    oBject = FrontGuide['main'][sum1];
    var oPageT1 = oBject['pageT1'];
    nav_lists = '<a href="#page_' + sum1 + '" class="nav_list"><li>' + oPageT1 + '</li></a>';
    oNavs+= nav_lists;

    var pageC1 = oBject['pageC1'];

    oFronts += '<div id="_page_' + sum1 + '" class="content_list"><div class="content_list_title">' + oPageT1 + '</div><div class="content_list_main"><div class="main_classify">';
    for(sum2 in pageC1){
        var oPage2 = pageC1[sum2];
        var oPageT2 = oPage2['pageT2'];
        var pageC2 = oPage2['pageC2'];

        oFronts += '<div class="main_classify_name">' + oPageT2 + '</div><div class="main_classify_war">';
        for(sum3 in pageC2){
            var oPage3 = pageC2[sum3];
            var oNames = oPage3['Name'];
            var oTitles = oPage3['Title'];
            var oHrefs = oPage3['Href'];
            var oNews = oPage3['New'];
            var nNt = "";
            if(oNews == 1){
                nNt = '<i class="Icon-New">NEW</i>';
            }
            oFronts += '<a title="' + oTitles + '" href="' + oHrefs + '" target="_blank"><div class="main_classify_list">' + oNames + '</div></a>' + nNt;
        }
        oFronts += "</div>";
    }
    oFronts += "</div></div></div>";
}
// #nav
oNavs = '<ul id="nav_ul" class="nav_ul">' + oNavs + '</ul>';
oFronts = '<div id="content_war" class="content_war war">' + oFronts + '</div>';
// console.log(oFronts);
document.getElementById("nav").innerHTML = oNavs;
document.getElementById("content").innerHTML = oFronts;

// 加载完成
$(document).ready(function(){   
    //返回顶部
    $(document).on('click','#backTop',function(){
        $("html, body").animate({"scroll-top":0},600,'easeInOutQuint');
    });
    
    //页面滚动到距顶部600px出现/消失返回顶部按钮
    $(window).scroll(function(){
        var targetTop = $(this).scrollTop();

        if(targetTop > 600){
            $('#backTop').animate({'right':'0'},200);
        }else if(targetTop <= 600){
            $('#backTop').stop();
            $('#backTop').animate({'right':'-40px'},200);
        }
    });
    
    //顶端导航跳转
    $(document).on('click','.nav_list',function(){
        var targetId='_'+$(this).attr('href').substr(1);
        var targetHeight=document.getElementById(targetId).offsetTop;
        $("html, body").animate({"scroll-top": targetHeight-70},600,'easeInOutQuint');
    });
    
    //刷新页面跳转
    var hrefId='_'+location.href.split('#')[1];
    if(location.href.split('#')[1]){
        var hrefHeight=document.getElementById(hrefId).offsetTop;
        $("html, body").animate({"scroll-top": hrefHeight-70},600,'easeInOutQuint');
    }
});
//a标签title提示
$("a[title]").each(function() {
    var a = $(this);
    var title = a.attr('title');
    if (title == undefined || title == "") return;
    a.data('title', title).removeAttr('title').hover(

    function() {
        var offset = a.offset();
        $("<div id=\"TitleTip\"></div>").appendTo($("body")).html(title).css({
            top: offset.top + a.outerHeight() + 10,
            left: offset.left + a.outerWidth()/2 + 1
        }).fadeIn(function() {
            var pop = $(this);
            setTimeout(function() {
                pop.remove();
            }, pop.text().length * 800);
        });
    }, function() {
        $("#TitleTip").remove();
    });
});


jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
    {
        def: 'easeOutQuad',
        swing: function (x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
        },
        easeInQuad: function (x, t, b, c, d) {
            return c*(t/=d)*t + b;
        },
        easeOutQuad: function (x, t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOutQuad: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },
        easeInCubic: function (x, t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },
        easeOutCubic: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOutCubic: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },
        easeInQuart: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },
        easeOutQuart: function (x, t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOutQuart: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },
        easeInQuint: function (x, t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOutQuint: function (x, t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOutQuint: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },
        easeInSine: function (x, t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOutSine: function (x, t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOutSine: function (x, t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },
        easeInExpo: function (x, t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOutExpo: function (x, t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOutExpo: function (x, t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },
        easeInCirc: function (x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOutCirc: function (x, t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOutCirc: function (x, t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },
        easeInElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },
        easeInOutElastic: function (x, t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        },
        easeInBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOutBack: function (x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },
        easeInBounce: function (x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
        },
        easeOutBounce: function (x, t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOutBounce: function (x, t, b, c, d) {
            if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    });