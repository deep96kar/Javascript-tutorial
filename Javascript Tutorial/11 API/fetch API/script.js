// API -> application programming Interface

const URL = "https://cat-fact.herokuapp.com/facts";
const id = document.querySelector("#id");
const btn = document.querySelector("#btn");

// const getfact = async () => {
//   console.log("getting data....");
//   let response = await fetch(URL);
//   //   console.log(response.status);
//   console.log(response); //json format
//   let data = await response.json();
//   setTimeout(() => {
//     id.textContent = data[1].text;
//   }, 1000);
//   // console.log(data[0].text);
//   // id.innerText = data[0].text;
// };

function getfact() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      id.textContent = data[3].text;
      
    });
}

btn.addEventListener("click", getfact);
