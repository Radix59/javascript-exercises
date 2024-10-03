const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.style.color = "red";
redText.textContent = "Hey, I'm red!";

container.appendChild(redText);

const blueHeader = document.createElement("h3");
blueHeader.style.color = "blue";
blueHeader.textContent = "I'm a blue h3!";

container.appendChild(blueHeader);

const pinkDiv = document.createElement("div");
pinkDiv.style.backgroundColor = "pink";
pinkDiv.style.borderStyle = "solid";
pinkDiv.style.borderColor = "black";

const pinkHeaderChild = document.createElement("h1");
pinkHeaderChild.textContent = "I'm in a div";

const pinkParaChild = document.createElement("p");
pinkParaChild.textContent = "ME TOO!";

pinkDiv.appendChild(pinkHeaderChild);
pinkDiv.appendChild(pinkParaChild);

container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", () =>
{
    alert("Hello World");
});
btn3.addEventListener("click", function (e)
{
    console.log(e.target);
});
btn3.addEventListener("click", function (e)
{
    e.target.style.background = "blue";
});
