$(document).ready(function(){
    $("#search").click(function(){
       
       $.ajax({
        method: "GET",
        url: "https://4erer.jelastic.servint.net/jogo/rest/product/getallproducts",
        dataType: "text"
        })
        .done(function(data){
            console.log(data);
           /** data.each(function() {
                    console.log( $( this ) );
              }); **/    
        })
        
    });
});