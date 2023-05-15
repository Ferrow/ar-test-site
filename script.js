const auto = document.querySelector("#auto")


function hotspotClickOne(hotspot) {
    
    document.querySelector("model-viewer").cameraOrbit = hotspot.dataset.orbit
    
    // console.log(document.querySelector(".Hotspot"))
    // console.log(hotspot.dataset.orbit)

    const modelV = document.querySelector("#auto")
    modelV.animationName = modelV.animationName === "Wave" ? "Dance" : "Wave"
    
    // const annotation = hotspot.querySelector(".HotspotAnnotation");

    // annotation.style.display =
    //   (annotation.style.display === "block") ? "none" : "block";
  }