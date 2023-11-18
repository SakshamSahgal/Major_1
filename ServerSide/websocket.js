module.exports = (app) => {
    const expressWs = require('express-ws');
    expressWs(app);
    const mqtt = require('mqtt');
    
    const brokerAddress = 'mqtt://broker.hivemq.com';
    const port = 1883; // Standard MQTT port
    const topic1 = '/fleet1/dolly1/';
    const topic2 = '/fleet1/dolly2/';
    const topic3 = '/fleet2/dolly3/';
    const topic4 = '/fleet2/dolly4/';


    const createWebSocket = (ws, topic) => {
        console.log(`${topic} WebSocket connection opened`);
        
        const client = mqtt.connect(brokerAddress, { port: port, protocolVersion: 4 });

        client.subscribe(topic, (err) => {
            if (!err) {
                console.log(`Subscribed to ${topic}`);
            }
        });

        client.on('message', (topic, message) => {
            console.log(JSON.parse(message.toString()));
            ws.send(message.toString());
        });

        ws.on('close', () => {
            console.log(`${topic} WebSocket connection closed`);
            client.unsubscribe(topic, (err) => {
                if (!err) {
                    console.log(`Unsubscribed from ${topic}`);
                }
            });
        });
    };

    app.ws('/truck1', (ws, req) => {
        createWebSocket(ws, topic1);
    });

    app.ws('/truck2', (ws, req) => {
        createWebSocket(ws, topic2);
    });

    app.ws('/truck3', (ws, req) => {
        createWebSocket(ws, topic3);
    });

    app.ws('/truck4', (ws, req) => {
        createWebSocket(ws, topic4);
    });
};