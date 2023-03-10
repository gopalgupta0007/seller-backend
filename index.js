import { toCheckSellerInfo, checkChar, checkContactNum, checkUsername, isBothPasswordEqual, isEmpty } from './sellerFunc.js'
//assign values to variables
$(function () {
    console.log("ready!");
    $("form").submit(function () {
        const seller_first_name = $("#seller_first_name").val();
        const seller_middle_name = $("#seller_middle_name").val();
        const seller_last_name = $("#seller_last_name").val();
        const seller_contect_number = $("#seller_contect_number").val();
        const seller_username = $("#seller_username").val();
        const seller_email = $("#seller_email").val();
        const seller_password = $("#seller_password").val();
        const seller_confirm_password = $("#seller_confirm_password").val();
        const seller_brand_name = $("#seller_brand_name").val();
        // const seller_brand_category = $("#seller_brand_category").val();
        const seller_address = $("#seller_address").val();
        const seller_since = $("#seller_since").val();
        try {
            toCheckSellerInfo(seller_first_name, "first name");
            checkChar(seller_first_name, "first name");
            toCheckSellerInfo(seller_middle_name, "middle name");
            checkChar(seller_middle_name, "middle name");
            toCheckSellerInfo(seller_last_name, "last name");
            checkChar(seller_last_name, "last name");
            toCheckSellerInfo(seller_contect_number, "contact number");
            checkContactNum(seller_contect_number);
            toCheckSellerInfo(seller_username, "username");
            checkUsername(seller_username);
            toCheckSellerInfo(seller_email, "email");
            checkUsername(seller_email);
            if (isEmpty(seller_password, "password") && isEmpty(seller_confirm_password, "confirm password")) {
                isBothPasswordEqual(seller_password, seller_confirm_password);
            }
            isEmpty(seller_brand_name, "brand name");
            if (isEmpty(seller_address, "seller address")) {
                (seller_address.length > 5 && seller_address.length < 100) ? console.info("Address Entered") : alert("your address must be is in the Range 5< Address <100")
            }
            if (isEmpty(seller_since, "Date")) {
                if ((new Date(seller_since).valueOf()) <= (new Date().valueOf())) {
                    alert("date correct")
                } else {
                    alert("long date")
                }
            }
        } catch (err) {
            alert("error => " + err);
        }
        //Once the use can fill the correct way of registration form then it's going to login.  
        if ((seller_first_name) && (seller_middle_name) && (seller_last_name) && (seller_contect_number) && (seller_username) && (seller_email) && (seller_password) && (seller_confirm_password) && (seller_brand_name) && (seller_address) && (seller_since)) {
            alert("Registration Complete")
        }
    })
});
