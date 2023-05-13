const auto = document.querySelector("#auto")


function hotspotClickOne(hotspot) {
    // auto.cameraOrbit = "80deg, 70deg, 4m"
    
    const annotation = hotspot.querySelector(".HotspotAnnotation");

    annotation.style.display =
      (annotation.style.display === "block") ? "none" : "block";
  }