/**
 * Created by Administrator on 2017/3/15.
 */
// window.onload=function(){
//     searchBarColor();
// }
//
// // 动态设置搜索栏背景颜色
// function searchBarColor(){
//     var searchbar = document.getElementsByClassName("search-bar");
//     var banner = document.getElementsByClassName("banner");
//     var bannerHeight = banner[0].offsetHeight;
//     window.onscroll = function(){
//         var scrollHeight=document.body.scrollTop;
//         var alpha=1;
//         if(scrollHeight < bannerHeight){
//             alpha=alpha*(scrollHeight/bannerHeight);
//         }
//         else {
//             alpha=1;
//         }
//         searchbar[0].style.backgroundColor="rgba(233,35,34,"+alpha+")";
//     }
// }
define(function(require , exports , module){
    // 动态设置搜索栏背景颜色
    function searchBarColor(){
        var searchbar = document.getElementsByClassName("search-bar");
        var banner = document.getElementsByClassName("banner");
        var bannerHeight = banner[0].offsetHeight;
        window.onscroll = function(){
            var scrollHeight=document.body.scrollTop;
            var alpha=1;
            if(scrollHeight < bannerHeight){
                alpha=alpha*(scrollHeight/bannerHeight);
            }
            else {
                alpha=1;
            }
            searchbar[0].style.backgroundColor="rgba(233,35,34,"+alpha+")";
        }
    }
    module.exports = searchBarColor();
})
