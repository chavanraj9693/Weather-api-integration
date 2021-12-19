var apiKey = "147096087db36ddef0578cc51664135a";

$(document).ready(function() {
    

    document.getElementById("search").addEventListener("click", function() {

      var city = "";
      city = document.getElementById("cname").value;

      if (city === "") {
        city = "Mumbai";
      }

      var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + apiKey + "&units=metric";

      //ajax is a function to perform asynchronous HTTP requests

      $.ajax({
        url: apiUrl,
        context: document.body
      }).done(function( data ) {
        console.log(data);
        // use # for id
        $(".cityname").html(data.name);
        $(".temp").html(data.main.temp);
        // $( this ).addClass( "done" );
      });


    });

    
});