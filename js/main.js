function openNav(){
    document.getElementById("mySidenav").style.width = "250px"
    document.getElementById("main").style.marginRight = "250px"
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("main").style.marginRight = "0"
}
function formValidate(){
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var email = document.getElementById("email").value;
    var nPass = document.getElementById("nPass").value;
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var error1f = document.getElementById("error1f");
    var error2l = document.getElementById("error2l");
    var error3e = document.getElementById("error3e");
    var error4p = document.getElementById("error4p");
    var text = "";

    if(fName.length < 3){
        text = "Please Enter Valid firstname ";
        error1f.innerHTML = text;
        return false;
    }else{error1f.innerHTML = "";}

    if (lName.length < 3){
            text = "Please Enter Valid lastname ";
            error2l.innerHTML = text;
            return false;
        }else{error2l.innerHTML = "";}
    if (email.indexOf("@") == -1 || email.length <6){
            text = "Please Enter Valid email ";
            error3e.innerHTML = text;
            return false;
        }else{error3e.innerHTML = "";}
    if (nPass.length <6){
            text = "Please Enter Valid password ";
            error4p.innerHTML = text;
            return false;
        }else{error4p.innerHTML = "";}
        
            alert("done")
            return true;
        
}