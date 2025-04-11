$(document).ready(function () {
    $("#run-button").click(function (){
        $("div").animate({
            width: "500px",
            opacity: 0.4,
            "font-size": "24px",
            borderSize: "5px",
            marginLeft: "400px"
        }, 1000);

    });

    $("#return-button").click(function () {
        $("div").animate({
          width: "100px",
          opacity: 1,
          borderSize: "1px",
          "font-size": "16px",
          marginLeft: "0px"
        }, 1000);
      });
})