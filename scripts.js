
(function(){
    var Contact = {
        "rows":10,
        "FirstName":"{firstName}",
        "LastName":"{lastName}",
        "City":"{city}",
        "Address":"{streetAddress}",
        "Email":"{email}",
        "Phone":"{phone|format}"
    }

    var url = "http://www.filltext.com/?callback=?";
    $.getJSON( url, Contact)
        .done(function( data ) {
            $.each( data, function( i, item ) {
                var html =
                    "<article>Name: " + item.FirstName +" " + item.LastName + "</span>" +
                    "<article>City: " + item.City + "</article>"+
                    "<article>Address: " + item.Address + "</article>"+
                    "<article>Email: " + item.Email + "</article>"+
                    "<article>Phone: " + item.Phone + "</article>";
                $("<section/>").html(html).appendTo("#container");
            });
        });



    
    
})();