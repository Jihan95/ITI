let btnAbout = $(".about");
let btnGallery = $(".gallery");
let btnServices = $(".services");
let btnComplain = $(".complain");
let pStory = $(".story");

let leftArrow = $(".left-arrow");
let rightArrow = $(".right-arrow");
let imageSection = $(".flex-images");
let currentImage = $(".img");

let complainForm = $(".complain-form");
let sendButton = $("#send");
let info = $(".info");
let backButton= $("#back");

$(document).ready(function() {
    btnAbout.on("click", () => {
        imageSection.hide();

        complainForm.hide();

        info.hide();

        $("li").each(function () {
            $(this).hide();
        });

        pStory.toggle(500);
    });
    
    btnGallery.on("click", () => {
        pStory.hide();

        $("li").each(function () {
            $(this).hide();
        });

        complainForm.hide();

        info.hide();

        imageSection.toggle(500);
        const images = [
            "images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/4.jpg",
            "images/5.jpg",
            "images/6.jpg",
            "images/7.jpg",
            "images/8.jpg"
        ];
        
        let currentIndex = 0;

        function updateImage() {
            currentImage.fadeOut(500, function() {
                $(this).attr('src', images[currentIndex]);
                $(this).fadeIn(500);
            })
        }

        leftArrow.on("click", function(){
            if (currentIndex !== 0) {
                currentIndex -= 1;
                updateImage();
            }
        });

        rightArrow.on("click", function() {
            if (currentIndex !== images.length - 1) {
                currentIndex += 1;
                updateImage();
            }
        });
    });
    
    btnServices.on("click", () => {
        pStory.hide();

        imageSection.hide();

        complainForm.hide();

        info.hide();

        $('li:eq(0)').slideDown(500, () => {
            $('li:eq(1)') .slideDown(500, () => {
                $('li:eq(2)') .slideDown(500)
            });
        });
    });
    
    btnComplain.on("click", () => {
        pStory.hide();

        imageSection.hide();

        $("li").each(function () {
            $(this).hide();
        });

        complainForm.show(500);
        info.hide();
    });

    sendButton.on("click", (e) => {
        e.preventDefault();
        let data = [];
        $(".form-input").each(function(index) {
            data[index] = $(this).val();
        });

        let infoContent = `
        <p><strong> Your Name:</strong> ${data[0]}</p>
        <br>
        <p><strong> Your Email:</strong> ${data[1]}</p>
        <br>
        <p><strong> Your Phone:</strong> ${data[2]}</p>
        <br>
        <p><strong> Your Complain:</strong> ${data[3]}</p>
        <br>
        `;
        
        console.log($(".content .info").length);
        $("div div.content").html(infoContent);
        complainForm.hide();
        info.show();
    })

    backButton.on("click", function() {
        complainForm.show();
        info.hide();
    });

});
