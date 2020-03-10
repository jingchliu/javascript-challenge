// from data.js
let tableData = data;



// YOUR CODE HERE! -- html code added to index.html
// let tbody = d3.select("tbody");
// function addEntry(list) {
//     list.forEach((item) => {
//         let row = tbody.append("tr");
//         Object.entries(item).forEach(([key, value]) => {
//             let cell = row.append("td");
//                 cell.text(value);
//         });
//     })
// };
// addEntry(data);
 
let button = d3.select("#filter-btn");
let inputdate = d3.select('#datetime');
let inputcity = d3.select('#city');
let inputstate = d3.select('#state');
let inputcountry = d3.select('#country');
let inputshape = d3.select('#shape');
let tr = d3.select("tr");

function clickHandler() {
    $("tr").hide().filter(function(){
        let inputDate = inputdate.property("value");
        let inputCity = inputcity.property("value");
        let inputState = inputstate.property("value");
        let inputCountry = inputcountry.property("value");
        let inputShape = inputshape.property("value");
        let result = true;
        
        if (inputDate){
            result = result && $(this).text().indexOf(inputDate)>-1;
        };
        if (inputCity){
            result = result && $(this).text().indexOf(inputCity)>-1;
        };

        if (inputState){
            result = result && $(this).text().indexOf(inputState)>-1;
        };

        if (inputCountry){
            result = result && $(this).text().indexOf(inputCountry)>-1;
        };

        if (inputShape){
            result = result && $(this).text().indexOf(inputShape)>-1;
        };
        return result;
    }).show();
}

button.on('click', clickHandler);




