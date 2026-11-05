//link submit button to redirect using function

function redirect(){
  let choice = document.querySelection("input[name="password-option"]:checked")

  if (choice == "check"){
    window.location.href = "https://www.google.com/"
  }
  if (choice == null){
    alert("SELECT SOMETHING")
  }
}
