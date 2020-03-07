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
let input = d3.select('#datetime');

function clickHandler() {
    let inputValue = input.property("value");
    let filtered = data.filter((item)=> item.datetime===inputValue);
    console.log(filtered);
    tbody.text("");
    addEntry(filtered);
}

button.on('click', clickHandler);
