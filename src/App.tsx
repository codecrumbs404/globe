import { useEffect } from "react";
import { globeConfig } from "./utils/config.globe";
import { World } from "./utils/globe";

function App() {
  useEffect(() => {
    if (!document.getElementById("globe-canvas")) {
      const container = document.querySelector("#scene-container");
      const world = new World(container as Element, undefined, globeConfig);
      world.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
     <h2
    style={{
        fontSize: '1.575rem', // Small text size
        textAlign: 'center', // Center text horizontally
        color: '#ffffff', // White color
        fontWeight: 400, // Light font weight
    }}
><span>Available To Connect Everywhere</span>
</h2>
      <div
        id="scene-container"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    </>
  );
}

export default App;
