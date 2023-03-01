//Methods
function toCheckSellerInfo(sellerName, str) {
    isEmpty(sellerName, str)
    isSpace(sellerName, str)
}
function checkChar(sellerName, str) {
    for (let a = 0; a < sellerName.length; a++) {
        if (sellerName.charAt(a).match(/[a-z0-9]/i)) {
            if (sellerName.length > 2 && sellerName.length < 15) {
                continue;
            } else {
                alert(`your ${str} is too long, It must be 2<${str} length<15`)
                break;
            }
        }
        else {
            alert(`Please don't use inlegal characters in ${str}`);
            break;
        }
    }
}
const isEmpty = (val, propertyName) => {
    if (val === "" || val === undefined) {
        alert(`you are not entered ${propertyName}`)
        return false
    } else {
        return true
    }
}
const isSpace = (val, propertyName) => {
    if(val.match(" ")) {
        alert(`do not take any space in ${propertyName}`);
        return false
    } else {
        return true
    }
};
const togglePassword = () => {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
const checkContactNum = (sellerContect) => {
    for (let z = 0; z < sellerContect.length; z++) {
        if(numbers.includes(sellerContect.charAt(z))) {
            if(sellerContect.length == 10){
                console.info("Entered contect number")    
                continue;
            }else{
                alert("your contect number must be is in 10 digit.")
                break;
            }
        }else{
            alert("letter/character are not allowed in contect number.");
            break;
        }
    }
}
const checkUsername = (sellerName) =>{
    if(sellerName.length>5 && sellerName.length<20){
        for (let t = 0; t < sellerName.length; t++) {
            if (sellerName.charAt(t).match(/[a-z0-9]/i)) {
                if(sellerName.match(/[0-9]/g)){
                    console.info("username Enterd");
                }else{
                    alert(`username is not alphanumeric`);
                    break;
                }
                continue;
            }else{
                alert(`Do not use inligal character in the username`);
                break
            }            
        }   
    }else{
        (sellerName.length!==0)?alert(`your username must be is in the range`):console.log("");
    }
}
const isPassword = (sellerPassword) =>{
    if(sellerPassword.length>=8 && sellerPassword.length<=16){
        for (let p = 0; p < sellerPassword.length; p++) {
            if(sellerPassword.match(/[a-zA-Z0-9]/i)) {
                // listOfChar.includes(sellerPassword.charAt(p))
                // alert(sellerPassword.charAt(p));
                (sellerPassword.length-1 == p)?console.info("password Entered"):console.log(undefined);          
            }else{
                alert(`Must contain atleast 1 numeric and 1 special character `);
                break;
            }  
        }
    }else{
        (sellerPassword.length!==0)?alert(`your username must be is in the range`):console.log("");
    }
}
const isBothPasswordEqual = (password, confirmPassword) => {
    if (password == confirmPassword) {
        alert("password matched")
        console.info("password matched")
        return true
    } else {
        alert("your password is not matched")
        console.info("your password is not matched")
        return false
    }
};


export { toCheckSellerInfo, checkChar, checkContactNum, checkUsername, isPassword, isBothPasswordEqual, isEmpty, };