const devices = require('./api/v1/devices')
const admin = require('./api/v1/administration')

$(() => {
	$("#start-capture").on("click", function(event) {
	  admin.startCapture()
	})

	$("#check-status").on("click", function(event) {
	  admin.checkStatus()
	})

	devices.count().then(count => {
		$('#device-count').text(count)
	})

})