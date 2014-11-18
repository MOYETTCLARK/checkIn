console.log("start Check-in App")

$(function(){
  
  $('#checkIn').on('submit', function(e){
    e.preventDefault();
    var sel = $(this),
    $name = sel.find('#name'),
    $email = sel.find('#email');  
    
    if($name.val().length < 3){
      $name.addClass('error');
      return;
    }
    
    
    $.ajax({
      data: {
        name: $name.val(),
        email: $email.val()
      },
      type: "POST" ,
      url: "/users"
      
      
    }).done(function(data){
      console.log(data);
    });
     
   
    
  });
  
});