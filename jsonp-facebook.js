var script = document.createElement('script');
script.src = "https://graph.facebook.com/fql?q=SELECT fan_count, name, company_overview, pic_cover, pic_square, page_url, mission, products FROM page WHERE username = 'Odwalla' OR username = 'simplyorangejuice' OR username='jonessoda' OR username='honesttea' ORDER BY fan_count DESC&callback=myFunction";
document.getElementsByTagName('head')[0].appendChild(script);

function myFunction(data) {
	console.log(data);
	var templateString = document.getElementById('fb-page-template').innerHTML;
	var template = Handlebars.compile(templateString);
	var html = "";

	for (i=0; i<data.data.length; i++){
		html = html+template(data.data[i]);
	}

	document.getElementById('fb-page').innerHTML = html;

}

(function($) {
	$('#fb-page').on('click', 'a.moreInfoLink', function(e) {
		var $this = $(this);
		var $moreInfoContent = $this.next('div.moreInfoContent');
		e.preventDefault();

		if ($moreInfoContent.css('display') === 'none') {
			$this.html('Hide Info');
			$moreInfoContent.css('display','true');
		} else {
			$this.html('More Info');
			$moreInfoContent.css('display','none');
		}
	});
})(jQuery);