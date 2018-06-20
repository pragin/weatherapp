
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


$(document).ready(function(){
  $.get("https://fcc-weather-api.glitch.me/api/current?lat=51.5567956&lon=0.0730634", function(response, status){
    if(status === "success"){
      $('#temperature').text( function() {
        //console.log(response);
        return Math.round(response.main.temp);
      });
      $('#icon').attr('src', 'https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04d.png?1499366020964');
      $('#weather-condtion').text(function() {
        console.log(response.weather[0].main);
        return response.weather[0].main;
      });

      $('#convert').click(function() {
        $('#temperature').text( function() {
          //console.log(response);
          return Math.round((response.main.temp * 1.8) + 32);
        });

      })



      console.log(response);


    }else{
      Alert("Network Error");
    }
  });

    $('#date-text').text(() => {
       return months[date.getMonth()] + " " + date.getFullYear();
     });

    $('#time-text').text(() => {
        return date.getHours() + ":" + date.getMinutes();
      });


});
