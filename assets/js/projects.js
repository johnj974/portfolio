function project(name, tech1, tech2, tech3, tech4){
    this.name = name;
    this.tech1 = tech1;
    this.tech2 = tech2;
    this.tech3 = tech3;
    this.tech4 = tech4;
}

let metallic = new project("Metallic AA's", "HTML", "CSS", "Bootstrap");
let countryInfo = new project("Country Info App", "Javascript", "HTML", "CSS",);
let triathlon = new project("Triathlon Checklist", "Python", "Flask", "Mongo DB", "CSS");
let mystery = new project("Mystery Shack", "Python", "Javascript", "Django", "AWS")


function info(project){
    document.getElementById("projectname").innerHTML = project.name;
    document.getElementById("projecttech1").innerHTML = project.tech1;
    document.getElementById("projecttech2").innerHTML = project.tech2;
    document.getElementById("projecttech3").innerHTML = project.tech3;
    document.getElementById("projecttech4").innerHTML = project.tech4;
}