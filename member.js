function skillsMember(){
  // Get the member id from the URL
  var memberId = window.location.href.split("?id=")[1];
  // Get the member information
  var member = getMember(memberId);
  // Get the skills of the member
  var skills = getSkills(memberId);
  // Set the member name
  document.getElementById("member-name").innerHTML = member.name;
  // Set the skills
  var skillsHtml = "";
  for (var i = 0; i < skills.length; i++) {
    skillsHtml += "<li>" + skills[i].name + "</li>";
  }
  document.getElementById("skills-list").innerHTML = skillsHtml;
}