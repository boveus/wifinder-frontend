const config = require('../../config')

let devicesIndexUrl = `${config.apiBaseUrl}/devices`

module.exports = {
  count: function() {
	return fetch(devicesIndexUrl)
	  .then(response => response.json())
	  .then(data => {
	    return data.length
	})
	.catch(error => console.log(error));
  },
  all: function() {
	return fetch(devicesIndexUrl)
	  .then(response => response.json())
	  .then(data => {
	    return data
	})
	.catch(error => console.log(error));
  },
  show: function(id) {
	return fetch(`${devicesIndexUrl}/${id}`)
	  .then(response => response.json())
	  .then(data => {
	    return data
	})
	.catch(error => console.log(error));
  }
}