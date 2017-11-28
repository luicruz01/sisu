$(function() {
    var countries = {
      "Mexico": {
        "Ciudad de México": ["Miguel Hidalgo", "Cuahutemoc"],
        "Monterrey": ["Monterrey", "Apodaca"]
      },
      "Estados Unidos": {
        "Ohio": ["Akron", "Athens"],
        "Texas": ["Addison", "Bailey"]
      },
      "Canada": {
        "Manitoba": ["Brandon", "Bauphin"],
        "Alberta": ["Airdrie", "Brooks"]
      }
    };
    function setCountry(){
        $.each( countries, function( key, value ) {
          $('#selectCountry').append("<option>"+key+"</option>");
        });
    }

    var country;
    var state;
    var city;

    setCountry();

    $('#selectCountry').click(function() {
      cleanValues();
      if ($(this).val() != "Selecciona un valor") {
        country = $(this).val();
        $.each( countries[country], function( key, value ) {
          $('#selectState').append("<option>"+key+"</option>");
        });
      }else {
        country= undefined;
      }

    });

    $('#selectState').click(function() {
      cleanCities();
      if ($(this).val() != "Selecciona un valor") {
        state = $(this).val();
        $.each( countries[country][state], function( key, value ) {
          $('#selectCity').append("<option>"+value+"</option>");
        });
      }else{
        state= undefined;
      }
    });

    $('#selectCity').click(function() {
      if ($(this).val() != "Selecciona un valor") {
        city = $(this).val();
      }else{
        city = undefined;
      }
    });

    function cleanValues(){
      $('#selectState').html("<option>Selecciona un valor</option>");
      $('#selectCity').html("<option>Selecciona un valor</option>");
      state= undefined;
      city = undefined;
    }

    function cleanCities(){
      $('#selectCity').html("<option>Selecciona un valor</option>");
      city = undefined;
    }

});
