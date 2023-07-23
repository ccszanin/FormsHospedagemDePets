function validationForm() {
  let validationCod = document.forms["register"]["cod"].value;
  let validationName = document.forms["register"]["name"].value;
  let validationNameAnim = document.forms["register"]["nameAnimal"].value;
  let validationTel = document.forms["register"]["tel"].value;
  let validationradioUnit = document.forms["register"]["radioUnit"].value;
  let validationDate = document.forms["register"]["date"].value;
  let validationRadio = document.forms["register"]["radio"].value;

  if (validationCod == "") {
    alert("O Código deve ser preenchido");
    return false;
  }
  if (validationName == "") {
    alert("O Nome do dono deve ser preenchido");
    return false;
  }
  if (validationNameAnim == "") {
    alert("O Nome do animal deve ser preenchido");
    return false;
  }
  if (validationTel == "") {
    alert("O telefone deve ser preenchido");
    return false;
  }
  if (validationradioUnit == "") {
    alert("A Unidade deve ser preenchida");
    return false;
  }
  if (validationDate == "") {
    alert("A data deve ser preenchida");
    return false;
  }
  if (validationRadio == "") {
    alert("O Gênero deve ser preenchido");
    return false;
  }

  alert("A validação ocorreu de forma correta");
}

function insert() {
  let cod = document.forms["register"]["cod"].value;
  let name = document.forms["register"]["name"].value;
  let nameAnimal = document.forms["register"]["nameAnimal"].value;
  let tel = document.forms["register"]["tel"].value;
  let radioUnit = document.forms["register"]["radioUnit"].value;
  let date = document.forms["register"]["date"].value;
  let radio = document.forms["register"]["radio"].value;


  let insert = window.document.getElementById("insertRow");

  insert.innerHTML = `
  <th scope="row">${cod}</th>
  <td>${name}</td>
  <td>${nameAnimal}</td>
  <td>${radio}</td>
  <td>${tel}</td>
  <td>${radioUnit}</td>
  <td>${date}</td>
 
  `;
}