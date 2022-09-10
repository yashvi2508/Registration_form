let userForm = document.getElementById('user-form');
const retrieveEntries = () => {
    let entries = localStorage.getItem('user-entries');
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = [];
    }
    return entries;
}
let userEntries = retrieveEntries();
const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {
      const nameCell = `<td>${entry.name}</td>`;
        const emailCell = `<td>${entry.email}</td>`;
        const passwordCell = `<td>${entry.password}</td>`;
        const dobCell = `<td>${entry.dob}</td>`;
        const AcceptTermsCell = `<td>${entry.AcceptedTermsandCondition}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${AcceptTermsCell}</tr>`;
        return row
    }).join("\n");

    const table = `<tr><th>Name</th><th>Email</th><th>Password</th><th>Dob</th><th>Accepted terms?</th></tr>${tableEntries}`;
    let details = document.getElementById('table');
    details.innerHTML = table;
  }
const saveUserForm = (event) => {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let AcceptedTermsandCondition = document.getElementById('terms').checked;

    const entry = {
        name,
        email,
        password,
        dob,
        AcceptedTermsandCondition
    }

    userEntries.push(entry);
    localStorage.setItem("user-entries", JSON.stringify(userEntries));
    displayEntries();
}


userForm.addEventListener('submit', saveUserForm);
displayEntries();

 
function getAge(today, birthDate) {
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getDate() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  
  let Dob = document.getElementById("dob");
  
  Dob.addEventListener("change", () => {
    let [year, month, date] = document.getElementById("dob").value.split("-");
  
    let dob = new Date(year, month, date);
    let Today = new Date();
  
    age = getAge(Today, dob);
    if (age < 18 || age > 55) {
      Dob.setCustomValidity("Your age is not lies between 18 and 55");
      return;
    } else {
      Dob.setCustomValidity("");
    }
  });
  
  const email = document.getElementById("email");
  
  email.addEventListener("input", () => validate(email));
  
function validate(element) {
    if (element.validity.typeMismatch) {
      element.setCustomValidity("The Email is not in the right format!!!");
      element.reportValidity();
    } else {
      element.setCustomValidity("");
    }
  }
