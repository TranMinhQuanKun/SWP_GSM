function showProductStatistic() {
    var request = new XMLHttpRequest();
    
    var url = "GetProductStatistic";
    url += "?date-from=" + document.getElementById("date-from").value;
    url += "&date-to=" + document.getElementById("date-to").value;
    url += "&sort-by=" + document.getElementById("sort-by").value;
    
    request.open('GET', url, true);
    request.onload = function () {
        var productStatistic = JSON.parse(this.responseText);
        renderProductStatistic(productStatistic);
    };
    request.send();
}

function renderProductStatistic(productStatistic) {
    
//    var table2 = $('#product-stat-area').DataTable();
// 
////// Sort by column 1 and then re-draw
//table2
//    .order( [[ 3, "desc" ]] )
//    .draw();

    if (productStatistic.length === 0) {
        document.getElementById("not-found-label").style = "display:block";
    } else {
        document.getElementById("not-found-label").style = "display:none";
    }
    
    var table = document.getElementById("product-stat-body");
    table.innerHTML = "";
    
    for (i = 0; i < productStatistic.length; i++) {
        var row = table.insertRow(-1);
        
        var cellNo = row.insertCell(0);
        var cellProductName = row.insertCell(1);
        var cellQuantity = row.insertCell(2);
        var cellTotal = row.insertCell(3);
        
        cellNo.innerHTML = i + 1;
        cellProductName.innerHTML = productStatistic[i].productName;
        cellQuantity.innerHTML = productStatistic[i].quantity;
        cellTotal.innerHTML = formatNumber(productStatistic[i].total);
    }
}