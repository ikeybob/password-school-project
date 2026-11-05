//link submit button to redirect using function

function redirect(){
  let choice = document.querySelector("input[name='password_option']:checked")

  if (choice == "check"){
    window.location.href = "https://www.google.com/"
  }
  if (choice == null){
    alert("SELECT SOMETHING")
  }
}
