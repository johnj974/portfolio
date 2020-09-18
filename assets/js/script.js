$("#projectsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projecTarget").offset().top
        }, 2000);
});

$("#skillsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 2000);
});

$("#contactnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 2000);
});

$("#totop").click(function() {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 2000);
});


function calender(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("date").innerHTML = `${day} ${months[month]} ${year}`;
}
calender();



