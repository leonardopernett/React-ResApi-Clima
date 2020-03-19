import React, { Fragment } from 'react';

export function WeatherInfo(props){
    
    setTimeout(() => {
        if(document.querySelector('.alert')){
            document.querySelector('.alert').remove();
        }
    }, 4000);

     return(
         <Fragment>
              {
                  props.state.error &&
                      <div className="alert alert-danger my-2">
                          <p>{props.state.error}</p>
                      </div>
                      
                      
               }   
                {  props.state.temperature ? 
                  <div className="card mt-5">
                      <div className="card-body">
                          <p> Temperature: {props.state.temperature}</p>
                          <p> description: {props.state.description}</p>
                          <p> humidity: {props.state.humidity}</p>
                          <p> longitude: {props.state.longitude}</p>
                          <p> latitude: {props.state.latitude}</p>
                      </div>
                  </div>
                  :
                 ""

              }
         </Fragment>
     )
}