
console.log("hey");

$("body").on("click",".check" , function(){
  $(".check").prop("checked", false)
  $(this).prop("checked", true)
})