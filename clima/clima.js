const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3e30aef4cb816c22fb766b9f61f49a9f
    &units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}