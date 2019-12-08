
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


//Loads JSON file using npm json server
//Instructions were found here https://www.npmjs.com/package/json-server
fetch("./cookie_data.json")
    .then(function(resp){
        return resp.json();
    })
    .then(function(data) {
        console.log(data[page_name][0].time_table);  // "21 minutes"//
        console.log(data[page_name][0].instructions);
        console.log(data[page_name][0].ingredients);
        console.log(data[page_name][0].needed_equipment);
        document.getElementById("title_text").innerHTML = data[page_name][0].recipe_name;
        document.getElementById("instructions_text").innerHTML = data[page_name][0].instructions;
        document.getElementById("ingredients_text").innerHTML = data[page_name][0].ingredients;
        document.getElementById("equipment_text").innerHTML = data[page_name][0].needed_equipment;
        document.getElementById("time_table_text").innerHTML = data[page_name][0].time_table;
    });
