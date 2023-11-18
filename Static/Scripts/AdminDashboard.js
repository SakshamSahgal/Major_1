    truck1Btn = document.getElementById("Truck_1_info");
    truck2Btn = document.getElementById("Truck_2_info");
    truck3Btn = document.getElementById("Truck_3_info");
    truck4Btn = document.getElementById("Truck_4_info");
    streamCanvas = document.getElementById("canvas");
    streamCtx = streamCanvas.getContext("2d");
    var static = new Image();
    static.src = "/map.jpeg";
    static.onload = function() {
        streamCtx.drawImage(static, 0, 0);
    };

    var socket1; // Variable for the WebSocket connection for Truck 1
    var socket2; // Variable for the WebSocket connection for Truck 2
    var socket3; // Variable for the WebSocket connection for Truck 3
    var socket4; // Variable for the WebSocket connection for Truck 4
    var socket5; // Variable for the WebSocket connection for Camera

    truck1Btn.addEventListener("change", function(){
        if(truck1Btn.checked){
            console.log("Truck 1 checked");
            socket1 = new WebSocket(`ws://localhost:3000/truck1`);
            
            socket1.onopen = () => {
                console.log('Truck1 WebSocket connection established.');
            };
    
            socket1.onclose = () => {
                console.log('WebSocket truck 1 connection closed.');
            };
    
            socket1.onmessage = (event) => {
                console.log("Received truck1 data", JSON.parse(event.data));
                let truck1Data = JSON.parse(event.data);
                let truck1x = document.getElementById("truck1x");
                let truck1y = document.getElementById("truck1y");
                truck1x.innerHTML = truck1Data.x;
                truck1y.innerHTML = truck1Data.y;
                drawPoint(truck1Data.x,truck1Data.y,"red");
            };
        }
        else{
            console.log("Truck 1 button unchecked");
            socket1.close();
        }
    });

    truck2Btn.addEventListener("change", function(){
        if(truck2Btn.checked){
            console.log("Truck 2 checked");
            socket2 = new WebSocket(`ws://localhost:3000/truck2`);
            
            socket2.onopen = () => {
                console.log('Truck2 WebSocket connection established.');
            };
    
            socket2.onclose = () => {
                console.log('WebSocket truck 2 connection closed.');
            };
    
            socket2.onmessage = (event) => {
                console.log("Received truck2 data", JSON.parse(event.data));
                let truck2Data = JSON.parse(event.data);
                let truck2x = document.getElementById("truck2x");
                let truck2y = document.getElementById("truck2y");
                truck2x.innerHTML = truck2Data.x;
                truck2y.innerHTML = truck2Data.y;
                drawPoint(truck2Data.x,truck2Data.y,"blue");
            };
        }
        else{
            console.log("Truck 2 button unchecked");
            socket2.close();
        }
    });

    truck3Btn.addEventListener("change", function(){
        if(truck3Btn.checked){
            console.log("Truck 3 checked");
            socket3 = new WebSocket(`ws://localhost:3000/truck3`);
            
            socket3.onopen = () => {
                console.log('Truck3 WebSocket connection established.');
            };
    
            socket3.onclose = () => {
                console.log('WebSocket truck 3 connection closed.');
            };
    
            socket3.onmessage = (event) => {
                console.log("Received truck3 data", JSON.parse(event.data));
                let truck3Data = JSON.parse(event.data);
                let truck3x = document.getElementById("truck3x");
                let truck3y = document.getElementById("truck3y");
                truck3x.innerHTML = truck3Data.x;
                truck3y.innerHTML = truck3Data.y;
                drawPoint(truck3Data.x,truck3Data.y,"green");
            };
        }
        else{
            console.log("Truck 3 button unchecked");
            socket3.close();
        }
    });

    truck4Btn.addEventListener("change", function(){
        if(truck4Btn.checked){
            console.log("Truck 4 checked");
            socket4 = new WebSocket(`ws://localhost:3000/truck4`);
            
            socket4.onopen = () => {
                console.log('Truck4 WebSocket connection established.');
            };
    
            socket4.onclose = () => {
                console.log('WebSocket truck 4 connection closed.');
            };
    
            socket4.onmessage = (event) => {
                console.log("Received truck4 data", JSON.parse(event.data));
                let truck4Data = JSON.parse(event.data);
                let truck4x = document.getElementById("truck4x");
                let truck4y = document.getElementById("truck4y");
                truck4x.innerHTML = truck4Data.x;
                truck4y.innerHTML = truck4Data.y;
                drawPoint(truck4Data.x,truck4Data.y,"yellow");
            };
        }
        else{
            console.log("Truck 4 button unchecked");
            socket4.close();
        }
    });




function drawPoint(x,y,color){
    streamCtx.beginPath();                      // Start a new path
    streamCtx.arc(-8.26*y+820,-8.1*x+702, 4, 0, 2 * Math.PI);     // Draw a circle of radius 5
    streamCtx.fillStyle = color;                // Set fill color to blue
    streamCtx.fill();                           // Fill the path
    // Schedule clearing the point after the specified duration
    setTimeout(function () {
        clearPoint();
    }, 15000);
}

// Function to clear the point
function clearPoint() {
    var static = new Image();
    static.src = "/map.jpeg";
    static.onload = function() {
        streamCtx.drawImage(static, 0, 0);
    };
}