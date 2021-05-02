window.onload=function(){
    var lat,long;
    var img=document.getElementById("image");
    var  location=document.querySelector(".location");
    var  state=document.querySelector(".state");
    var  temp=document.querySelector(".temperature");
    var  feel=document.querySelector(".feel");
    var  last=document.querySelector(".last-update");

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(pos => {
            lat=pos.coords.latitude;
            long=pos.coords.longitude

            let apikey="9da1d0dab6214ccd9a1114559210205";

            fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${lat},${long}`)
            .then(res => res.json())
            .then(data =>{
                console.log(data.current.condition.icon)
            img.src=data.current.condition.icon;
            location.innerHTML=`<i class="fas fa-map-marker-alt"></i>`+data.location.region;
            state.innerHTML=data.current.condition.text;
            temp.innerHTML=data.current.temp_c
            feel.innerHTML="feels like: "+data.current.feelslike_c;
            last.innerHTML="last updated: "+data.current.last_updated;
        })

            
        })
    }
}


