// JavaScript source code


 // var $ = $.noConflict(true);



  $(document).ready(function() {
	  if (window.location.pathname.indexOf('responsive-book.aspx') == -1 ){
		$(function() {

          $( "#DateFrom" ).datepicker({
              dateFormat: 'mm/dd/yy',
              changeMonth: true,
              changeYear: true,  minDate: 0
          });
          $( "#DateFrom" ).datepicker( "option", "showAnim","clip" );
          $( "#DateTo" ).datepicker({
              dateFormat: 'mm/dd/yy',
              changeMonth: true,
              changeYear: true
            ,  minDate: 0     });
          $( "#DateTo" ).datepicker( "option", "showAnim","clip" );
          /*$("#DateFrom").val( "Select Date..");
    $("#DateTo").val( "Select Date..");
    */

          var firstLoad = true;

          $('#DateFrom').change(function(){
              test =  $('#DateFrom').datepicker('getDate');
              testm = new Date(test.getTime());
              testm.setDate(testm.getDate() + 1);

              var date2 = $('#DateFrom').datepicker('getDate', '+1d');
              date2.setDate(date2.getDate() + 7);
              $('#DateTo').datepicker('setDate', date2);	
              $('#booking-accordion .field.dateto span').hide();

              $("#DateTo").datepicker("option", "minDate", testm);
              var d1 =  $('#DateFrom').datepicker('getDate');
              var d2 =  $('#DateTo').datepicker('getDate');
              var diff = 0;
              if (d1 && d2) {
                  diff = Math.floor((d2.getTime() - d1.getTime()) / 86400000);
                  // ms per day
                  if (diff<1){
                      if (firstLoad){
                          firstLoad = false;
                      }
                      else{
                          test =  $('#DateFrom').datepicker('getDate');
                          testm = new Date(test.getTime());
                          testm.setDate(testm.getDate() + 1);

                          $("#DateTo").datepicker("option", "minDate", testm);
                          $('#DateTo').val("");
                          $("#dpErrorMsg").html("Plesae select a departure after your arrival date.");
                      }
                  }
                  else{
                      if (typeof $('check-out').val() != "undefined"){
                          $("#dpErrorMsg").html("The Arrival Date must be before the Departure Date.");
                          $('#DateTo').focus();
                      }
                  }
              }

          });

          $('#DateTo').change(function(){

              var d1 =  $('#DateFrom').datepicker('getDate');
              var d2 =  $('#DateTo').datepicker('getDate');
              var diff = 0;
              if (d1 && d2) {

                  diff = Math.floor((d2.getTime() - d1.getTime()) / 86400000);
                  // ms per day
                  if (diff<1){

                      $("#dpErrorMsg").html("The minimum night stay must be at least 1 day.");
                      $('#DateTo').val("");
                  }
                  else{
                      test =  $('#DateFrom').datepicker('getDate');
                      testm = new Date(test.getTime());
                      testm.setDate(testm.getDate() + 1);

                      $("#DateTo").datepicker("option", "minDate", testm);
                  }
              }

          });
      } );

      if (location.pathname == "/search.aspx"){

          $("#propertychooser").appendTo("#filterContainer");

      }  
	  }

  });
