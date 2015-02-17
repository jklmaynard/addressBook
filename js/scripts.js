$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $('input#first_name').val();
    var inputtedLastName = $('input#last_name').val();
    var inputtedStreet = $('input#street').val();
    var inputtedState = $('input#state').val();
    var inputtedZip = $('input#zip').val();

    var newAddress = { street: inputtedStreet,
                        state: inputtedState,
                        zip: inputtedZip,
                        getAddress: function() {
                          return this.street + ", " + this.state + ", " + this.zip;
                        }
                      };
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, address: newAddress.getAddress() };

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
