
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
        // console.log(data[page_name][0].time_table);  // "21 minutes"//
        // console.log(data[page_name][0].instructions);
        // console.log(data[page_name][0].ingredients);
        // console.log(data[page_name][0].needed_equipment);
        document.getElementById("title_text").innerHTML = data[page_name][0].recipe_name;
        document.getElementById("instructions_text").innerHTML = data[page_name][0].instructions;

        // Create a list item for each wizard
        // and append it to the list
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


        document.getElementById("time_table_text").innerHTML = data[page_name][0].time_table;

        let image = document.getElementById("cookie_image");
        image.src = data[page_name][0].finished_product_image_link;
        //image.appendChild(image.src);

    });
