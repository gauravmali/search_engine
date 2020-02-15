$(document).ready(function() {
    $('.product-detail').on('click', function(e) {
        var productTitle = $(this).data('title');
        var productDescription = $(this).data('description');
        var productCountry = $(this).data('country');
        var productPrice = $(this).data('price');
        $(".modal-header #productTitle").val( productTitle );
        $(".modal-body #productDescription").val( productDescription );
        $(".modal-body #productCountry").val( productCountry );
        $(".modal-body #productPrice").val( productPrice );
        $('.detail-modal').modal('show');
    });

    $('.modal-btn-no').on('click', function(e) {
        $('.detail-modal').modal('hide');
    });

    $('.product-sortTable').on('change', function(e) {
        var table, rows, switching, i, x, y, shouldSwitch, select_box, sorting_type, sorting_type_value;
        table = document.getElementById("myTable");
        select_box = document.getElementById("sortingType");
        sorting_type = select_box.options[select_box.selectedIndex].value;
        sorting_type_value = select_box.options[select_box.selectedIndex].text;
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TD")[sorting_type];
                y = rows[i + 1].getElementsByTagName("TD")[sorting_type];
                if (sorting_type_value == 'Sorted by: Highest Price') {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
                else {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                        shouldSwitch = true;
                        break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    });

    $('.product-filterCountry').on('change', function(e) {
        var country_select, table, country, rows;
        country_select = document.getElementById("countryFilter");
        table = document.getElementById("myTable");
        country = country_select.options[country_select.selectedIndex].text;
        rows = table.rows;
        for (i = 1; i < (rows.length); i++) {
            if (rows[i].getElementsByTagName("TD")[1].innerText == country) {
                rows[i].style.display = ''
            }
            else if (country == 'Filter by country'){
                rows[i].style.display = ''
            }
            else {
                rows[i].style.display = 'none'
            }
        }
    });

    $('.goAmount-filter').on('click', function(e) {
        var minAmount, maxAmount, table, rows;
        minAmount = document.getElementById("minAmount").value;
        maxAmount = document.getElementById("maxAmount").value;
        table = document.getElementById("myTable");
        rows = table.rows;
        if ( minAmount && maxAmount ) {
            for (i = 1; i < (rows.length); i++) {
                var fid = rows[i].getElementsByTagName("TD")[3].innerText;
                var amount = fid.substring(1, fid.length);
                if (amount <= minAmount){
                    rows[i].style.display = 'none'
                }
                else if ( amount >= maxAmount ) {
                    rows[i].style.display = 'none'
                }
                else {
                    rows[i].style.display = ''
                }
            }
        }
        else if (maxAmount){
            for (i = 1; i < (rows.length); i++) {
                var fid = rows[i].getElementsByTagName("TD")[3].innerText;
                var amount = fid.substring(1, fid.length);
                if (amount >= maxAmount){
                    rows[i].style.display = 'none'
                }
                else {
                    rows[i].style.display = ''
                }
            }
        }
        else if (minAmount) {
            for (i = 1; i < (rows.length); i++) {
                var fid = rows[i].getElementsByTagName("TD")[3].innerText;
                var amount = fid.substring(1, fid.length);
                if (amount <= minAmount){
                    rows[i].style.display = 'none'
                }
                else {
                    rows[i].style.display = ''
                }
            }

        }
    });

});
