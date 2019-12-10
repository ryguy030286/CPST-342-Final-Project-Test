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
        document.getElementById("title_text").innerHTML = data[page_name][0].recipe_name;
        document.getElementById("time_table_text").innerHTML = data[page_name][0].time_table;

        //Code from: https://gomakethings.com/two-more-ways-to-create-html-from-an-array-of-data-with-vanilla-js/
        let instruction_list = document.getElementById("instructions_list");
        data[page_name][0].instructions.forEach(function (instruction) {
            var li = document.createElement('li');
            li.textContent = instruction;
            instruction_list.appendChild(li);
        });

        let ingredient_list = document.getElementById("ingredients_list");
        data[page_name][0].ingredients.forEach(function (ingredient) {
            var li = document.createElement('li');
            li.textContent = ingredient;
            ingredient_list.appendChild(li);
        });

        let equipment_list = document.getElementById("equipment_list");
        data[page_name][0].needed_equipment.forEach(function (equipment) {
            var li = document.createElement('li');
            li.textContent = equipment;
            equipment_list.appendChild(li);
        });

        let image = document.getElementById("cookie_image");
        image.src = data[page_name][0].finished_product_image_link;
        //image.appendChild(image.src);

    });

textFit(document.querySelector("h3"));