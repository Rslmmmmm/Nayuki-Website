$(function(){
	  		$(".navbars").click(function(){
			$(".nav").slideToggle()
			
			})
			
			$('.proclass').find('a').click(function(){
$(this).addClass('on').siblings().removeClass('on');
$('#contents').find('.proitem').eq($(this).index()).addClass('show').siblings().removeClass('show');
})
			
			
	  })

