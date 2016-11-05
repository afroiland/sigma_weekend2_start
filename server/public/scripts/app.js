
var studentIndex = 0;
var speed = 2000;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
//        console.log(data);
        displayInfo(data);
        buttonFunctions(data);
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

    function buttonFunctions(dataParam){
      $("#next").on('click', function(event) {
        studentIndex++;
        if(studentIndex === 19){
          studentIndex = 0;
        }
        $("h3").fadeOut("slow");
        setTimeout(clear, 500);
        setTimeout(displayInfo, 501, dataParam);
      });
      $("#previous").on('click', function(event) {
        studentIndex--;
        if(studentIndex === -1){
          studentIndex = 18;
        }
        $("#container").empty();
        $("td").css('background', 'none');
        displayInfo(dataParam);
      });
      $("#automate").on('click', function(event) {
        setInterval(automate, speed, dataParam);
      });
      $("#faster").on('click', function(event) {
        speed -= 500;
        if (speed < 500){
          speed = 500;
        }
        setInterval(automate, speed, dataParam);
      });
    }

    function automate(test){
      console.log(test);
      studentIndex++;
      if(studentIndex === 19){
        studentIndex = 0;
      }
      $("h3").fadeOut("slow");
      setTimeout(clear, 500);
      setTimeout(displayInfo, 501, test);
    }

    function clear(){
      $("#container").empty();
      $("td").css('background', 'none');
    }
});
