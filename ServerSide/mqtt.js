module.exports = () =>  {
    
    const mqtt = require('mqtt');
    
    // Define the MQTT broker (HiveMQ public MQTT server) and port for standard MQTT
    const brokerAddress = 'mqtt://broker.hivemq.com';
    const port = 1883; // Standard MQTT port
    
    // Create an MQTT client
    const client = mqtt.connect(brokerAddress, { port: port, protocolVersion: 4 }); // Use MQTT 3.1.1 (MQTTv311)
    
    // Callback function to handle connection status
    client.on('connect', () => {
      console.log('Connected to MQTT broker');
      client.subscribe('topic_to_drive_dolly', (err) => {
        if (!err) {
          console.log('Subscribed to topic_to_drive_dolly');
        }
      });
    });
    
    client.on('disconnect', () => {
      console.log('Disconnected from MQTT broker');
      // Handle reconnection here if needed
    });
    
    client.on('message', (topic, message) => {
      console.log(`Received message '${message.toString()}' on topic '${topic}'`);
    });
}
