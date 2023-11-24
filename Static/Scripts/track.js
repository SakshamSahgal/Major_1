
track1 = document.getElementById("tracks");

function showRedTrack(){
    // Draw a rectangle
    streamCtx.fillStyle = '#FF0000'; // Set fill color to red
    streamCtx.fillRect(50, 50, 100, 80); // (x, y, width, height)
}

track1.addEventListener("change", function(){
    if(track1.checked){
        console.log("Track 1 checked");
        backgroundImgSrc = "/tracksMap.png";
        RedrawBackground();
    }
    else
    {
        console.log("Track 1 button unchecked");
        backgroundImgSrc = "/map.png";
        RedrawBackground();
    }
})