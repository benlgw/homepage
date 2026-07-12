const projects = document.querySelector(".projects");

function randomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function createCard(number) {
	const card = document.createElement("div");
	card.classList.add("card");

	const cardImg = document.createElement("div");
	cardImg.classList.add("img");
	cardImg.style.backgroundColor = randomColor();
	card.append(cardImg);

	const cardInfo = document.createElement("div");
	cardInfo.classList.add("card-info");
	card.append(cardInfo);

	const cardInfoHeader = document.createElement("header");
	card.append(cardInfoHeader);

	const CardInfoTitle = document.createElement("h2");
	CardInfoTitle.textContent = "Project Name";
	cardInfoHeader.append(CardInfoTitle);

	const cardInfoIcons = document.createElement("div");
	cardInfoIcons.classList.add("icons");
	cardInfoHeader.append(cardInfoIcons);

	const cardIconGithub = document.createElement("img");
	cardIconGithub.src = "assets/icons/github-original.svg";
	cardIconGithub.alt = "github logo";
	cardInfoIcons.appendChild(cardIconGithub);

	const cardIconNewTab = document.createElement("img");
	cardIconNewTab.src = "./assets/icons/open-in-new.svg";
	cardIconNewTab.alt = "open in new tab";
	cardInfoIcons.appendChild(cardIconNewTab);

	const cardInfoSection = document.createElement("section");
	cardInfoSection.textContent =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore tenetur dolorum voluptas incidunt numquam perspiciatis similique cum beatae quam hic dolore aspernatur cumque dignissimos exercitationem esse, nisi voluptatibus porro.";
	card.append(cardInfoSection);

	projects.append(card);
}

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 1; i <= 6; i++) {
		createCard(i);
	}
});
