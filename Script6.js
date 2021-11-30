var request= new XMLHttpRequest();

request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);

request.send();

request.onload=function(){
   
    var data=JSON.parse(request.response);
    console.log(data);
data.forEach(ele=>console.log(`${ele.name}-${ele.latlng[0]},${ele.latlng[1]}`));

}
function wd(name,lat,lon) {
// console.log(name);
// console.log(lat);
// console.log(lon);
 var url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3aa48774e1e455298eadfaddae929cf2`
var request=new XMLHttpRequest();
request.open('GET',url,true);
request.send();
request.onload=function(){
   
    var data=JSON.parse(request.response);
    console.log(`${name}-${data.main.temp}`);

}

}