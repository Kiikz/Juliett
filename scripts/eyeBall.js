$('#btnLoadData').click(function() {
  console.log("clicked");

  //let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

  let jsonURL = "demo.json";

  // let jsonURL = "https://barrycumbie.github.io/376-india-lab/demo.json";

  $.ajax({
      url: jsonURL,
      dataType: "json",
      success: function(data) {
        
        console.log(data.fullName);
            
        $("#fname").val(data.fullName);

        $("#email").val(data.eMail);

        $("#pword").val(data.passWord);

        $("#noAlpha").val(data.phoneNumber);

        $("#date").val(data.date);

        $("#gameKind").val(data.gamekind);

        $("#radio_2").val(data.radio_2);
        

          
          $.each(data, function (key, val) {
            
            console.log(key, val);

            $(`#${key}`).val(val);

              
          });
      }
  });
});


