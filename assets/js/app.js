
// Loads template page and passes button value.
function cookie_page(button_value) {
    //Replaces index page with template page.
    window.open("template.html", "_self");
    localStorage.setItem('page', button_value);
    }

// Returns template page to index page.
function index_page() {
    //Replaces index page with template page.
    window.open("index.html", "_self");
    }

// Loads value of pressed button.
let page_name = localStorage.getItem('page');

// Set HTML tag to value passed by button press.
document.getElementById("title_text").innerHTML = page_name;


//Loads JSON file using npm json server
//Instructions were found here https://www.npmjs.com/package/json-server
fetch("./cookie_data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
       console.log(data.chocolate_chip_cookies[0].time_table);  // "21 minutes"
       document.getElementById("instructions_text").innerHTML = data.chocolate_chip_cookies[0].instructions;
    });
