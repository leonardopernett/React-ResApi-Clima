    import React, { Fragment, useState } from 'react';

export function WeatherForm(props){
    
        const [datos, setDatos]= useState({
        city:'', 
        country:''
    })

    const  onSubmit = (e)=>{
        e.preventDefault();
        props.getWeather(datos);
        e.target.reset();
    }

    const onInputChange = (e)=>{
          setDatos({
              ...datos,
                  [e.target.name]:e.target.value
              })
    }

     return(
         <Fragment>
            <div className="card">
                <div className="card-header">
                    weather
                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="text" name="city" onChange={onInputChange} className="form-control" placeholder="city" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="country" onChange={onInputChange} className="form-control" placeholder="country" />
                        </div>
                        <button className="btn btn-primary btn-block">
                            send
                        </button>
                    </form>
                </div>
            </div>
         </Fragment>
     )
}