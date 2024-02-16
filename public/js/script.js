//window.addEventListener("load", (event) => {

const btnNavOpen = document.getElementById('btnSideMenu');
const btnNavClose = document.getElementById('btnNavClose');

if(btnNavOpen!==null){
  btnNavOpen.addEventListener("click", function() {
    document.getElementById("sideNav").style.width = "90%";
  });
}

if(btnNavClose!==null){
  btnNavClose.addEventListener("click", function() {
    document.getElementById("sideNav").style.width = "0";
  });
}

//Edit payment info popup
const editPayInfo = document.getElementById('btnEditPayInfo');
const closePayInfo = document.getElementById('btnClosePaymentEdit');
const divEditPayInfo = document.getElementById('editPaymentInfo');

if(editPayInfo!==null) {
  editPayInfo.addEventListener('click', () => {
    divEditPayInfo.style.display = 'flex';
});
}

if(closePayInfo!==null) {
  closePayInfo.addEventListener('click', () => {
    divEditPayInfo.style.display = 'none';
});
}


//});
