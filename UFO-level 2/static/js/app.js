// from data.js
let tableData = data;

// YOUR CODE HERE!
let tbody = d3.select("tbody");
function addEntry(list) {
    list.forEach((item) => {
        let row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            let cell = row.append("td");
                cell.text(value);
        });
    })
};
addEntry(data);

let button = d3.select("#filter-btn");
let inputdate = d3.select('#datetime');
let inputcity = d3.select('#city');
let inputstate = d3.select('#state');
let inputcountry = d3.select('#country');
let inputshape = d3.select('#shape');

function clickHandler() {
    let inputDate = inputdate.property("value");
    let inputCity = inputcity.property("value");
    let inputState = inputstate.property("value");
    let inputCountry = inputcountry.property("value");
    let inputShape = inputshape.property("value");
    
    tbody.text("")

    if (inputDate){
    let filteredDate = data.filter((item)=> {item.datetime===inputDate})
    };
    //     filteredCity = data.filter((item)=> {item.city===inputCity}),
    //     filteredState = data.filter((item)=> {item.state===inputState}),
    //     filteredCountry = data.filter((item)=> {item.country===inputCountry}),
    //     filteredShape = data.filter((item)=> {item.shape===inputShape});
    
    addEntry(filteredDate);
    // addEntry(filteredDate,filteredShape,filteredState,filteredCity,filteredCountry);
};

button.on('click', clickHandler);
