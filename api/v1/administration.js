const config = require('../../config')

let adminUrl = `${config.apiBaseUrl}/administration`

module.exports = {
  startCapture: function() {
	   fetch(`${adminUrl}/start_capture`)
		   .catch(error => console.log(error))},
  checkStatus: function() {
  	  fetch(`${adminUrl}/check_status`)
		  .then(function(response) {
		    if (response.status == 200)
		    {
		      $('#status').css('background-color', 'green')
		    } else {
		      $('#status').css('background-color', 'red')
		    }
		  })
  		},
  	availableDevices: function() {
  	   return fetch(`${adminUrl}/available_devices`)
			  .then(response => response.json())
			  .then(data => {
			    return data.body
			})
  	}
  }
