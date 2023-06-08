const auto = document.querySelector("#auto")


function hotspotClickOne(hotspot) {
    
    document.querySelector("model-viewer").cameraOrbit = hotspot.dataset.orbit
    
    // console.log(document.querySelector(".Hotspot"))
    // console.log(hotspot.dataset.orbit)
    let hotSlot = hotspot.slot
    // console.log(hotSlot)



    const modelV = document.querySelector("#auto")

    if (hotSlot === "hotspot-1"){
      // console.log(self)
      modelV.animationName = "Kabbum.001Action"
      modelV.play()
      console.log(modelV)
    }

    if (hotSlot === "hotspot-2"){
      // console.log(self)
      modelV.animationName = "Kabbum.001Action"
      modelV.pause()
    } 
    

    // modelV.animationName = modelV.animationName === "Wave" ? "Dance" : "Wave"
    
    // const annotation = hotspot.querySelector(".HotspotAnnotation");

    // annotation.style.display =
    //   (annotation.style.display === "block") ? "none" : "block";
  }