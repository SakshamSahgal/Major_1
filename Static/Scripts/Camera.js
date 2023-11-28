
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

function uint8ArrayToBase64(uint8Array) {
    let binary = '';
    uint8Array.forEach((byte) => {
      binary += String.fromCharCode(byte);
    });
    return btoa(binary);
  }

CameraWebsocket.onmessage = (event) => {
    let data = JSON.parse(event.data);
    console.log(`Received Camera1${id} data`, data);
    //convert data.image (which is a array representing image) to base 64
    console.log(data.image);
    let byteValues = data.image.match(/\d+/g).map(Number);

    // Convert the array of bytes to a Uint8Array
    let uint8Array = new Uint8Array(byteValues);
    console.log(uint8Array);
    let base64String = uint8ArrayToBase64(uint8Array);
    console.log(base64String);
    Camera1.src = `data:image/png;base64,${base64String}`;
};

CameraWebsocket.onclose = () => {
    console.log(`Camera${id} WebSocket connection closed.`);
};
