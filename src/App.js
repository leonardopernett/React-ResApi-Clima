import React, { Fragment , useState, useEffect} from 'react';
import {WeatherForm} from './component/WeatherForm' ;
import {api_key} from './key';
import { WeatherInfo } from './component/WeatherInfo';


export  function App() {

   const [state, setState] = useState(
      {
         temperature:'',
         description:'',
         humidity:'',
         longitude:'',
         latitude:'',
         error:null
      }
   )

    useEffect(() => {
       console.log(state)
    })
  

   const  getWeather = async(datos)=>{
      if(datos.city==="" && datos.country ===""){
         setState({
            ...state,
            error:'por favor llenar todos los campos'
         })
      }else{
         const URI=`http://api.openweathermap.org/data/2.5/weather?q=${datos.city},${datos.country}&appid=${api_key}&units=metric`;
         const res = await fetch(URI);
         const data = await res.json();
         setState({
            ...state,
            temperature:data.main.temp,
            description:data.weather[0].description,
            humidity:data.main.humidity,
            longitude:data.coord.lon,
            latitude:data.coord.lat
       })
      }
     
      
  }
  

      return(
         <Fragment>
            <div className="container p-4">
              <div className="row">
                 <div className="col-md-6">
                    <WeatherForm getWeather={getWeather}  />
                 </div>
                 <div className="col-md-6">
                    <WeatherInfo state={state}  />
                 </div>
              </div>
            </div>
         </Fragment>
     )
     
}
