
// CameraWebsocket = new WebSocket(`ws://localhost:3000/camera1`);
// CameraWebsocket.onopen = () => {
//           console.log(`truck${id} WebSocket connection established.`);
//           truckX.innerHTML = "Loading...";
//           truckY.innerHTML = "Loading...";
//       };

//       CameraWebsocket.onmessage = (event) => {
//           console.log(`Received truck${id} data`, JSON.parse(event.data));
//           truckPointer.setAttribute("visibility", "visible");

//           let truckData = JSON.parse(event.data);
//           truckX.innerHTML = truckData.x;
//           truckY.innerHTML = truckData.y;
//           drawPoint(`Truck${id}Pointer`, truckData.x, truckData.y, color);
//       };

//       CameraWebsocket.onclose = () => {
//           console.log(`truck${id} WebSocket connection closed.`);
//           truckX.innerHTML = "No Data";
//           truckY.innerHTML = "No Data";
//           truckPointer.setAttribute("visibility", "hidden");
//       };

// console.log("Camera.js Loaded");

// var modal = document.getElementById('showTruck1camera');

// console.log(modal);

// modal.addEventListener('shown.bs.modal', function () {
//     console.log('Modal shown!');
// });

// modal.addEventListener('hidden.bs.modal', function () {
//     console.log('Modal Hidden!');
// });


Camera1 = document.getElementById("Truck1Camera");


id=1

CameraWebsocket = new WebSocket(`ws://localhost:3000/camera1`);
CameraWebsocket.onopen = () => {
    console.log(`Camera${id} WebSocket connection established.`);
};

CameraWebsocket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    console.log(`Received Camera1${id} data`, data);
    Camera1.src = "data:image/png;base64," + data.image;
};

CameraWebsocket.onclose = () => {
    console.log(`Camera${id} WebSocket connection closed.`);
};
