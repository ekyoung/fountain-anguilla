// JavaScript Document
 $(document).ready(function(){
     populateFilterControl();
    
    for (var i = 0; i<16; i++){
      try
      {
        $("#property" + i).appendTo("#propertyResultsConatiner");
      }
      catch(err)
      {
        
      }
    }
    
    if (location.pathname == "/mapsearch.aspx"){
      $( "#propertyResultsConatiner" ).append( $( "#map-canvas" ) );
    }

    $(".dxgvPagerBottomPanel_PlasticBlue").addClass("container");

    if (($("#property1").length == 0) && (location.pathname != "/mapsearch.aspx")) {
        $("#propertyResultsConatiner").append("<h3>Sorry but we do not have any properties that match your search criteria, please try searching again. </h3>");
    }

});
