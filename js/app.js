$(document).ready(function(){
    $("#search").click(function(){
      $("#table-1 tbody").html("");

       $.ajax({
        method: "GET",
        url: "/jogo/rest/product/getallproducts",
        dataType: "json",
        beforeSend: function(){
                      $("#search").attr("class","disabled button imput-rapi-button");
                      $("#search").val("Loading");
                    }
        })

        .fail(function(){

          alert("Error");

        })

        .done(function(data){

          $("#table-1").show();
          $.each(data, function(i, item)
           {
              $("#table-1 tbody").append("<tr>");
              $("#table-1 tbody").append("<td>"+item.code+"</td>");
              $("#table-1 tbody").append("<td>"+item.name+"</td>");
              $("#table-1 tbody").append("<td>"+item.cost+"</td>");
              $("#table-1 tbody").append("</td>");
              $("#table-1 tbody").append("<tr>");

           });

        })

        .always(function(data){

          $("#search").attr("class","success button imput-rapi-button");
          $("#search").val("Play");

        })

    });
});
