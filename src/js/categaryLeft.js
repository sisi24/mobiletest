/**
 * Created by Administrator on 2017/3/17.
 */
define(function(require , exports , module ){
    module.exports=function(){
        // 滑动事件
        var categaryLeft = document.getElementsByClassName("categary-left");
        var categaryList = document.getElementsByClassName("categary-list");
        var categaryLeftHeight = categaryLeft[0].offsetHeight;
        var categaryListHeight = categaryList[0].offsetHeight;
        var HeightDistance = categaryListHeight-categaryLeftHeight;
        var touchstartClientY = 0;
        var touchmoveDistance = 0;
        var touchendClienY = 0;
        function moveTransition( isTransition ){
            categaryList[0].style.transition = isTransition;
            categaryList[0].style.webkitTransition = isTransition;
        }
        function moveTransform( ismoveTransform ){
            categaryList[0].style.transform = "translateY("+(ismoveTransform)+"px)";
            categaryList[0].style.webkitTransform = "translateY("+(ismoveTransform)+"px)";
        }
        categaryList[0].addEventListener("touchstart",function( e ){
            touchstartClientY = e.touches[0].clientY;
        });
        categaryList[0].addEventListener("touchmove" , function( e ){
            touchmoveDistance = e.touches[0].clientY - touchstartClientY;
            if( touchendClienY+touchmoveDistance > 100 ){
                touchendClienY = 100;
                return;
                // moveTransition( "all 0.2s" );
                // moveTransform( touchendClienY );
            }else if( touchendClienY+touchmoveDistance < (-HeightDistance+-100) ){
                touchendClienY = (-HeightDistance+-100);
                return;
                // moveTransition( "all 0.2s" );
                // moveTransform( touchendClienY );
            }else{
                moveTransition( "all 0.2s" );
                moveTransform( touchendClienY+touchmoveDistance );
            }

        });
        categaryList[0].addEventListener("touchend" , function( e ){
            touchendClienY +=touchmoveDistance;
            if( touchendClienY > 0 ){
                touchendClienY = 0;
                moveTransition( "all 0.2s" );
                moveTransform( touchendClienY );
            }else if( touchendClienY < -HeightDistance ){
                touchendClienY = -HeightDistance;
                moveTransition( "all 0.2s" );
                moveTransform( touchendClienY );
            }
        });
        // 点击事件
    }
})
