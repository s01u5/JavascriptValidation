function firstName() {
    var fname = document.getElementById("fname").value;
    if(fname.length<5) {
        //alert("first name is not validated");
        document.getElementById("fbug").innerHTML="<img src='assets/unchecked.gif'/> fname is not validated";
        return false;
    }
    else{
        //alert("first name is validated");
        document.getElementById("fbug").innerHTML="<img src='assets/checked.gif'/> fname is validated";
        return true;
    }
}
function lastName(){
    var lname= document.getElementById("lname").value;
    if(lname.length> 3 && lname.length< 8) {
         //alert("last name validate");
         document.getElementById("lbug").innerHTML="<img src='assets/checked.gif'/> lname is validated";
        return true;
    }
    else {
       //alert("last name not validate");
       document.getElementById("lbug").innerHTML="<img src='assets/unchecked.gif'/> lname is not validated";
        return false;
    }
}
function phonenumber() {
    var phn = document.getElementById("phone").value;
    if(phn.match(/\d{10}$/)) {
        //alert("phone num validate");
        document.getElementById("telbug").innerHTML="<img src='assets/checked.gif'/> contact is validated";
        return true;
    }
    else {
        //alert("Enter the correct phone number");
        document.getElementById("telbug").innerHTML="<img src='assets/unchecked.gif'/> contatct is not validated";
        return false;
    }
}
function user(){
    var ua=document.getElementById("uname").value;
    if(ua.length<=4){
       //alert(" Invalid username ");
       document.getElementById("userbug").innerHTML="<img src='assets/unchecked.gif'/> username is not validated";
        return false;
       }
    else{
        //alert("Userame is validated");
        document.getElementById("userbug").innerHTML="<img src='assets/checked.gif'/>username is validated";
        return true;
    }
}

function ValidateEmail(){
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat)){
    //alert("Valid email address");
    document.getElementById("mailbug").innerHTML="<img src='assets/checked.gif'/> email  is validated";
    return true;
    }
    else{
      //  alert("You have entered an invalid email address!");
      document.getElementById("mailbug").innerHTML="<img src='assets/unchecked.gif'/> email  is not validated";
        return false;
    }
}

function passwordvalidate(){
    var passwd=document.getElementById("pass").value;
    if(/[A-Z]/.test(passwd) && /[a-z]/.test(passwd) && /[0-9]/.test(passwd) && /[\W]/.test(passwd) && passwd.length>6){
        //alert("Password is strong");
        document.getElementById("passbug").innerHTML="<img src='assets/checked.gif'/> passwd is validated";
        return true;
    }
    else{
        //alert("Password is not strong");
        document.getElementById("passbug").innerHTML="<img src='assets/unchecked.gif'/> passwd is not validated";
        return false;
    }
}
function passwords(){
    var firstpassword=document.getElementById("pass").value;
    var secondpassword=document.getElementById("cpass").value;
        if (firstpassword==secondpassword){
          //  alert("password mathces");
            return true;
        }
        else{
            //alert("password doesn't match");
            document.getElementById("cbug").innerHTML="<img src='assets/unchecked.gif'/> Password doesn't match";
            return false;
        }
}
function registerValidate(){
   // alert("Hello JS by solus");
    var fName=firstName();
    var lName=lastName();
    var contact=phonenumber();
    var user_name=user();
    var user_email=ValidateEmail();
    var strong_passphrase=passwordvalidate();
    var confirm_pass=passwords();
    if(fName==true && lName==true && contact==true && user_name==true && user_email==true && strong_passphrase==true && confirm_pass==true){
            alert("Registration is Validated");
            }
    else{
        alert("Incorrect,please try again");
    }
}




//login page validation
function loginvalidate(){
    var userName=user();
    var password=passwordvalidate();
    if(userName==true  && password==true){
        alert("login is correct");
    }
    else{
        alert("login is incorrect");
    }
}

//forgot page validation
function forgotpassword(){
    var username=user();
    var mailid=ValidateEmail();
    var mobile=phonenumber();
    if(username==true && mailid==true && mobile==true){
        alert("Password changed successfully");
    }
    else{
        alert("The entered Credentials are incorrect");
    }
}