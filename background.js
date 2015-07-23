chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('whatsapp_window.html', {
		'bounds': {
			'height': 1200,
			'width': 1200
		}
	});
});