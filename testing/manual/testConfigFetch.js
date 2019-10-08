const fetchConfigApi = require('../../modules/fetchConfiguration');

fetchConfigApi().then(data => console.log(data));