console.log("Page Loaded");




var product_total_ammount = document.getElementById('product_total_ammount');
// var total_payable = document.getElementById('total_payable');
var tax = document.getElementById('tax')
var shipingItem = document.getElementById('shipingItem');
var service = document.getElementById('service');
var total_payable = document.getElementById('total_payable');
console.log(tax, shipingItem ,service)


const decrementBtn = (incdec,itemprice) => {
     var itemVal = document.getElementById(incdec);
     var itemprice = document.getElementById(itemprice)
     // console.log(itemPrice)
     

     if(itemVal.value <= 1){
          itemVal.value = 1;
     }else{
          itemVal.value = parseInt(itemVal.value) - 1;
          itemprice.innerHTML = parseInt(itemprice.innerHTML) - 500;
          product_total_ammount.innerHTML = parseInt(product_total_ammount.innerHTML) - 500;
          total_payable.innerHTML = parseInt(product_total_ammount.innerHTML) + parseInt(tax.innerHTML) + parseInt(shipingItem.innerHTML) + parseInt(service.innerHTML) ;
          // total_payable.innerHTML = parseInt(product_total_ammount.innerHTML) + 1000
          // console.log(total_payable)
     }
}

const incrementBtn = (incdec ,itemprice) => {
     var itemVal = document.getElementById(incdec);
     var itemprice = document.getElementById(itemprice)
     // console.log(itemPrice)

     if(itemVal.value >= 10){
          itemVal.value = 10;
     }else{
          itemVal.value = parseInt(itemVal.value) + 1;
          itemprice.innerHTML = parseInt(itemprice.innerHTML) + 500;
          product_total_ammount.innerHTML = parseInt(product_total_ammount.innerHTML) + 500;
          total_payable.innerHTML = parseInt(product_total_ammount.innerHTML) + parseInt(tax.innerHTML) + parseInt(shipingItem.innerHTML) + parseInt(service.innerHTML) ;
     }
}


// validation for pincode
const pincodeChecker = () => {
     var regex = /(^\d{6}$)/;  
     var pincode = document.getElementById("pincode").value;
     var pin_msg = document.getElementById("pin_msg");
     var btnValidate = document.getElementById("btnValidate");

     if (regex.test(pincode)){   
         pin_msg.innerHTML = "Success ! this pincode is serviceable";
         pin_msg.style.color = "green"
         btnValidate.disabled   = false;
     }else if(pincode.length == "" || pincode.length == undefined){
          pin_msg.innerHTML = "Please enter a Pincode to proceed"
          pin_msg.style.color = "red"
          btnValidate.disabled = true;    
     }
     else{  
         pin_msg.innerHTML = "Sorry! this pincode is not serviceable "
         pin_msg.style.color = "red"
         btnValidate.disabled   = true;
     }
}

// validation For place Order
const ValidatePlaceOrder =()=>{
     var name = document.getElementById('name').value;
     var email = document.getElementById('email').value
     var phoneNum = document.getElementById('phoneNum').value;
     var phoneMsg = document.getElementById("phnNumMsg")

     console.log(name , email ,  phoneNum ,"hello validate")
     var IndNum = /^[0]?[789]\d{9}$/;

     if(name.trim() == "" || name.trim() == undefined){
          document.getElementById('name').focus();
          return false;
     }else if(email == "" || email == undefined){
          document.getElementById('email').focus();
          return false;
     }
     else if(phoneNum == "" || phoneNum == undefined || IndNum.test(phoneNum)){
          document.getElementById('phoneNum').focus();
          phoneMsg.innerHTML = "Please enter a valid mobile number";
          phoneMsg.style.color = "red"
          return false;
     }else{
          document.getElementById("placeOrder").innerHTML = "PLACING ORDER..."
     }

}