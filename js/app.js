$(document).ready(function(){
    $('.panel-menu ul li a').click(function(){
        $('.panel-menu ul li a').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  document.getElementById("alertCopy").innerHTML = "<span id='alertCopy' class='alert'><i class='hl-success'></i>کپی شد</span>"
  window.setTimeout( 
    function(){ 
      document.getElementById("alertCopy").innerHTML = "";
    },
    2500
  );
}

