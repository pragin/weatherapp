let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

$(function(){
  $('#date-text').text(() => {
       return months[date.getMonth()] + " " + date.getFullYear();
     });

     $('#time-text').text(() => {
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      });  
});
