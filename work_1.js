//  " Modal "
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const cancelBtn = favDialog.querySelector("#cancelBtn");
const inputs = favDialog.querySelectorAll("input[required]");

// Remove the required attribute from all input fields
cancelBtn.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.removeAttribute("required");
    document.getElementById("form").reset();
  });
});

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  favDialog.showModal();
});




//  " Table "

let bigdata = []

addData = () =>  {
    var getnumber = document.getElementById("numberInput").value;
    var getname = document.getElementById("nameInput").value;
    var getsurname = document.getElementById("surnameInput").value;
    var getemail = document.getElementById("emailInput").value;
    if (numberInput.value === "" || nameInput.value === "" || surnameInput.value === "" || emailInput.value === "") {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }
    
    bigdata.push({no: getnumber , name: getname,surname:getsurname, email: getemail})
    let htmlStr = ""
    bigdata.forEach((data,index) => {
        htmlStr += `<tr>
                    <td>${data.no}</td>
                    <td>${data.name}</td>
                    <td>${data.surname}</td>
                    <td>${data.email}</td>
                    <td>
                    <button onclick="deleteRow(${index})" 
                    style="background-color: red; color: #ffffff; border: none;" >  
                    Delete</button>  
                    </td>
                    </tr>`
    })                                                                                 
    document.getElementById('myTable').innerHTML = htmlStr   
    favDialog.close();
    document.getElementById("form").reset();
}

deleteRow = (index) => {
    bigdata.splice(index,1)
    let htmlStr =""
    bigdata.forEach((data) => {
        htmlStr += `<tr>
                <td>${data.no}</td>
                <td>${data.name}</td>
                <td>${data.surname}</td>
                <td>${data.email}</td>
                <td>
                <button onclick="deleteRow(${index})" 
                    style="background-color: red; color: #ffffff; border: none;" >  
                    Delete</button>   
                </td>
                </tr>`
    }) 
    document.getElementById('myTable').innerHTML = htmlStr
}
    





