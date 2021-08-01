let headers = [
	{id: "gameHeader", name: "Games I've Made", image: "https://lh3.googleusercontent.com/proxy/rxiF0UO7bUKL44G2peDaZtWmr977ZLx_54Wgs-Y0dkgGyi1xma46HfmipqbyQOT-Scyv63sAE2nsIIruK7kzQNBlPgJwLbsJpcV7NABIYtQ-dXDluOkPAA"},
	{id: "artHeader", name: "My Artwork", image: "https://lh3.googleusercontent.com/l_dk5jlgtK6B8_qrsMMR-DkCQE0w-PQBWrVyLhRBOQD3LBIe2NNoPp8EWdss7hgETIWBzNo8OnHxrP7Xt8v-xEobAwwj1_ogOV6qzu8maT-nlAyLC0rNpTjNQaDQAXgA6hQNS2iYGiXUiZhNjlp0j6FZGQVRm7c3hv8tW00g7hYA9ahRKUCqDjSzBKZ_H6suurF7mQcSo8CmCSSHj4LembYuQmf8ksdAM3Ij6n4-jrdJ-Hgc0sMLa3Fk9FidTSsVZd6R6RaDrPwah7PdfCTiZOYvA_hs4I9N_vkgIScz5C-bb1cKCeCeEzCll_-lNDghHIHNoSUGUsK2ddK3UkjgTMbNcuWXHUSu3i6nzXSl6jUNSJ6SFB88ZXmrfpqK_d1tieIbAjYAwabqecDfadlUBtKTlMfdkNwqCiZhrYIg_ViVyjaG18IaKFycKqYXyYKhZpVxmnBq1C5ZLFKFbwwfKLLH8Js8VtW5SzZyfBIbbeEp8fCPG9GSFsin8PBijpYRBu3_VPnaID6B78kg6xtWCAcn6TbAcX1fl_0S3EsrfTwLjBT6Y3-iBC8wj43O6tawLIVFETrTjhJUY56HqzdVM3lqh0ZRFUudpbTEultzUzHHVPLvqI9PeRksuqGPU7122sHVvQO1_m8hLM_a5g_sM_8i01K9MvkKdmQITNJVIMuTLbajmchmAX9HQHwgqvAiMH9mXiZDhg-X7OpJfZc=w1915-h1078-no?authuser=0"},
	{id: "toolHeader", name: "Tools I Use", image: "https://lh3.googleusercontent.com/proxy/TkEmg9k5MSq_Ie5JnYc0MB9S6HD_RxcSbLPvB-bmZo0tg1w5b6iEBE0-4oShLtu65x6suNXdSRX7jmWkvCjpvHLWGKaOOKOtPGVYLAZrqoYvCuhwjhscig"}
]

let tools = [
		{name: 'Unity', link: 'https://unity.com/', description: 'Unity is a cross-platform game engine developed by Unity Technologies. It was originally released in 2005 for the Xbox, and has since been developed by many companies to power their games.'},
		{name: 'Blender', link: 'https://www.blender.org/', description: 'Blender is a free and open-source 3D computer graphics software product created by the Blender Foundation, a non-profit organization based in Amsterdam, Netherlands.'},
		{name: 'Gravity Sketch', link: 'https://gravitysketch.com/', description: 'Gravity Sketch is a free 3D virtual reality software product created by the Gravity Sketch Foundation, an organization based in London, UK.'},
		{name: 'Roblox', link: 'https://www.roblox.com/', description: 'Roblox is a free 3D game engine created by the Roblox Corporation, a company based in San Mateo, California.'}
];

let games = [
		{name: "Well Chess But Actually No", 
		 link: "https://mikeibrahim.itch.io/chess-3", 
		 image: "https://img.itch.zone/aW1nLzUyMTY4ODMucG5n/315x250%23c/cL19m2.png", 
		 description: "Chess but with a twist!"},
		{name: "Superhot Dungeons",
		 link: "https://mikeibrahim.itch.io/superhot-dungeons",
		 image: "https://img.itch.zone/aW1nLzYyOTQ5OTMuanBn/315x250%23c/%2BbfdIW.jpg",
		 description: "A never-ending dungeon crawler where time moves only when you do!"},
		{name: "Hyperdrive",
		 link: "https://mikeibrahim.itch.io/hyperdrive",
		 image: "https://img.itch.zone/aW1nLzY2Mjk2NDEuanBn/315x250%23c/KLDiHT.jpg",
		 description: "Fast paced, endless runner with multiple ships for every playstyle."},
		{name: "Retro Rush",
		 link: "https://mikeibrahim.itch.io/retro-rush",
		 image: "https://img.itch.zone/aW1nLzQ0NTYwMjkuanBn/315x250%23c/TdWQUP.jpg",
		 description: "A fast paced top-down shooter with exciting upgrades!"}
];

let art = [
		{name: "Lost In Space",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLWX9aOi5S2shl32PGnTvHGaVCmlS3HGEvLkyTx26tKgDNdWn74Lb4ldPW7U7DDlvNasEhw-sHSc_NpjGoOQw-iVw0B6GFfuxBuUCK8slxBI5uvYkXDHoUl7kojf0w6AZufh_iIQ3kQC9BWWxXC5VMVF=w1920-h1080-no?authuser=0",
		 description: "Made in Gravity Sketch & Blender"},
		{name: "Rundas",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLV9ycyvL2wDRVFwBQ7Jcaqq5KnQHJ5O2T9CJUvDCV8YJbc2Q1ka-N92tK3EsF4g4sm6w8LAFLIGhjuryo9F6CpIBGicYLfHncGf24irYUvBZTB7Z3o737O2jHULzpVf4SLf6MdvBltfr3kBajCbQ3jK=w1920-h1080-no?authuser=0",
		 description: "Made in Gravity Sketch & Blender"},
		{name: "Alien",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLVLYzGeNaOXXN7vzRLG16tU2Wpv8A6v5VG9fmHPdTD4cmfRoC54UQKlXZzFxvDoEXRYO8aMApdhOI_gxnkE9b7tkRu9H04IhXfcaZRNdTnyJHNcMG3yXpcjX3e3GMJcQuW7y8bnIkl_2j6LA37sioXa=w1920-h1080-no?authuser=0",
		 description: "Made in Gravity Sketch & Blender"},
		{name: "Spider Crab",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLX65F9bKmJQV318SNH9P0-Wv-q2oWFS27HHCYex-cts3F4cDf-IRYQjDh2lml4t7CpkEYgRjOx4uyenbqeSgOjIRunRhitRtOy1eTMoD_12M-IWCqkwZ-OiZEr-hOOEMeQUD_Y03eTYa-C-9C60trPN=w1920-h1080-no?authuser=0",
		 description: "Made in Gravity Sketch & Blender"},
		{name: "Dragon Shrimp",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLWgEfQqUDEIPvKHjTDASQ3ajAl9wBXXImUdCyMhhbeoTdf-Gt2-cFA-XQcRtxI4DTYlOMyYFwOOZRu-cb5-iOMFz5kCdC2tEC4lk2oH2AQDxpiVYAk2rkCpzkOn1pvCV6nvv5QNBAPz7atNs95tvkzv=w1920-h1080-no?authuser=0",
		 description: "Made in Gravity Sketch & Blender"},
		{name: "Imperial Duel",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLWPs4GHg3CiP2hHpqn4zwoEccFGuNtLIONO4tDIBFfGnVhsg_dhDiVo71Hw34pfLnQR1FWB1HzyaC9KA4aKHss1Iogm88J2ncH2AB2n-oFke2ME0udHQsnBHm_juivFnyhMx0Vdskd19_cOzPb8_g0Y=w2625-h1968-no?authuser=0",
		 description: "Made in Adobe Fresco"},
		{name: "Balance",
		 image: "https://lh3.googleusercontent.com/pw/AM-JKLUxmpYINiCzgM5qQOtf3XYqmVNanJYEnkMWg21WlwRUkg2Xd-hc6DJeckwgASt2s7M7Y8mA-j78qml0nd9HkwzAO8PA4tigRy-9u9289iBcagGcABCQ-LTrZbcM7e6YU-OgPD30uyvdBcYANP0dIBHH=w1440-h1079-no?authuser=0",
		 description: "Made in Adobe Fresco"}
]

// make the above comment into javascript so it can be dynamically added to the page
function makeheader(parent, name, image) {
	let header = document.createElement("div");
	header.className = "col-lg-12 text-center";
	
	// // make the background of the header an image
	// let background = document.createElement("img");
	// background.src = image;
	// background.className = "headerImage img-responsive";
	// header.appendChild(background);
	
	let title = document.createElement("h2");
	title.className = "headerText section-heading";
	title.innerHTML = name;
	header.appendChild(title);
	
	// let lineBreak = document.createElement("hr");
	// lineBreak.className = "my-4";
	// header.appendChild(lineBreak);
	parent.style.backgroundImage = "url(" + image + ")";
	parent.appendChild(header);
}

function makeCell(parent, name, link, image, description, minimal=false) {
	// Create the cell
	let cell = document.createElement("div");
	cell.className = "cell col-lg-4 col-md-6 text-center";
	
	// Create the link
	let cellLink = document.createElement("a");
	cellLink.href = link;
	cellLink.target = "_blank";
	cell.appendChild(cellLink);
	
	// Create the image
	if (image) {
		let cellImage = document.createElement("img");
		cellImage.src = image;
		cellImage.alt = name;
		cellImage.className = "img-fluid cellImage";
		cellLink.appendChild(cellImage);
	}

	// Create the name
	let cellName = document.createElement("h3");
	cellName.innerText = name;
	cellLink.appendChild(cellName);

	// Create the description
	let cellDescription = document.createElement("p");
	cellDescription.className = "text-muted";
	cellDescription.innerText = description;
	cell.appendChild(cellDescription);

	// Store the cell in the parent
	parent.appendChild(cell);
}

// HEADERS
for (let i = 0; i < headers.length; i++) {
	let id = headers[i].id;
	let parent = document.getElementById(id);
	makeheader(parent, headers[i].name, headers[i].image);
}

// GAMES
// let gameHeader = document.getElementById("gameHeader");
// makeheader(gameHeader, "Games I've Made");
for (let i = 0; i < games.length; i++) {
	let gameHolder = document.getElementById("gameHolder");
	makeCell(gameHolder, games[i].name, games[i].link, games[i].image, games[i].description);
}

// ART
// let artHeader = document.getElementById("artHeader");
// makeheader(artHeader, "My Artwork");
for (let i = 0; i < art.length; i++) {
	let artHolder = document.getElementById("artHolder");
	makeCell(artHolder, art[i].name, art[i].image, art[i].image, art[i].description);
}

// TOOLS
// let toolHeader = document.getElementById("toolHeader");
// makeheader(toolHeader, "Tools I Use");
for (let i = 0; i < tools .length;i++) {
	let toolHolder = document.getElementById("toolHolder");
	makeCell(toolHolder, tools[i].name, tools[i].link, null, tools[i].description);
}

// if a cell is in the viewport, add the cell_animation class to it, otherwise, remove it
const cellHolders = document.querySelectorAll('.cellHolder');
cellHolders.forEach(cellHolder => {
	// for each cell in the cellHolder, add the observer
	const cells = cellHolder.querySelectorAll('.cell');
	cells.forEach(cell => {
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					cell.classList.add('cell_animation');
					cell.classList.remove('cell_hidden');
				} else {
					cell.classList.remove('cell_animation');
					cell.classList.add('cell_hidden');
				}
			});
		});
		observer.observe(cell);
	});
});