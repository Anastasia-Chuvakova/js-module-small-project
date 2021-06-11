const imageModule = (function () {
  return {
    //this is the images object we are looping
    carImages: {
      car1: "url will be here",
      car2: "url will be here",
      car3: "url will be here",
      car4: "url will be here",
      car5: "url will be here",
      car6: "url will be here",
      car7: "url will be here",
      car8: "url will be here",
    },

    //this method to insert img

    insertImages: function () {
      const myClass = "." + arguments[0];
      const imagesContainer = document.querySelectorAll(myClass);
      let output = '<div class="row ">';

      //the for loop below is specifically to loop through the objects only
      for (let key in this.carImages) {
        output += '<div class="col-xs-6 col-sm-5 col-md-4 ">';
        output += '<a class="  thumbnail" href="' + this.carImages[key] + '">';
        output +=
          '<img class="img-responsive  " src="images/' +
          key +
          ".jpg" +
          '" alt="picture" >';
        output += "</a>";
        output += "</div>";

        //console.log(output);
      }
      for (let i = 0; i < imagesContainer.length; i++) {
        imagesContainer[i].innerHTML = output;
      }

      output += "</div>";
    },
  };
})();
