// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select('tbody');


function clear_table() {
    var table = d3.selectAll("tbody tr").selectAll("td").removeAll;
}

var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");


button.on("click", function() {
  var ufoTable = d3.selectAll("tbody tr").selectAll("td")
  ufoTable.remove();
  console.log("Filter Button clicked");
  var inputValue = inputField.property("value");
  var filteredDate = tableData.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredDate)
  
  filteredDate.forEach(function(ufoData) {
   //console.log(ufoData);
   var row = tbody.append("tr");
   Object.entries(ufoData).forEach(function([key, value]) {
     //console.log(key, value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });
  
});