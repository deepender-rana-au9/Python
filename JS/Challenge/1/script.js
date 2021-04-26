const ageInDays = () => {
  let birthYear = prompt("Enter your birth year");
  const year = new Date().getFullYear();

  let ageInYears = year - birthYear;
  let ageInDays = (year - birthYear) * 365;
  document.getElementById("result").innerHTML = `<h2>In years ${ageInYears}</h2>
  <h2>In days ${ageInDays}</h2>`;
};

const reset = () => {
  document.getElementById("result").innerText = "";
};
