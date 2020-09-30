function project(name, tech1, tech2, tech3, tech4, description){
    this.name = name;
    this.tech1 = tech1;
    this.tech2 = tech2;
    this.tech3 = tech3;
    this.tech4 = tech4;
    this.description = description;
}

let metallic = new project("Metallic AA's", "HTML", "CSS", "Bootstrap","Font Awesome", 
"This is a combination of four web pages for a fictional band called The Metallic AA's, The four pages showcase the band, availabe tour dates, available merchandise and a membership page.");
let countryInfo = new project("Country Info App", "Javascript", "HTML", "CSS","An interactive site that shows information, location and weather for any selected country");
let triathlon = new project("Triathlon Checklist", "Python", "Flask", "Mongo DB", "CSS", "A simple to use app that allows users to create, read, update and delete triathlon related information");
let mystery = new project("Mystery Shack", "Python", "Javascript", "Django", "AWS", "An early draft for an e-commerce store using the Django framework");
let santa = new project("Santa CV", "HTML", "Javascript", "CSS", "Bootstrap", "A site showcasing all the skills that Santa has to offer")

/*------
function info(project){
    document.getElementById("projpic").src = "assets/images/candle.jpg";
    document.getElementById("projectname").innerHTML = project.name;
    document.getElementById("projecttech1").innerHTML = project.tech1;
    document.getElementById("projecttech2").innerHTML = project.tech2;
    document.getElementById("projecttech3").innerHTML = project.tech3;
    document.getElementById("projecttech4").innerHTML = project.tech4;
}

function noInfo(){
    document.getElementById("projpic").src = "assets/images/purple.jpg"
    document.getElementById("projectname").innerHTML = null;
    document.getElementById("projecttech1").innerHTML = null;
    document.getElementById("projecttech2").innerHTML = null;
    document.getElementById("projecttech3").innerHTML = null;
    document.getElementById("projecttech4").innerHTML = null;
}
-------*/

function projectOne(metallic){
    //document.getElementById("metallicTitle").style.color = "rgb(255, 8, 0)";
    document.getElementById("metalProject1").innerHTML = metallic.tech1;
    document.getElementById("metalProject2").innerHTML = metallic.tech2;
    document.getElementById("metalProject3").innerHTML = metallic.tech3;
    document.getElementById("metalProject4").innerHTML = metallic.tech4; 
    document.getElementById("metalDescription").innerHTML = `This is a combination of four web pages for a fictional band called The Metallic AA's, The main technologies used were ${metallic.tech1}`; 
}
function clearMetallic(){
    //document.getElementById("metallicTitle").style.color = "rgb(206, 21, 181)";
    document.getElementById("metalProject1").innerHTML = null;
    document.getElementById("metalProject2").innerHTML = null;
    document.getElementById("metalProject3").innerHTML = null;
    document.getElementById("metalProject4").innerHTML = null; 
    document.getElementById("metalDescription").innerHTML = null; 
}


function projectTwo(countryInfo){
    document.getElementById("countryProject1").innerHTML = countryInfo.tech1;
    document.getElementById("countryProject2").innerHTML = countryInfo.tech2;
    document.getElementById("countryProject3").innerHTML = countryInfo.tech3;
    document.getElementById("countryProject4").innerHTML = countryInfo.tech4;  
}
function clearCountry(){
    document.getElementById("countryProject1").innerHTML = null;
    document.getElementById("countryProject2").innerHTML = null;
    document.getElementById("countryProject3").innerHTML = null;
    document.getElementById("countryProject4").innerHTML = null;  
}


function projectThree(triathlon){
    document.getElementById("triathlonProject1").innerHTML = triathlon.tech1;
    document.getElementById("triathlonProject2").innerHTML = triathlon.tech2;
    document.getElementById("triathlonProject3").innerHTML = triathlon.tech3;
    document.getElementById("triathlonProject4").innerHTML = triathlon.tech4;  
}
function clearTriathlon(){
    document.getElementById("triathlonProject1").innerHTML = null;
    document.getElementById("triathlonProject2").innerHTML = null;
    document.getElementById("triathlonProject3").innerHTML = null;
    document.getElementById("triathlonProject4").innerHTML = null;  
}


function projectFour(mystery){
    document.getElementById("mysteryProject1").innerHTML = mystery.tech1;
    document.getElementById("mysteryProject2").innerHTML = mystery.tech2;
    document.getElementById("mysteryProject3").innerHTML = mystery.tech3;
    document.getElementById("mysteryProject4").innerHTML = mystery.tech4;  
}
function clearMystery(){
    document.getElementById("mysteryProject1").innerHTML = null;
    document.getElementById("mysteryProject2").innerHTML = null;
    document.getElementById("mysteryProject3").innerHTML = null;
    document.getElementById("mysteryProject4").innerHTML = null;  
}


function projectFive(santa){
    document.getElementById("santaProject1").innerHTML = santa.tech1;
    document.getElementById("santaProject2").innerHTML = santa.tech2;
    document.getElementById("santaProject3").innerHTML = santa.tech3;
    document.getElementById("santaProject4").innerHTML = santa.tech4;  
}
function clearSanta(){
    document.getElementById("santaProject1").innerHTML = null;
    document.getElementById("santaProject2").innerHTML = null;
    document.getElementById("santaProject3").innerHTML = null;
    document.getElementById("santaProject4").innerHTML = null;  
}