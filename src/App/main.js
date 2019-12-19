// const NatAPI = require('nat-api');

// const client = new NatAPI({
//     ttl: 1200, // Time to live of each port mapping in seconds (default: 1200)
//     autoUpdate: true, // Refresh all the port mapping to keep them from expiring (default: true)
//     gateway: '192.168.1.1' // Default gateway (default: null (auto find))
// })

 
// Map public port 1000 to private port 1000 with UDP and TCP
// client.map(1000, function (err) {
//   if (err) return console.log('Error', err)
//   console.log('Port mapped!')
// })
 
// Map public port 2000 to private port 3000 with UDP and TCP
// client.map(2000, 3000, function (err) {
//   if (err) return console.log('Error', err)
//   console.log('Port mapped!')
// })
 
// Map public port 4000 to private port 5000 with only UDP
// client.map({ publicPort: 4000, privatePort: 5000, ttl: 1800, protocol: 'UDP' }, function (err) {
//   if (err) return console.log('Error', err)
//   console.log('Port mapped!')
// })
 
// Unmap port public and private port 1000 with UDP and TCP
// client.unmap(1000, function (err) {
//   if (err) return console.log('Error', err)
//   console.log('Port unmapped!') 
// })
 
// Destroy object
// client.destroy()


export function _map() {
    
}

export function _unMap() {
    
}