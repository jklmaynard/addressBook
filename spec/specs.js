describe("addressBook", function(){
  it("will return the name of the contact", function(){
    expect(addressBook("michael sera")).to.equal("michael sera");
  });
});
