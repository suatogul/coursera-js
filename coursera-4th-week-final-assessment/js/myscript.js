// function billingFunction() {
//     if (document.getElementById("same").checked) {
//       document.getElementById("billingName").value =
//         document.getElementById("shippingName").value;
//       document.getElementById("billingZip").value =
//         document.getElementById("shippingZip").value;
//       //   document.getElementById('nickname').setAttribute('required',true);
//     } else {
//       document.getElementById("billingName").removeAttribute("required");
//       document.getElementById("billingZip").removeAttribute("required");
//       document.getElementById("billingName").value = "";
//       document.getElementById("billingZip").value = "";
//     }
//   }
function billingFunction() {
    var isTheSame = document.getElementById("same");
    var shippingName = document.getElementById("shippingName");
    var shippingZip = document.getElementById("shippingZip");
  
    var billingName = document.getElementById("billingName");
    var billingZip = document.getElementById("billingZip");
  
    if (isTheSame.checked) {
      billingName.value = shippingName.value;
      billingZip.value = shippingZip.value;
      billingName.setAttribute("required", true);
      billingZip.setAttribute("required", true);
    } else {
      billingName.value = "";
      billingZip.value = "";
      billingName.removeAttribute("required");
      billingZip.removeAttribute("required");
    }
  }