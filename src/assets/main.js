$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2514445.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  function addCourses(courses) {
    courses.forEach(function(course) {
      var $badges = $('#badges');

      var $courseDiv = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      $('<h3 />', {
        text: course.title
      }).appendTo($courseDiv);
    })
  }
});
