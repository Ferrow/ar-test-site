const btn = document.querySelector("#btn")

function hotspotClickOne() {
    // btn.style.display = btn.style.display === "none" ? "block" : "none";
    const annotation = document.querySelector(".HotspotAnnotation");

    annotation.style.display =
      annotation.style.display === "block" ? "none" : "block";
  }

// btn.addEventListener("click", () => {
//     console.log(btn.style.display)
// })

btn.addEventListener("click", hotspotClickOne)