const createPersonObject = () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;

  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };

  return person;
};

const addDataPersonAttribute = () => {
  const formElement = document.querySelector("form");
  const person = createPersonObject();
  const personJSON = JSON.stringify(person);

  formElement.setAttribute("data-person", personJSON);
};

addDataPersonAttribute();
