
function checkPassword(){
    const password = document.getElementById("password");
    const comPassword = document.getElementById("con-password");
    const errorPass = document.getElementById("pass-error");

    if (comPassword.value !== ""){
        if (password.value != comPassword.value){
            comPassword.style.border = "1px solid red";
            password.style.border = "1px solid red";

            if (errorPass === null){
                password.insertAdjacentHTML("afterend", `<p id="pass-error">Passwords Must Match</p>`)
            }
        } else {
            
            if (errorPass !== null){
                errorPass.remove();
            }
            comPassword.style.border = "1px solid #596D48";
            password.style.border = "1px solid #596D48";
        }
    } 

}
function changePhone(){
    const regex = /\(?(\d{3})\)?[\/ -]?(\d{3})[\/ -]?(\d{4})/g
    const phone = document.getElementById("phone");

    let dashedPhone = phone.value.replace(regex, "($1) $2-$3");
    phone.value = dashedPhone;
}



console.log(document.getElementById("first_name").getAttribute("isvalid"))


