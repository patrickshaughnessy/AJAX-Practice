$(document).ready(init);

function init(){
  $('#userName').on('keyup', function(event){
    if (event.which == 13) {
      var username = $('#userName').val();
      goHandler(username);
    }
  });
}

function goHandler(username){
  console.log(username);

  $.get('https://api.github.com/users/' + username)
  .done(function(data, status){
    console.log("data:", data);
    console.log("status:", status);

    var $cardInfo = printInfo(data);
  })
  .fail(function(data, status){
    console.log("data:", data);
    console.log("status:", status);
  })

}

function printInfo(data){
  var $avatar = $('<img>').attr('src', data.avatar_url);
  var $name = $('<h1>').text(data.name);
  var $user = $('<p>').text(data.login);
  var $newBlock = $('<div>').addClass('container').append($avatar).append($name).append($user);
  return $('#coolStuff').append($newBlock);
  //
  // return $('#coolStuff').append($avatar).append($name).append($user);
}
