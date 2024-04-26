// Question 1:
const container = document.getElementById("container");

// Question 2:
const containerQuery = document.querySelector("#container");

// Question 3:
const second = document.getElementsByClassName("second");

// Question 4:
const ol = document.querySelector("ol");
const thirdOl = ol.getElementsByClassName("third");

// Question 5:

// container.innerText += "Hello!"; (BROKE THE UL AND OL ELEMENTS WHEN ATTEMPTED THIS WAY)
container.innerHTML += "<br>Hello!";

// Question 6:
const footer = document.querySelector("div.footer");
footer.className += " main";

// Question 7:
footer.className = "footer";

// Question 8:
const ul = document.querySelector("ul");
const newLi = document.createElement("li");

// Question 9:
newLi.innerText = "four";

// Question 10:
ul.append(newLi);

// Question 11:
const greenLi = ol.querySelectorAll("li");

for (let lists of greenLi) {
  lists.style.color = "green";
}

// Question 12:
footer.remove();
