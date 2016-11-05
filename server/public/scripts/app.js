
var studentIndex = 0;

$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
//        console.log(data);
        displayInfo(data);
        buttonFunctions(data);
//        setInterval(automate, 2000, data);
//        automate(data);
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
        setTimeout(clear, 900);
        setTimeout(displayInfo, 901, dataParam);
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
    }

    function automate(test){
      console.log(test);
      studentIndex++;
      if(studentIndex === 19){
        studentIndex = 0;
      }
      $("#container").empty();
      $("td").css('background', 'none');
      displayInfo(test);
    }

    function clear(){
      $("#container").empty();
      $("td").css('background', 'none');
    }
});
