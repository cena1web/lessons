(function(e){e.fn.replaceText=function(t,n,r){return this.each(function(){var i=this.firstChild,s,o,u=[];if(i){do{if(i.nodeType===3){s=i.nodeValue;o=s.replace(t,n);if(o!==s){if(!r&&/</.test(o)){e(i).before(o);u.push(i)}else{i.nodeValue=o}}}}while(i=i.nextSibling)}u.length&&e(u).remove()})}})(jQuery);

$(document).ready(function(){$("#sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>");$("#footer-wrapper .widget h2").wrap("<div class='widget-title'/>");$("ul#sub-menu").parent("li").addClass("hasSub");$(".index .post-outer").each(function(){$(this).find(".post-thumb a").attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})});$(".share-container").each(function(){var e=$(this);e.find(".post-sharebtn").click(function(){e.find(".post-share").fadeToggle("slow")});$(document).bind("click",function(e){if($(e.target).parents(".share-container").length===0){$(".post-share").fadeOut(300)}})});$(document).ready(function(e){e("abbr.timeago").timeago()});$("#header-search .search-icon").click(function(){var e=$("#header-search input");if(e.is(":hidden")){e.fadeIn(300);$(this).removeClass("icon-search");$(this).addClass("icon-cancel");$("#menu").hide()}else{e.fadeOut(300);$(this).removeClass("icon-cancel");$(this).addClass("icon-search");$("#menu").show()}return false});$(document).bind("click",function(e){if($(e.target).parents("#header-search").length===0){$("#header-search input").fadeOut(300);$("#header-search .search-icn").removeClass("icon-cancel");$("#header-search .search-icn").addClass("icon-search");$("#menu").show()}});$(".menu li").each(function(){$(this).hoverTimeout(0,function(){$(this).children("ul").slideDown()},0,function(){$(this).children("ul").hide()})});$(function(){$(".upbt").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},1e3);return false}}})});$(".widget-content").each(function(){var e=$(this).text();if(e.substr(0,10).match("fbbox")){e=e.replace("fbbox/","");$(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href='+e+'&width=340px&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false&appId=492409184153294" style="border:none; overflow:hidden; width:100%; height:230px;"></iframe>')}});$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)});var e="[";var t="]";$(".menu li *").replaceText(e,'<span class="msubtitle">');$(".menu li *").replaceText(t,"</span>");$(".menu #nav").show();$(".social-counter").each(function(){var e=$(this);var t=$(this).find(".social-item");if(t.length===0){e.remove()}$(this).find(".widget").removeClass("LinkList");$(".social-counter .social-item.facebook").find(".item-text").text("Likes");$(".social-counter .social-item.rss,.social-counter .social-item.youtube").find(".item-text").text("Subscribes");var n="[";var r="]";$(".social-counter *").replaceText(n,'<span class="item-count">');$(".social-counter *").replaceText(r,"</span>");$(".social-item").each(function(){var e=$(this).find(".remove-count");var t=$(this).find(".item-count");$(e).before($(t));$(e).remove()})});$(".contact-button a").click(function(){var e=$(".contact-sec");if(e.is(":hidden")){e.fadeIn(300);e.addClass("contact-show");$("#header-wrapper-rec").addClass("pop_contact ")}return false});$(document).bind("click",function(e){if($(e.target).parents(".contact-sec").length===0){$(".contact-sec").fadeOut(300);$("#header-wrapper-rec").removeClass("pop_contact ");$(".contact-sec").removeClass("contact-show")}});$(".contact-close").click(function(){$(".contact-sec").fadeOut(300);$("#header-wrapper-rec").removeClass("pop_contact ");$(".contact-sec").removeClass("contact-show");return false});var n=$("#sidetabs #tabside1 .widget h2").text();$(".menu-tab .item-1 a").text(n);var r=$("#sidetabs #tabside2 .widget h2").text();$(".menu-tab .item-2 a").text(r);var i=$("#sidetabs #tabside3 .widget h2").text();$(".menu-tab .item-3 a").text(i);$("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove();$(".sidetabs").tabslet({mouseevent:"click",attribute:"href",animation:true});if($(".sidetabs .widget").length===0){$(".sidetabs").remove()}if($(".home .post-outer").length===0){$(".home #main-wrapper #main").remove();$(".posts-title").remove()}if($("#footer .widget").length===0){$("#footer").remove();$("#footer-wrapper").css("padding-bottom","0");$(".bottom-nav").css("margin-bottom","0");$(".bottom-nav").css("border-bottom","0")}if($("#ticker .widget").length===0){$("#ticker").remove()}var s="[full_width]";var o="[left_sidebar]";var u="[right_sidebar]";$(".post *").replaceText(s,"<style>.item #main-wrapper{width:100% !important;float:none!important;border-right:0!important;border-left:0!important}.item #sidebar-wrapper{display:none;}.item #main-wrapper #main{margin-left:0!important;margin-right:0!important}</style>");$(".post-body *").replaceText(o,"<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:right!important;border-left:1px solid #EEE!important;border-right:0!important}.item #sidebar-wrapper{float:left!important;padding-left:0!important;padding-right:2%!important;border-right:1px solid #EEE!important;border-left:0!important;left:1px!important}.item #main-wrapper #main{margin-left:2.85%!important;margin-right:0!important}}</style>");$(".post-body *").replaceText(u,"<style>@media screen and (min-width: 1000px){.item #main-wrapper{float:left!important;border-right:1px solid #EEE!important;border-left:0!important}.item #sidebar-wrapper{float:right!important;padding-right:0!important;padding-left:2%!important;border-left:1px solid #EEE!important;left:-1px!important;border-right:0!important}.item #main-wrapper #main{margin-right:2.85%!important;margin-left:0!important}}</style>");(function(e){var t=e("a.newer-link");var n=e("a.older-link");e.get(t.attr("href"),function(n){t.html('<strong>Next <i class="fa fa-angle-double-right"></i></strong> <span>'+e(n).find(".post h1.post-title").text()+"</span>")},"html");e.get(n.attr("href"),function(t){n.html('<strong><i class="fa fa-angle-double-left"></i> Previous</strong> <span>'+e(t).find(".post h1.post-title").text()+"</span>")},"html")})(jQuery)});$(window).bind("load",function(){$(".intro-loader").remove();$("p.trans").each(function(){var e=$(this).text();var t=$(this).attr("data-tran");$("#pages-wrapper *").replaceText(e,t)})});
