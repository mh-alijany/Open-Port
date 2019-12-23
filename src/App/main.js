const NatAPI = require('nat-api');

var client;

export function _map(privatePort, publicPort, gateway) {
    return new Promise((resolve) => {
        
        if (publicPort == "") { // or not valid
            resolve({ error: { message: "public port is Required" } });
            return;
        }

        if (privatePort == "")
            privatePort = publicPort;

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