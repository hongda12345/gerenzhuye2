/*
* @Author: 宏达
* @Date:   2017-10-27 15:00:16
* @Last Modified by:   宏达
* @Last Modified time: 2017-10-29 19:09:09
*/
/*返回顶部*/
$(document).ready(function(){
        $('#toTop').hide();
        $(function(){
            $(window).scroll(function(){
                if($(window).scrollTop()>400){
                    $('#toTop').fadeIn(1500);
                }else{
                    $('#toTop').fadeOut(1500);
                }
            })
            $('#toTop').click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            })
        })
});
/*scrolling*/
jQuery(document).ready(function($) {
	$('.scroll').click(function(event){
        event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	})
});
/*百分比*/
// let canvas=document.querySelector('canvas');
// 		let ctx=canvas.getContext("2d");
// 		let t;
// 		let n=90;
// 		let num=1;
// 		fn();
// 		function fn(){
// 			num++;
// 			if(num==n){
// 				cancelAnimationFrame(t);
// 			}else{
// 				t=requestAnimationFrame(fn);
// 			}
// 			let rad=Math.PI/50*num;
// 			ctx.clearRect(0, 0, 300, 300);
// 			ctx.strokeStyle='hotpink';
// 			ctx.beginPath();
// 			ctx.arc(150, 150, 100, -Math.PI/2, rad-Math.PI/2);
//             ctx.lineWidth=10;
//             ctx.lineCap='round';
//             ctx.stroke();
//             ctx.textAlign='center';
//             ctx.textBaseLine='middle';
//             ctx.font='bold 20px sans-serif';
//             ctx.fillText(`${num}%`,150,150);
// 		}
