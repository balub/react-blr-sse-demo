import React, { useState, useEffect } from "react";

import DisplayValue from "./DisplayValue";
import GraphComponents from "./GraphComponents";

function Home() {
  const [sensorData, setSensorData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const sse = new EventSource("http://127.0.0.1:5000/stream");
    function getRealtimeData(data) {
      console.log(data);
      setSensorData(data);
      setIsDataFetched(true);
    }
    sse.onmessage = (e) => getRealtimeData(JSON.parse(e.data));
    sse.onerror = () => {
      sse.close();
    };
    return () => {
      sse.close();
      setIsDataFetched(false);
    };
  }, []);
  if (isDataFetched) {
    return (
      <div>
        <h1>SSE DEMO</h1>
        {/* <h2>{sensorData[sensorData.length - 1].light}</h2> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <DisplayValue
            value={sensorData[sensorData.length - 1].light}
            title={"Light"}
            unit={"lux"}
          />
          <DisplayValue
            value={sensorData[sensorData.length - 1].air_temp}
            title={"Air Temperature"}
            unit={"°C"}
          />
          <DisplayValue
            value={sensorData[sensorData.length - 1].air_hum}
            title={"Air humidity"}
            unit={"%"}
          />
        </div>
        <div
          style={{
            marginTop: 24,
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <GraphComponents data={sensorData} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>WAITING TO CONNECT TO SERVER...</h1>
      </div>
    );
  }
}

export default Home;
