$(".cafe24-publisher button").click(function() {
  //   if both input has value, show successful login modal
    if( $(".cafe24-publisher form .input-label input#username").val() && $(".cafe24-publisher form .input-label input#password").val() ) {
          $(".modal").css("display", "block");
          $(".modal .modal-content p").html("Successful login! <i class='fa fa-check-circle-o' aria-hidden='true'></i>");
    }
  //   if one of the inputs has no value, show failed login modal
    if( !$(".cafe24-publisher form .input-label input#username").val() || !$(".cafe24-publisher form .input-label input#password").val() ) {
          $(".modal").css("display", "block");
          $(".modal .modal-content p").html("Login attempt failed! <br> Please check your username or password <i class='fa fa-times-circle-o'aria-hidden='true'></i>");
      }
  });
  
  // close modal function
  $(".modal .close").click(function(){
    $(".modal").css("display", "none");
  });