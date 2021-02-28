const fs = require('fs');
const got = require('got');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// const vgmUrl= 'https://www.vgmusic.com/music/console/nintendo/nes';
const vgmUrl= 'https://www.indiabix.com/general-knowledge/general-science/';

got(vgmUrl).then(response => {
  	const dom = new JSDOM(response.body);
  // console.log(dom.window.document.querySelectorAll("div.div-top-left").textContent);
  // console.log(dom.window.document.querySelectorAll("div.div-top-left"));
  // console.log(dom.window.document.querySelectorAll("div.bix-div-container"));
	// dom.window.document.querySelectorAll("td.bix-td-qtxt").forEach(link => {
	dom.window.document.querySelectorAll("table.bix-tbl-container").forEach(link => {
		// console.log(link);
		console.log(link.querySelector("td.bix-td-qtxt").textContent);
		// link.querySelectorAll("tr").forEach( option => {
		// console.log(link.querySelector("table.bix-tbl-options").textContent);
		
		link.querySelectorAll("td.bix-td-miscell").forEach( answers => {

			link.querySelectorAll("table.bix-tbl-options").forEach( option => {
						// console.log(option.querySelector("td.bix-td-option").textContent);
						var a = option.textContent.replace("\n", " ");
						// console.log(a + "\n");
						// console.log("*******************");
						option.querySelectorAll("tr").forEach(sub => {
							console.log(sub.textContent.replace("\n", " "));
						});

						// console.log(option.querySelector("p.mx-green mx-bold"));
						// console.log(option.querySelector("div.bix-ans-description"));

						// console.log("	");
					});

			console.log(answers.querySelector(".mx-green.mx-bold").textContent + answers.querySelector(".jq-hdnakqb.mx-bold").textContent);
			// console.log(answers.querySelector(".jq-hdnakqb.mx-bold").textContent);
			// jq-hdnakqb mx-bold
			// console.log(answers.querySelector("div.bix-ans-description").textContent);

		});
		
	});


// .forEach(link => {
//     console.log(link.href);
//   }

  // console.log(dom.window.document.querySelector("p.mx-green mx-bold").textContent);
}).catch(err => {
  console.log(err);
});
