const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true
        }

    })
    .help()
    .argv;

console.log(argv.direccion);

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch((error) => {
        console.log(error);
    })

clima.getClima(32.549999, -114.860001)
    .then(console.log)
    .catch(console.log)*/

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.getLugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.direccion} es de ${temperatura}`
    } catch (error) {
        console.log(error);
        return 'No se pudo determinar el clima'
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)