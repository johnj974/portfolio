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
    document.getElementById("metalDescription").innerHTML = `This is a combination of four web pages for a fictional band called The Metallic AA's,
     The main technologies used were ${metallic.tech1}, ${metallic.tech2}, ${metallic.tech3} and${metallic.tech4}`; 
}
function clearMetallic(){
    document.getElementById("metalDescription").innerHTML = null; 
}


function projectTwo(countryInfo){
    document.getElementById("countryDescription").innerHTML = `An interactive site that shows information, location and weather for any selected country, 
    The main technologies used were ${countryInfo.tech1}, ${countryInfo.tech2}, ${countryInfo.tech3}`
}
function clearCountry(){
    document.getElementById("countryDescription").innerHTML = null;  
}


function projectThree(triathlon){
    document.getElementById("triathlonDescription").innerHTML = `A simple to use app that allows users to create, read, update and delete triathlon related information,
    The main technologies used were ${triathlon.tech1}, ${triathlon.tech2}, ${triathlon.tech3} and ${triathlon.tech4}`
}
function clearTriathlon(){
    document.getElementById("triathlonDescription").innerHTML = null; 
}


function projectFour(mystery){
    document.getElementById("mysteryDescription").innerHTML = `An early draft for an e-commerce store using the Django framework, 
    The main technologies used were ${mystery.tech1}, ${mystery.tech2}, ${mystery.tech3} and ${mystery.tech4}` 
}
function clearMystery(){
    document.getElementById("mysteryDescription").innerHTML = null;
}


function projectFive(santa){
    document.getElementById("santaDescription").innerHTML = `A site showcasing all the skills that Santa has to offer, 
    The main technologies used were ${santa.tech1}, ${santa.tech2}, ${santa.tech3} and ${santa.tech4}`;  
}
function clearSanta(){
    document.getElementById("santaDescription").innerHTML = null;  
}