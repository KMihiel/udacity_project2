/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  	"name": "Kimberly Mihiel",
  	"role": "Web Developer",
  	"contact": {
  		"mobile": "570-269-6324",
  		"email": "kimberlymihiel@gmail.com",
  		"github": "Kmihiel",
  		"twitter": "@Kimberly_Mihiel",
  		"location": "Dingmans Ferry, PA"
  	},
  	"welcomeMessage": "Hi! I'm Kim a Graphic Designer and Web Developer",
  	"skills": {
		"Languages": "HTML5, CSS3, Javascript",
		"Frameworks/Libraries": "Bootstrap",
		"Other": "SourceTree, GitHub"
  	},
  	"bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/07b/1f4/0f4ac32.jpg",
};

var education = {
	"schools":{
		"name": "Lock Haven University",
		"location": "Lock Haven, PA",
		"degree": "BFA - Studio Art",
		"majors": "Graphic and Online Design",
		"date": "2014",
		"url": "http://www.lhup.edu"
	},
	"onlineCourses":{
		"title": "Intro to HTML and CSS",
		"school": "O'Reilly School of Technology",
		"dates": "2015",
		"url": "http://www.oreillyschool.com"
	}
};

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);


var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedtwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedtwitter + formattedLocation;
	$("#topContacts").append(allContacts);
	$("#footerContacts").append(allContacts);

var formattedSkill = HTMLskills.replace("%data%",bio.skills["Languages"]);
   $("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%",bio.skills["Frameworks/Libraries"]);
    $("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills["Other"]);
    $("#header").append(formattedSkill);

};
bio.display();

education.display = function() {
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools.name);
	alert(formattedschoolName);
	$("#education").append(formattedschoolName);

var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools.degree);
	$("#education").append(formattedschoolDegree);

};
education.display();

