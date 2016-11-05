
var studentIndex = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);
        displayInfo(data);
        buttonFunctions(data);
//        setInterval(automate(data), 2000);
        }
      });

    function displayInfo(index){
      $('#container').append('<div class="person"></div>');
      var $el = $('#container').children().last();
      $el.append('<h3>' + index.sigmanauts[studentIndex].name + '</h3>');
      $el.append('<h3>' + index.sigmanauts[studentIndex].git_username + '</h3>');
      $el.append('<h3>' + index.sigmanauts[studentIndex].shoutout + '</h3>');
      $("#td"+studentIndex).css('background', '#aaa');
    }

    function buttonFunctions(test){
      $("#next").on('click', function(event) {
        studentIndex++;
        if(studentIndex === 19){
          studentIndex = 0;
        }
        $("#container").empty();
        $("td").css('background', 'none');
        displayInfo(test);
      });
      $("#previous").on('click', function(event) {
        studentIndex--;
        if(studentIndex === -1){
          studentIndex = 18;
        }
        $("#container").empty();
        $("td").css('background', 'none');
        displayInfo(test);
      });
    }
    function automate(test){
      studentIndex++;
      if(studentIndex === 19){
        studentIndex = 0;
      }
      $("#container").empty();
      $("td").css('background', 'none');
      displayInfo(test);
    }
});
