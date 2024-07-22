function changeData(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
// dom manipulation using Currying
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("Hi ");
  changeData("change")("Hi This is Aakash");
});
