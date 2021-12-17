import moment from 'moment';
import React from 'react';
import { Card } from 'semantic-ui-react';
import '../style.css';
import temperature from '../images/temperature.png';
import visibility from '../images/visibility.png';
import humidity from '../images/humidity.png';
import windspeed from '../images/windspeed.png';
import sunrise from '../images/sunrise.png';
import sunset from '../images/sunset.png';
import desc from '../images/desc.png';
import calender from '../images/calender.png';


const CardExampleCard = ({weatherData}) => (
    
  <Card className="cardmain">
    <Card.Content>
      <Card.Header className="header"> {weatherData.name}, {weatherData.sys.country}</Card.Header>
      <br></br>
      <Card.Meta>
      
        <span className='day'><img src={calender} alt="Calender" className="icon" /> {moment().format('dddd')}, {moment().format('LL')} </span>
        
      </Card.Meta>
      <hr></hr>
      <br></br>
      <div className="flex">
      
        
      
      <p className="temp"><img src={temperature} alt="Temperature" className="icon" />Temperature : {weatherData.main.temp} &deg; C</p>
      <p className="temp"> <img src={visibility} alt="Visibility" className="icon" />Visibility : {weatherData.visibility}</p>
      </div>
      <div className="flex">
      <p className="temp"><img src={humidity} alt="Humidity" className="icon" />Humidity : {weatherData.main.humidity}</p>
      <p className="temp"><img src={windspeed} alt="Windspeed" className="icon" />Wind Speed : {weatherData.wind.speed}</p>
      </div>
      <div className="flex">
      <p className="sunrise-sunset"><img src={sunrise} alt="Sunrise" className="icon" />Sunrise : {new Date(weatherData.sys.sunrise*1000).toLocaleTimeString('en-IN')}</p>
      <p className ="sunrise-sunset"><img src={sunset} alt="Sunset" className="icon" />Sunset : {new Date(weatherData.sys.sunset*1000).toLocaleTimeString('en-IN')}</p>
      </div>  
      <p className="description">Description : {weatherData.weather[0].description}</p>
       
    </Card.Content>
  </Card>
)

export default CardExampleCard
