window.addEventListener('DOMContentLoaded', (event) =>{
    const name = document.querySelector("#name");
    const textError = document.querySelector(".name-error");
    name.addEventListener('input',function(){
        if( name.value.length == 0){
            textError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).name = name.value;
            textError.textContent = "";
        }catch(e){
            textError.textContent = e;

        }
});

const phone = document.querySelector("#phone");
    const phoneError = document.querySelector(".phone-error");
    phone.addEventListener('input',function(){
        if( phone.value.length == 0){
            phoneError.textContent = "";
            return;
        }
        try{
            (new AddressBookData()).phone = phone.value;
            phoneError.textContent = "";
        }catch(e){
            phoneError.textContent = e;

        }
});

});




const save = () =>{     
    try{
        let addressBookData = createAddressBookData();
        createAndUpdateStorage(addressBookData);
    }catch(e){
        return;
    }
  }

function createAndUpdateStorage(addressBookData){
    let addressBookList = JSON.parse(localStorage.getItem("addressBookList"));

    if(addressBookList != undefined){
        addressBookList.push(addressBookData);
    }
    else{
        addressBookList = [addressBookData];
    }
    // alert(addressBookList.toString());
    localStorage.setItem("addressBookList", JSON.stringify(addressBookList));
    location.href="../html/addressBook_record.html";
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach( item =>{
        if(item.checked){
            setItems.push(item.value);
        }
    });
    return setItems;
}
const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) => {
    let value = document.getElementById(id).value;
    return value;
}

const createAddressBookData = () => {
    let addressBookData = new AddressBookData();
    try{
        addressBookData.name = getInputValueById('#name');
    }catch(e){
        setTextValue('.name-error', e);
        throw e;
    }
    addressBookData.address = getInputValueById('#address');
    addressBookData.stateSelect = getInputValueById('#stateSelect');
    addressBookData.citySelect = getInputValueById('#citySelect');
    addressBookData.zip= getInputValueById('#zip');

    addressBookData.phone = getInputValueById('#phone');
    // let scz = getInputValueById("#stateSelect") + " " + getInputValueById("#citySelect")+" "+getInputValueById("#zip");
    // addressBookData.scz = scz;
    // alert(addressBookData.toString());
    return addressBookData;
}

const unSelectedValues = (propertyValue) =>{
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
}
const setValue = (id, value) =>{
    const element = document.querySelectorAll(id);
    element.value = value;
}

const setTextValue = (id, value) =>{
    const element = document.querySelector(id);
    element.textContent = value;
}

const resetForm = () =>{
    setValue("#name","");
    setTextValue('.name-error', '');
    setTextValue('.phone-error', '');
    setValue('#address','');
    setValue('#stateSelect','');
    setValue('#citySelect','');
    setValue('#zip','');
    setValue('#phone','');
}

const remove = (item) =>{
    document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
}



