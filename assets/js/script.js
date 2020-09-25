$("#projectsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 3000);
});

$("#skillsnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 3000);
});

$("#contactnav").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 3000);
});

$("#totop").click(function() {
        $('html, body').animate({
            scrollTop: $("#title").offset().top
        }, 3000);
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

// clear selection button fo contact section
function clearSelect(){
    let placeholderName = document.getElementById("name").placeholder;
    let placeholderMail = document.getElementById("email").placeholder;
    let placeholderSubject = document.getElementById("subject").placeholder;
    let placeholderMessage = document.getElementById("msg").placeholder;
    document.getElementById("name").value = placeholderName;
    document.getElementById("email").value = placeholderMail;
    document.getElementById("subject").value = placeholderSubject;
    document.getElementById("msg").value = placeholderMessage;
}

function confirmation(){
    if (document.getElementById("name").value == ""){
        document.getElementById("confirm").innerHTML = "Please fill in Name details ";
    }
    else if (document.getElementById("email").value == ""){
        document.getElementById("confirm").innerHTML = "Please fill in E-mail details ";
    }
    else if (document.getElementById("subject").value == ""){
        document.getElementById("confirm").innerHTML = "Please fill in Subject details ";
    }
    else if (document.getElementById("msg").value == ""){
        document.getElementById("confirm").innerHTML = "Please fill in Message details ";
    }
    else{
    document.getElementById("confirm").innerHTML = "Message successfully delivered";
    }
}

function clearConfirmation(){
    document.getElementById("confirm").innerHTML = null 
}



