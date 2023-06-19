const auto = document.querySelector("#auto")

// Handles loading the events for <model-viewer>'s slotted progress bar
// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');

  if (event.detail.totalProgress === 0) {
    progressBar.style.display = 'block';
    updatingBar.style.width = '0%';
  } else {
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;

    if (event.detail.totalProgress === 1) {
      setTimeout(() => {
        progressBar.style.display = 'none';
      }, 500);
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);


function hotspotClickOne(hotspot) {
    
    document.querySelector("model-viewer").cameraOrbit = hotspot.dataset.orbit
    
    // console.log(document.querySelector(".Hotspot"))
    // console.log(hotspot.dataset.orbit)
    let hotSlot = hotspot.slot
    // console.log(hotSlot)



    const modelV = document.querySelector("#auto")

    if (hotSlot === "hotspot-1"){
      // console.log(self)
      modelV.animationName = "54_14_baked"
      // modelV.play()
      console.log(modelV)
      if (navigator.userAgent.includes("Nexus")) {
        console.log("Je to Nexus phone.")
      }
      console.log(navigator.userAgent)
    }

    if (hotSlot === "hotspot-2"){
      // modelV.pause()
      modelV.animationName = "90_19_baked"
    } 

    
    

    // modelV.animationName = modelV.animationName === "Wave" ? "Dance" : "Wave"
    
    // const annotation = hotspot.querySelector(".HotspotAnnotation");

    // annotation.style.display =
    //   (annotation.style.display === "block") ? "none" : "block";
  }