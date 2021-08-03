//// MOCK JSON FROM GOOGLE FIREBASE ////
let data;
await fetch('data.json')
	.then(response => response.text())
	.then(json => data = JSON.parse(json)[0]);

//// HELPER FUNCTIONS ////
function makeNavbar(projects) {
	// Add projects to navbar
	let navItemHolder = document.getElementById("navItemHolder");
	projects.forEach(item => {
		let navItem = document.createElement("li");
		navItem.className = "nav-item";
		navItem.innerHTML = `<a class="nav-link" href="#${item}Header">${item}</a>`;
		navItemHolder.appendChild(navItem);
	});
}

// make the above comment into javascript so it can be dynamically added to the page
function makeheader(parent, name, image) {
	let header = document.createElement("div");
	header.className = "col-lg-12 text-center";
	
	let headerTitle = document.createElement("h2");
	headerTitle.className = "headerText section-heading";
	headerTitle.innerHTML = name;
	header.appendChild(headerTitle);
	
	parent.style.backgroundImage = "url(" + image + ")";
	parent.appendChild(header);
}

function makeCell(parent, name, description, status, link, image) {
	// Create the cell
	let cell = document.createElement("div");
	cell.className = "cell col-lg-4 col-md-6 text-center";
	
	// Create the link to project
	let cellLink = document.createElement("a");
	cellLink.href = link;
	cellLink.target = "_blank";
	cell.appendChild(cellLink);
	
	// Create the (optional) project image
	if (image) {
		let cellImage = document.createElement("img");
		cellImage.src = image;
		cellImage.alt = name;
		cellImage.className = "img-fluid cellImage";
		cellLink.appendChild(cellImage);
	}

	// Create the project name
	let cellName = document.createElement("h3");
	cellName.innerText = name;
	cellLink.appendChild(cellName);

	// Create the (optional) project status
	if (status) {
		let cellStatus = document.createElement("h5");
		cellStatus.innerText = status;
		cell.appendChild(cellStatus);
	}

	// Create the project description
	let cellDescription = document.createElement("p");
	cellDescription.className = "text-muted";
	cellDescription.innerText = description;
	cell.appendChild(cellDescription);

	// Store the cell in the parent
	parent.appendChild(cell);
}


//// BUILDING THE PAGE ////
let personalInfo = data.personalInfo;
let projects = data.projects;

let title = document.getElementById("title");
title.innerHTML = personalInfo.title;

let usernames = document.querySelectorAll(".username");
usernames.forEach(username => {
	username.innerHTML = personalInfo.username;
});

let bio = document.getElementById("bio");
bio.innerHTML = personalInfo.bio;

// Making the navbar
let projectList = []; // a list of projects
projects.forEach(project => {projectList.push(project.id);});
makeNavbar(projectList);

// Making the projects
let container = document.getElementById("container");
projects.forEach(project => {
	// Headers for each project
	let divHeader = document.createElement("div");
	divHeader.className = "row cellHeader";
	divHeader.id = `${project.id}Header`
	makeheader(divHeader, project.name, project.image);

	// Cell for each project in that cetegory
	let divHolder = document.createElement("div");
	divHolder.className = "row cellHolder";
	project.content.forEach(item => {
		makeCell(divHolder, item.name, item.description, item.status, item.link, item.image);
	});
	
	// Adding the divs to the container
	container.appendChild(divHeader);
	container.appendChild(divHolder);
});

// Cell Animation
const cells = document.querySelectorAll(".cell");
cells.forEach(cell => {
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				cell.classList.add("cell_animation");
				cell.classList.remove("cell_hidden");
			} else {
				cell.classList.remove("cell_animation");
				cell.classList.add("cell_hidden");
			}
		});
	});
	observer.observe(cell);
});