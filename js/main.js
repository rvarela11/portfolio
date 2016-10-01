$(function() {

  // Fullpage anchoring
  $('#fullpage').fullpage({
    anchors: ['home', 'projects', 'aboutMe', 'contact']
  });


  // Toggle menu
  var toggle = $('.toggle');
  var nav = $('.navbar-header');

  toggle.on("click", function() {
    nav.toggleClass('is-visible');
  });

  // Home page type script
  setTimeout(function() {
    $('#intro').typed({
      strings: [
        "Hi! I'm Robert and currently I am studying to be a full-stack developer with a focus on front-end development."
      ],
      typeSpeed: 5,
      contentType: 'html'
    });
  }, 500);


});
