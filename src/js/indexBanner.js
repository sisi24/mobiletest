/**
 * Created by Administrator on 2017/3/15.
 */
define(function(require , exports , module){
    module.exports = function(){
        var banner = document.getElementsByClassName("banner");
        var bannerWidth = banner[0].offsetWidth;
        var bannerUl = banner[0].firstElementChild;
        // var ulFirstChild = bannerUl.firstElementChild.cloneNode(true);
        // bannerUl.appendChild( ulFirstChild );
        var touchStartClienX;
        var touchDistence;
        var index = 1;
        var timeID = setInterval(function(){
            index++;
            bannerUl.style.transition="all 0.2s";
            bannerUl.style.webkitTransition="all 0.2s";
            bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
            bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
        } , 2000);
        bannerUl.addEventListener("webkitTransitionEnd" , function(){
            if( index == 9 ){
                index = 1;
                bannerUl.style.transition="none";
                bannerUl.style.webkitTransition="none";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            }else if( index == 0 ){
                index = 8;
                bannerUl.style.transition="none";
                bannerUl.style.webkitTransition="none";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            };
        })
        bannerUl.addEventListener("transitionEnd" , function(){
            if( index == 9 ){
                index = 1;
                bannerUl.style.transition="none";
                bannerUl.style.webkitTransition="none";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            }else if( index == 0 ){
                index = 8;
                bannerUl.style.transition="none";
                bannerUl.style.webkitTransition="none";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            };;
        })
        banner[0].addEventListener("touchstart" , function( e ){
            clearInterval( timeID );
            touchStartClienX = e.touches[0].clientX;
            console.log( touchStartClienX );
        });
        banner[0].addEventListener("touchmove" , function( e ){
            touchDistence = e.touches[0].clientX - touchStartClienX;
            bannerUl.style.transition="none";
            bannerUl.style.webkitTransition="none";
            bannerUl.style.transform = "translateX("+(-bannerWidth*index+touchDistence)+"px)";
            bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index+touchDistence)+"px)";
        });
        banner[0].addEventListener("touchend" , function(){
            if(Math.abs(touchDistence) > bannerWidth/3 ){
                if(touchDistence > 0 ){
                    index--;
                }else{
                    index++;
                }
                bannerUl.style.transition="all 0.2s";
                bannerUl.style.webkitTransition="all 0.2s";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            }else{
                bannerUl.style.transition="all 0.2s";
                bannerUl.style.webkitTransition="all 0.2s";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            }
            timeID = setInterval(function(){
                index++;
                bannerUl.style.transition="all 0.2s";
                bannerUl.style.webkitTransition="all 0.2s";
                bannerUl.style.transform = "translateX("+(-bannerWidth*index)+"px)";
                bannerUl.style.webkitTransform = "translateX("+(-bannerWidth*index)+"px)";
            } , 2000);
        })
    }
})
