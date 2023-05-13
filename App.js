import React from "react";
import "./styles.css";
import Spider from "./img/spider.glb";
import SpiderTwo from "./img/spider.usdz";

export default function App() {
  
  // const btn_one = document.getElementById("one");
  // const btn_two = document.getElementById("two");
  // const btn_three = document.getElementById("three");
  // function hotspotClickOne() {
  //   btn_one.style.display = btn_one.style.display === "none" ? "block" : "none";
  //   // const annotation = document.querySelector(".HotspotAnnotation");

  //   // annotation.style.display =
  //   //   annotation.style.display === "none" ? "block" : "none";
  // }

  function toggleDivOne () {
    console.log(document.querySelector(".btnone").dataset)
    // const modelViewer = document.querySelector("#mdl-viewer");
    console.log(document.querySelector("button"))
    
    const modelViewer2 = document.querySelector("#mdl-viewer");

    const annClicked = () => {
      let dataset = document.querySelector(".btnone").dataset
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.camerOrbit = dataset.orbit;
      modelViewer2.fieldOfView = "45deg";
    }

    modelViewer2.querySelector(".btnone").addEventListener("click", () => annClicked())
    

    document.getElementById("one").style.display =
      document.getElementById("one").style.display === "block"
        ? "none"
        : "block";
  };

  const toggleDivTwo = () => {

    const modelViewer2 = document.querySelector("#mdl-viewer");

    const annClicked = () => {
      let dataset = document.querySelector(".btntwo").dataset
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.camerOrbit = dataset.orbit;
      modelViewer2.fieldOfView = "45deg";
    }

    modelViewer2.querySelector(".btntwo").addEventListener("click", () => annClicked())

    document.getElementById("two").style.display =
      document.getElementById("two").style.display === "block"
        ? "none"
        : "block";
  };

  const toggleDivThree = () => {

    const modelViewer2 = document.querySelector("#mdl-viewer");

    const annClicked = () => {
      let dataset = document.querySelector(".btnthree").dataset
      modelViewer2.cameraTarget = dataset.target;
      modelViewer2.camerOrbit = dataset.orbit;
      modelViewer2.fieldOfView = "45deg";
    }

    modelViewer2.querySelector(".btnthree").addEventListener("click", () => annClicked())

    document.getElementById("three").style.display =
      document.getElementById("three").style.display === "block"
        ? "none"
        : "block";
  };

  return (
    <div className="main"> 
      <model-viewer
        id="mdl-viewer"
        src={Spider}
        ios-src={SpiderTwo}
        ar
        ar-modes="webxr scene-viewer quick-look"
        camera-controls
        poster="poster.webp"
        shadow-intensity="1"
        min-camera-orbit="auto 0deg auto"
			  max-camera-orbit="auto 95deg auto"
        
        // camera-orbit="-80.142746deg 68.967deg 4.179899m" for wheel
        camera-orbit="-80.142746deg 68.967deg 4.179899m"
        camera-target="-0.003m 0.0722m 0.0391m"
        field-of-view="45deg"
        min-field-of-view="25deg"
        max-field-of-view="45deg"
        interpolation-decay="200"
        // min-camera-orbit="auto auto 5%"
        
      >
        <button
          onClick={toggleDivOne}
          className="Hotspot btnone"
          slot="hotspot-1"
          data-position="-0.8500001020729542m 0.3178600066588704m 0.01661717161210774m"
          data-normal="-1m 0m 0m"
          data-orbit="3.711166deg 92.3035deg 0.04335197m"
          data-target="-0.8500001020729542m 0.3178600066588704m 0.01661717161210774m"
          data-visibility-attribute="visible"
        >
          <div id="one" className="HotspotAnnotation">
            Kolo
          </div>
        </button>
        <button
          onClick={toggleDivTwo}
          className="Hotspot btntwo"
          slot="hotspot-2"
          data-position="0.3550827511833008m 0.8008259433135221m -0.9390574989169099m"
          data-normal="-2.3620227400536518e-8m 0.3420198146879432m -0.9396927404001931m"
          data-target="0.3550827511833008m 0.8008259433135221m -0.9390574989169099m"
          data-visibility-attribute="visible"
        >
          <div id="two" className="HotspotAnnotation">
            Volant
          </div>
        </button>
        <button
          onClick={toggleDivThree}
          className="Hotspot btnthree"
          slot="hotspot-3"
          data-position="0.6447977184926472m 0.7056154734592561m -3.244729588912417m"
          data-normal="8.590403491008491e-7m 0.2708313689417229m -0.9626268070215033m"
          data-visibility-attribute="visible"
        >
          <div id="three" className="HotspotAnnotation">
            Svetlo
          </div>
        </button>
        <div className="progress-bar hide" slot="progress-bar">
          <div className="update-bar"></div>
        </div>
        <button slot="ar-button" id="ar-button" className="ar-btn">
          View in your space
        </button>
        <div id="ar-prompt">
          <img
            src="https://modelviewer.dev/shared-assets/icons/hand.png"
            alt=""
          />
        </div>
      </model-viewer>


      {/* <model-viewer id="hotspot-camera-view-demo" src={Spider} alt="Thor and the Midgard Serpent" ios-src={SpiderTwo} camera-controls touch-action="none" camera-orbit="-8.142746deg 68.967deg 0.6179899m" camera-target="-0.003m 0.0722m 0.0391m" field-of-view="45deg" min-field-of-view="25deg" max-field-of-view="45deg" interpolation-decay="200" min-camera-orbit="auto auto 5%" poster="../../assets/SketchfabModels/ThorAndTheMidgardSerpent.webp" ar ar-modes="webxr">
  <button class="view-button" slot="hotspot-0" data-position="-0.0569m 0.0969m -0.1398m" data-normal="-0.5829775m 0.2863482m -0.7603565m" data-orbit="-50.94862deg 84.56856deg 0.06545582m" data-target="-0.04384604m 0.07348397m -0.1213202m">
    The Fighters
  </button>      
  <button class="view-button" slot="hotspot-1" data-position="-0.1997m 0.11766m 0.0056m" data-normal="-0.4421014m 0.04410423m 0.8958802m" data-orbit="3.711166deg 92.3035deg 0.04335197m" data-target="-0.1879433m 0.1157161m -0.01563221m">
    Hold Tight!
  </button>      
  <button class="view-button" slot="hotspot-2" data-position="0.0608m 0.0566m 0.0605m" data-normal="0.2040984m 0.7985359m -0.56629m" data-orbit="42.72974deg 84.74043deg 0.07104211m" data-target="0.0757959m 0.04128428m 0.07109568m">
    The Encounter
  </button>      
  <button class="view-button" slot="hotspot-3" data-position="0.1989m 0.16711m -0.0749m" data-normal="0.7045857m 0.1997957m -0.6809117m" data-orbit="-40.11996deg 88.17818deg 0.07090651m" data-target="0.2011831m 0.1398312m -0.07917573m">
    Catapult
  </button>      
  <button class="view-button" slot="hotspot-4" data-position="0.0677m 0.18906m -0.0158m" data-normal="-0.008245394m 0.6207898m 0.7839338m" data-orbit="-118.8446deg 98.83521deg 0.06m" data-target="0.06528695m 0.1753406m -0.01964653m">
    Thunder and Lightning
  </button>      
  <button class="view-button" slot="hotspot-5" data-position="-0.1418m -0.041m 0.174m" data-normal="-0.4924125m 0.4698265m 0.7326617m" data-orbit="-2.305313deg 110.1798deg 0.04504082m" data-target="-0.1151219m -0.04192762m 0.1523764m">
    Knock Knock
  </button>     
  <button class="view-button" slot="hotspot-6" data-position="0.08414419m 0.134m -0.215m" data-normal="0.03777227m 0.06876653m -0.9969176m" data-orbit="-37.54149deg 82.16209deg 0.0468692m" data-target="0.08566038m 0.1249514m -0.1939646m">
    Lucky Shot
  </button>      
  <button class="view-button" slot="hotspot-7" data-position="0.14598m 0.03177m -0.05945886m" data-normal="-0.9392524m 0.2397608m -0.2456009m" data-orbit="-142.3926deg 86.45934deg 0.06213665m" data-target="0.1519967m 0.01904771m -0.05945886m">
    Get Away!
  </button>      
  <button class="view-button" slot="hotspot-8" data-position="0.0094m 0.0894m -0.15103m" data-normal="-0.3878782m 0.4957891m -0.7770094m" data-orbit="-118.6729deg 117.571deg 0.03905975m" data-target="0.007600758m 0.06771782m -0.1386167m">
    The Jump
  </button>      
  <button class="view-button" slot="hotspot-9" data-position="-0.0658m 0.1786m -0.0183m" data-normal="0.7857152m 0.4059967m 0.46671m" data-orbit="53.28236deg 95.91318deg 0.1102844m" data-target="-0.07579391m 0.1393538m -0.00851791m">
    The Beast
  </button>     
  <button class="view-button" slot="hotspot-10" data-position="0.02610224m 0.01458751m -0.004978945m" data-normal="-0.602551m 0.7856147m -0.1405055m" data-orbit="-78.89725deg 77.17752deg 0.08451112m" data-target="0.02610223m 0.0145875m -0.004978945m">
    Treasure
  </button>
  <button class="view-button" slot="hotspot-11" data-position="-0.1053838m 0.01610652m 0.1076345m" data-normal="-0.624763m 0.5176854m 0.5845283m" data-orbit="10.89188deg 119.9775deg 0.03543022m" data-target="-0.1053838m 0.01610652m 0.1076345m">
    Desperation
  </button>
</model-viewer> */}



    </div>
  );
}
