import { useState ,useEffect} from 'react';

// icons
import SettingsIcon from '@material-ui/icons/Settings';
import WbCloudyIcon from '@material-ui/icons/WbCloudy';

import MenuIcon from '@material-ui/icons/Menu';

const Weather=()=>{

const [city,newCity]=useState();
const [input,newInput]=useState("chandigarh");
const[weather,newWeather]=useState();
const[result,newResult]=useState("chandigarh");
const [temp,newTemp]=useState();
const [temps,newTemps]=useState();
const [cityn,newCityn]=useState();
const [country,newCountry]=useState();

const day=new Date().toLocaleDateString;


useEffect(()=>{
    const fetchapi=async()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${result}&units=metric&appid=81e9139aee341f35934fa3d450254c2f`;

        const response=await fetch(url);
const jasondata=await response.json();
console.log(jasondata);
        newWeather(jasondata.weather[0].main);
        newCity(jasondata)
        newTemp(jasondata.main.temp);
        newCityn(jasondata.name);
        newCountry(jasondata.sys.country);
        newTemps(jasondata.weather[0].main);
    }
    
    fetchapi();
},[result]);


//day
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

//month
var dd = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var nn = month[dd.getMonth()];

//date
var ddd = new Date();
var dddd=ddd.getDate();
    return(
        <>
           <div className="searchbar">
        <input type="text" value={input} placeholder="Enter City Name" onChange={
            (e)=>{
                newInput(e.target.value)
            }
        } />
        <button onClick={
            ()=>{
                newResult(input)
           
            }
        }>Click Here</button>
        </div>
<div className="main">
 
<div className="Topdetails">
<MenuIcon className="menuicons"/>
<h4>{input}</h4>
<SettingsIcon className="settingicon"/>
</div>


    <div className="tops">
<h2>{cityn}, {country} </h2>
<h3>{n} , {nn} {dddd} {day}</h3>
</div>
<div className="deg">
{temp}°
</div>



<div className="status">

{temps=='Clouds'?(<i className="fa fa-cloud" aria-hidden="true"></i>):temps=='Clear'?(<i className="fa fa-sun-o" aria-hidden="true"></i>):temps=='Rain'?(<i className="fas fa-cloud-rain" aria-hidden="true"></i>):(<i class="fas fa-cloud-sun"></i>)}

<h1>

{temps}

</h1>
</div>

<div className="weakly">
<h2>Weekly forcaste</h2>
   <p>Available Soon</p> 
</div>

 


     </div>
        </>
      
    )
}

export default Weather;