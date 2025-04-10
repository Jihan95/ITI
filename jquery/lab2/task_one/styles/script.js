$(document).ready(function () {
    $("#run-button").click(function (){
        $("div").animate({
            width: "300px",
            height: "50px",
            opacity: 0.4,
            "font-size": "*= 3",
            border: "0.5px",
            "margin-left": "1000px",
            "text-align": "center"
        }, 1000);

    });

    $("#return-button").click(function () {
        $("div").animate({
          width: "100px",
          height: "50px",
          opacity: 1,
          "margin-left": "0px",
          border: "2px",
          "text-align": "center"
        }, 1000);
      });
})