RedTrack = document.getElementById("RedTrack");
BlueTrack = document.getElementById("BlueTrack");
GreenTrack = document.getElementById("GreenTrack");
YellowTrack = document.getElementById("YellowTrack");
AllTracks = document.getElementById("AllTracks");

Tracks = [RedTrack, BlueTrack, GreenTrack, YellowTrack];

AllTracks.addEventListener("change",function () { 
  console.log("AllTracks");
  if (AllTracks.checked) {
     for (let i = 0; i < Tracks.length; i++) {
       Tracks[i].setAttribute("visibility", "visible");
     }
  } else {
    for (let i = 0; i < Tracks.length; i++) {
       Tracks[i].setAttribute("visibility", "hidden");
     }
  }
 });

 function showThisTrack(trackID) {
    console.log("TrackID: " + trackID);
    if(document.getElementById("ShowTrack" + trackID).checked)
    Tracks[trackID - 1].setAttribute("visibility", "visible");
  else
    Tracks[trackID - 1].setAttribute("visibility", "hidden");
}