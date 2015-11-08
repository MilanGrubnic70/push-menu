var main = function  () {
	$('.icon-menu').click(function  () {
		$(.menu).animate({
			left: 0px,
			duration: 200
		});
		$(.body).animate({
			left: 285px;
			duration; 200
		});
	});
};

$(document).ready(main);