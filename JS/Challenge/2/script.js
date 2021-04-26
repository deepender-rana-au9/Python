var count = 0;
function generateCat() {
  count += 1;
  let imageContainerDiv = document.querySelector(".imageContainer");
  let countDiv = document.createElement("div");
  countDiv.innerText = count;
  imageContainerDiv.append(countDiv);

  let image = document.createElement("img");
  let div = document.querySelector(".imageContainer");
  image.src =
    "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);
  console.log(count);
}
