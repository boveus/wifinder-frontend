const devices = require('./api/v1/devices')
const admin = require('./api/v1/administration')

$(() => {
    $( function() {
    	$( "#tabs" ).tabs()
    } )
	$("#start-capture").on("click", function(event) {
	  admin.startCapture()
	})

	$("#check-status").on("click", function(event) {
	  admin.checkStatus()
	})

	$("#set-capture").on("click", function(event) {
	  admin.setCaptureDevice($('#capture-device').val()).then(response => {
	  	alert(response)
	  })
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