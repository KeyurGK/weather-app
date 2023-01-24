const contentEl=document.getElementById('content');
const searchEl=document.getElementById('search');
const searchBtn=document.getElementById('search-button');
const locationEl=document.getElementById('location');
const APIURL = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4d100bb424mshaaaecf4bd1066f5p1b5cb0jsn7cc8632e6b51',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
searchBtn.addEventListener('click',(e)=>
{
    e.preventDefault();
    let location = searchEl.value;
    if(location){
        getWeather(location);
    }
    else{
        alert('Please enter the location!');
    }
});

async function getWeather(location){
    const resp=await fetch(APIURL+location,options);
    const respData=await resp.json();
    addLocation(respData,location);
    console.log(respData);
}

function addLocation(locationData,location){
    contentHTML = `
     <div class="box-1">
        <div class="humidity">
            <p>
                Humidity<br><br>
                ${locationData.humidity}
            </p>
        </div>    
        <div class="min-temp">
            <p>
            Minimum Temperature<br><br>
                ${locationData.min_temp} °c
            </p>
        </div>
        <div class="temp">
            <p>
            Temperature<br><br>
                ${locationData.temp} °c
            </p>
        </div>
        <div class="max-temp">
            <p>
            Maximum Temperatue<br><br>
                ${locationData.max_temp} °c
            </p>
        </div>
        <div class="wind-speed">
            <p>
            Wind Speed<br><br>
                ${locationData.wind_speed} knots
            </p>
        </div>
        </div>
    <div class='box-2'>
        <div class='location'>
            <p>${location}</p>
        </div>
    </div>`
    contentEl.innerHTML = contentHTML;
}


// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
// 	.then(response => response.json())
// 	.catch(err => console.error(err));

// function add(){
// contentEl.innerHTML= 'response';
// };

// add();