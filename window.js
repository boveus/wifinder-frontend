const devices = require('./api/v1/devices')
const admin = require('./api/v1/administration')

$(() => {
	$("#start-capture").on("click", function(event) {
	  admin.startCapture()
	})

	$("#check-status").on("click", function(event) {
	  admin.checkStatus()
	})

	$("#available-devices").on("click", function(event) {
		admin.availableDevices().then(availableDevices => {
	  		$('#available-devices-data').text(availableDevices)
		})
	})

	devices.count().then(count => {
		$('#device-count').text(count)
	})

})