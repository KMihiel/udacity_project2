var bio = {
  	"name": "Kimberly Mihiel",
  	"role": "Web Developer",
  	"contacts": {
  		"mobile": "570-269-6324",
  		"email": "kimberlymihiel@gmail.com",
  		"github": "Kmihiel",
  		"twitter": "@Kimberly_Mihiel",
  		"location": "Dingmans Ferry, PA"
  	},
  	"welcomeMessage": "Hi! I'm Kim a Graphic Designer and Web Developer",
  	"skills": [
		"HTML5", "CSS3", "Javascript", "CanvasJS", "Adobe Creative Suite"
  	],
  	"bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/07b/1f4/0f4ac32.jpg",
};

var work = {
	"jobs":[{
		"employer": "Techflex Inc.",
		"title": "Graphic Designer and Web Developer",
		"location": "Sparta, NJ",
		"dates": "2015 - Current",
		"description": "I create graphics for both print and online use. As well as website design and maintenance.",
	}]

};

var projects = {
	"projects":{
		"title": "Magazine Publication",
		"dates": "2014 - 2015",
		"description": "I created a Magazine spread for an event.",
		"images": "http://kimberlymihiel.com/images/work05.jpg",
	}
};

var education = {
	"schools":[{
		"name": "Lock Haven University",
		"location": "Lock Haven, PA",
		"degree": "BFA in Studio Art",
		"major": "Graphic and Online Design",
		"dates": "2011-2014",
		"url": "http://www.lhup.edu"
	}],
	"onlineCourses":[{
		"title": "Intro to HTML and CSS",
		"school": "O'Reilly School of Technology",
		"dates": "2015",
		"url": "http://www.oreillyschool.com"
	}]
};

//Bio Information
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);
		$("#header").append(HTMLskillsStart);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedtwitter + formattedLocation;
		$("#topContacts").append(allContacts);
		$("#footerContacts").append(allContacts);


	
function displaySkills() {
	for (skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#header").append(formattedSkills);
	}
}
displaySkills();

	};
bio.display();

//Work Information
work.display = function(){
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	}
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$("#workExperience").append(formattedworkEmployer);
	$("#workExperience").append(formattedworkTitle);
	$("#workExperience").append(formattedworkLocation);
	$("#workExperience").append(formattedworkDates);
	$("#workExperience").append(formattedworkDescription);

};
work.display();

//Project information
projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	}
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
	$("#projects").append(formattedprojectTitle);
	$("#projects").append(formattedprojectDates);
	$("#projects").append(formattedprojectDescription);

	if(projects.projects.images.length > 0) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.images);
				$("#projects").append(formattedImage);
			}

};
projects.display();

//Education information
education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
	}
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
	$("#education").append(formattedschoolName);
	$("#education").append(formattedschoolLocation);
	$("#education").append(formattedschoolDegree);
	$("#education").append(formattedschoolMajor);
	$("#education").append(formattedschoolDates);
	$("#education").append(formattedonlineTitle);
	$("#education").append(formattedonlineSchool);
	$("#education").append(formattedonlineDates);
	$("#education").append(formattedonlineURL);
};
education.display();

//Google Maps Info
$("#mapDiv").append(googleMap);
