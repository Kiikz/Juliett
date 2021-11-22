$(function() {
  //regular expression of only letters
  let alphaRegex = /^[a-zA-Z]*$/;

  let gameNames = [
    ["Shooter", ["Valorant", "Call of Duty", "Fortnite", "CSGO"]],
    ["Combat", ["UFC", "Mortal Combat", "Smite", "League of Legends"]],
    ["Other", ["Minecraft", "Super Smash Bros.", "Mario Cart"]]
  ];

  $("#noAlpha").keyup(function (e) {
    e.preventDefault();
    this.value = this.value.replace(/[^0-9\.]/g, "");
    $(this).next().text("remember, no alpha!");
  });

  $("#noNumbers").on("input", function () {
    let inputVal = $(this).val();

    if (alphaRegex.test(inputVal)) {
      $(this).removeClass("error").addClass("success");
      $(this).next().text("super cool!");
    } else {
      $(this).removeClass("success").addClass("error");
      $(this).next().text("ah, farts!");
    }
  });


    // test input value against regular expression
  //   if (alphaRegex.test(inputVal)) {
  //     $(this).removeClass("error").addClass("success");
  //     $(this).next().text("super cool!");
  //   } else {
  //     $(this).removeClass("success").addClass("error");
  //     $(this).next().text("ah, farts!");
  //   }
  });
  
  //when user selects style of game...load in names from array
  $("#gameKind").on("change", function (e) {
    //enables the game name dropdown
    $("#gameName").prop("disabled", false);

    let inputVal = this.value;


    //loop though array of game names
    $.each(gameNames, function(key, value) {
      //match game name to user selected
      if (inputVal === value[0]) {
        $.each(value, function (nestKey, nestValue) {

          switch (nestKey) {
            case 0:
              $("label[for=gameName]").text(nestValue);
              $("#gameName").empty();
              $("#gameName").append(
                $("<option>").text(`select a ${nestValue} `)
              );
              break;
            case 1:
              $.each(nestValue, function (nameKey, nameValue) {
                console.log(nameKey, nameValue);

                $("#gameName").append(
                  $("<option>").val(nameValue).text(nameValue)
                );
              });
              break;
          }
        });
      }
    });
  });

  // end of doc ready f/n

