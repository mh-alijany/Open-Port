const NatAPI = require('nat-api');

var client;

// Map public port 4000 to private port 5000 with only UDP
// client.map({ publicPort: 4000, privatePort: 5000, ttl: 1800, protocol: 'UDP' }, function (err) {
//   if (err) return console.log('Error', err)
//   console.log('Port mapped!')
// })

export function _map(privatePort, publicPort, gateway) {
    return new Promise((resolve) => {
        if (privatePort == "") // or not valid
            return false;

        if (publicPort == "")
            publicPort = privatePort;

        if (gateway == "")
            gateway == null;

        client = new NatAPI({ gateway: gateway });

        client.map(publicPort, privatePort, function (err) {
            resolve({ error: err });
        });
    })
}

export function _unMap(publicPort) {
    return new Promise((resolve) => {

        client.unmap(publicPort, function (err) {
            resolve({ error: err });
            client.destroy();
        });
    })
}