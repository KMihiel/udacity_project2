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
  	"skills": {
		"Languages": "HTML5, CSS3, Javascript",
		"Frameworks/Libraries": "Bootstrap",
		"Other": "SourceTree, GitHub"
  	},
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
		"degree": "BFA - Studio Art",
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

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
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

work.display = function(){
	for(var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
	}
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	$("#workExperience").append(formattedworkEmployer);
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	$("#workExperience").append(formattedworkTitle);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$("#workExperience").append(formattedworkLocation);
var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$("#workExperience").append(formattedworkDates);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$("#workExperience").append(formattedworkDescription);
};
work.display();

projects.display = function(){
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	}
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
	$("#projects").append(formattedprojectTitle);
var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
	$("#projects").append(formattedprojectDates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
	$("#projects").append(formattedprojectDescription);

	if(projects.projects.images.length > 0) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects.images);
				$("#projects").append(formattedImage);
			}

};
projects.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
	}
var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$("#education").append(formattedschoolName);
var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$("#education").append(formattedschoolLocation);
var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$("#education").append(formattedschoolDegree);
var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	$("#education").append(formattedschoolMajor);
var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$("#education").append(formattedschoolDates);
var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
	$("#education").append(formattedonlineTitle);
var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
	$("#education").append(formattedonlineSchool);
var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
	$("#education").append(formattedonlineDates);
var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
	$("#education").append(formattedonlineURL);
};
education.display();


$("#mapDiv").append(googleMap);
