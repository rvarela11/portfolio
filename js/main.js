$(function() {

  //Fullpage anchoring
  $('#fullpage').fullpage({
    anchors: ['home', 'projects', 'aboutMe', 'contact']
  });

  // Toggle menu

  var toggle = document.querySelector(".toggle");
  var nav = document.querySelector(".navbar-header");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("is-visible");
  });

  // Home page type script

  var thing = "Hi! I am Robert. A full-stack developer with a focus on front-end development.";
  var i = 0;
  var timer;
  var type_script = document.querySelector('#intro');

  if(i < thing.length) {
   timer = setInterval(function(){
      type_script.innerHTML += thing[i];
      i++;
      if (i >= thing.length) {
        clearInterval(timer);
      }
   }, 50);
   return type_script;
  }

});
