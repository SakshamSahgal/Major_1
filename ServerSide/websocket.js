module.exports = (app) => {

    const expressWs = require('express-ws');
    expressWs(app);
    const mqtt = require('mqtt');
    const topic1 = '/fleet1/dolly1/';
    const topic2 = '/fleet1/dolly2/';
    const topic3 = '/fleet1/dolly3/';
    const topic4 = '/fleet1/dolly4/';

    const brokerAddress = 'mqtt://broker.hivemq.com';
    const port = 1883; // Standard MQTT port

    const client = mqtt.connect(brokerAddress, { port: port, protocolVersion: 4 }); // Use MQTT 3.1.1 (MQTTv311)
    
    app.ws('/truck1', (ws, req) => {

        console.log('truck1 WebSocket connection opened');
        client.subscribe(topic1, (err) => {
            if (!err) {
                console.log('Subscribed to', topic1);
            }
        })
        client.on('message', (topic1, message) => {
            console.log(JSON.parse(message.toString()));
            ws.send((message.toString()));
        });

        ws.on('close', () => {
            console.log('truck1 WebSocket connection closed');
            client.unsubscribe(topic1, (err) => {
                if (!err) {
                    console.log('Unsubscribed from', topic1);
                }
            });            
        });
      });

      app.ws('/truck2', (ws, req) => {
            
            console.log('truck2 WebSocket connection opened');
            client.subscribe(topic2, (err) => {
                if (!err) {
                    console.log('Subscribed to', topic2);
                }
            })
            client.on('message', (topic2, message) => {
                console.log(JSON.parse(message.toString()));
                ws.send((message.toString()));
            });
    
            ws.on('close', () => {
                console.log('truck2 WebSocket connection closed');
                client.unsubscribe(topic2, (err) => {
                    if (!err) {
                        console.log('Unsubscribed from', topic2);
                    }
                });            
            });
        });

    app.ws('/truck3', (ws, req) => {
                
        console.log('truck3 WebSocket connection opened');
        client.subscribe(topic3, (err) => {
            if (!err) {
                console.log('Subscribed to', topic3);
            }
        })
        client.on('message', (topic3, message) => {
            console.log(JSON.parse(message.toString()));
            ws.send((message.toString()));
        });

        ws.on('close', () => {
            console.log('truck3 WebSocket connection closed');
            client.unsubscribe(topic3, (err) => {
                if (!err) {
                    console.log('Unsubscribed from', topic3);
                }
            });            
        });
    
    })

    app.ws('/truck4', (ws, req) => {

        console.log('truck4 WebSocket connection opened');
        client.subscribe(topic4, (err) => {
            if (!err) {
                console.log('Subscribed to', topic4);
            }
        })
        client.on('message', (topic4, message) => {
            console.log(JSON.parse(message.toString()));
            ws.send((message.toString()));
        });

        ws.on('close', () => {
            console.log('truck4 WebSocket connection closed');
            client.unsubscribe(topic4, (err) => {
                if (!err) {
                    console.log('Unsubscribed from', topic4);
                }
            });            
        });
    })
}