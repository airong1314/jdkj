 (function($) {
     //默认参数
     var defaults = {
         tabSelected: "tab_selected",
     };

     $.fn.extend({
         //插件名称
         "tab": function(options) {
             //使用jQuery.extend 覆盖插件默认参数
             var options = $.extend(defaults, options);
             //检测用户传进来的参数是否合法
             if (!isValid(options)) return this;
             var tab = $(".tab_menu ul li");
             var tabContent = $(".tab_box > div");
             tab.mouseover(function(event) {
                 $(this).addClass(options.tabSelected).siblings().removeClass(options.tabSelected);
                 var curIndex = tab.index(this);
                 tabContent.eq(curIndex).show().siblings().hide();
             });
             return this;
         }
     });
     //私有方法，检测参数是否合法
     function isValid(options) {
         return !options || (options && typeof options === "object") ? true : false;
     }

 })(window.jQuery);
 $(function() {
     $(".tab").tab(); //调用自定义选项卡插件
 });