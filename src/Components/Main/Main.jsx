import React, { useEffect, useState } from "react";
import Form from "../Form/Form";
import "./Main.scss";
const Main = () => {
  const [data, setData] = useState([]);
  const [city,setCity]=useState("")


  const apiKey = "66989ed4a88d043add999a66ea38409b";

  const getApi = async () => {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const resp = await data.json();
    setData(resp);
    console.log(resp);
  };
  useEffect(() => {
   getApi()
  }, []);



  const handleSubmit = (e) => {
  e.preventDefault();
    getApi()
    setCity("");

  };

 

  return (
    <div className="container " >
      <div className="text-center  div-form">
        <Form getApi={getApi} setCity={setCity} city={city}  handleSubmit={handleSubmit}/>
      </div>
        {data.name!=undefined&&
        <div className="main-info">
          <div className="text-center div-city">
            <h1>{data.name}</h1>
          </div>
          <div className="div-info-bottom">
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div className="div-temp-city">
                <p className="text-center parrafo-temp " style={{fontWeight:'800',fontSize:'30px'}}>{data.main?data.main.temp:null}°</p>
              </div>
              <div>
                <p className="text-center"  style={{fontWeight:'800',fontSize:'30px'}}>{data.weather?data.weather[0].description:null}</p>
              </div>
            </div>
  
            <div className="div-temps">
              <div className="d-flex" style={{flexDirection:'column',alignItems:'center'}}>
                <div>{data.main?data.main.temp_max:null}</div>
                <div>TempMax</div>
              </div>
              <div className="d-flex" style={{flexDirection:'column',alignItems:'center'}} >
                <div>{data.main?data.main.temp_min:null}</div>
                <div>tempMin</div>
              </div>
              <div className="d-flex" style={{flexDirection:'column',alignItems:'center'}}>
                <div>{data.main?data.main.humidity:null}</div>
                <div>Humidty</div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Main;
