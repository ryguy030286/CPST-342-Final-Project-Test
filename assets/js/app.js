
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
    let key = localStorage.getItem('page');

// Set HTML tag to value passed by button press.
    document.getElementById("title_text").innerHTML = key;


//Test to load local JSON
fetch("./cookie_data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
       console.log(data);
    });