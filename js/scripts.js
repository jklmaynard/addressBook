$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var firstname = $('input#first_name').val();
    var lastname = $('input#last_name').val();
    var address = $('input#address').val();
    var newContact = { firstName: firstname, lastName: lastname, address: address };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#first_name").val("");
    $("input#last_name").val("");
    $("input#address").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    });
  });
});
