$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2514445.json',
    dataType: 'jsonp',
    success: function(response) {
      var courseCompleted = response.courses.completed;
      var courseItem = $.map(courseCompleted, function(course, i) {
        var elements = $('<div class="course"></div>');
        return elements;
      });
      $('#badge').html(courseItem);

    }
  });
});
