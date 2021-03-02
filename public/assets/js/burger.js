$(document).ready(() => {

    $(function () {
        $(".create-form").on("submit", function (event) {
          event.preventDefault();
      
          let newBurger = {
            burger_name: $("#burg")
              .val()
              .trim(),
            devoured: 0
          };
      
          $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
          }).then(function () {
            console.log("Added new burger");
            location.reload();
          });
        });
      
        $(".devour").on("click", function (event) {
          event.preventDefault();
      
          let id = $(this).data("id");
          let newDevouredState = {
            devoured: 1
          };
      
          $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
          }).then(function () {
            console.log("Burger devoured");
            location.reload();
          });
        });
      
      });

});