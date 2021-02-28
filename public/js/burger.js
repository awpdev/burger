$(document).ready(() => {
  // this event listener is for when the user clicks the devour button
  $(".devour").on("click", event => {
      let id = event.target.getAttribute("data-id");
      let newDevouredState = {
          devoured: 1
      };
      // send the PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
      }).then(() => { // reload the page to get the updated list
          location.reload();
      }).catch((e) => {
          console.log(e)
      });
  });
  // this event listener is for when the user adds a new burger
  $(".create-form").on("submit", event => {
      // make sure to preventDefault on a submit event.
      event.preventDefault();
      const userInput = $("#burger-name").val().trim();
      // check if the user entered an empty string
      if (userInput === "") {
          return alert("User entered an empty input.");
      }
      let newBurger = {
          burger_name: capLetters(userInput),
      };
      // send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(() => { // reload the page to get the updated list
          location.reload();
      }).catch((e) => {
          console.log(e)
      });
  });

  // this function capitalizes the first letter in each word of a string
  const capLetters = str => {
      let arrayStr = str.split(" ");
      let capLetter = "";
      let newString = "";
      for (let i = 0; i < arrayStr.length; i++) {
          capLetter = arrayStr[i][0].toUpperCase();
          newString += capLetter + arrayStr[i].slice(1, arrayStr[i].length).toLowerCase() + " ";
      }
      return newString.trim();
  }
});