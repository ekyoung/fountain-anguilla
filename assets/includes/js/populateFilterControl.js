window.onload = populateFilterControl;

function populateFilterControl(){

var queryString = window.location.search;
queryString = queryString.substring(1);
var temp = new Array();

queryString = queryString.replace( /=/g, "&");

temp = queryString.split("&");


	for (var i=1; i < temp.length; i++)
	{
		if ((temp[i] == "ad") && (temp[i+1] != "undefined"))
		{
			var ad = temp[i+1];
			
			var pluses = new RegExp("[\+]{1,}", "g");
			ad = ad.replace(pluses, " ").split(" ");
			var dateStr = "";
			
			if (ad[1] == "jan"){
			month = "01";
			}
			if (ad[1] == "feb"){
			month = "02"
			}
			if (ad[1] == "mar"){
			month = "03";
			}
			if (ad[1] == "apr"){
			month = "04";
			}
			if (ad[1] == "may"){
			month = "05";
			}
			if (ad[1] == "jun"){
			month = "06";
			}
			if (ad[1] == "jul"){
			month = "07";
			}
			if (ad[1] == "aug"){
			month = "08";
			}
			if (ad[1] == "sep"){
			month = "09";
			}
			if (ad[1] == "oct"){
			month = "10";
			}
			if (ad[1] == "nov"){
			month = "11";
			}
			if (ad[1] == "dec"){
			month = "12";
			}
			dateStr = month;
			
			if ((ad[0] > 0) && (ad[0] <= 31)){
				 if (ad[0] <= 9){
				dateStr += "/" + ad[0] + "/"
				}else{
				dateStr += "/" + ad[0] + "/"
				}
			
			dateStr += ad[2];
			var elements = document.getElementsByClassName("DateFrom");
			
			for (var j = 0; j < elements.length; j++) {
    elements[j].value = dateStr;
}
			}
		}
		
		if ((temp[i] == "dd") && (temp[i+1] != "undefined"))
		{
			var ad = temp[i+1];
			
			var pluses = new RegExp("[\+]{1,}", "g");
			ad = ad.replace(pluses, " ").split(" ");
			var dateStr = "";
			
			if (ad[1] == "jan"){
			month = "01";
			}
			if (ad[1] == "feb"){
			month = "02"
			}
			if (ad[1] == "mar"){
			month = "03";
			}
			if (ad[1] == "apr"){
			month = "04";
			}
			if (ad[1] == "may"){
			month = "05";
			}
			if (ad[1] == "jun"){
			month = "06";
			}
			if (ad[1] == "jul"){
			month = "07";
			}
			if (ad[1] == "aug"){
			month = "08";
			}
			if (ad[1] == "sep"){
			month = "09";
			}
			if (ad[1] == "oct"){
			month = "10";
			}
			if (ad[1] == "nov"){
			month = "11";
			}
			if (ad[1] == "dec"){
			month = "12";
			}
			dateStr = month;
			
			if ((ad[0] > 0) && (ad[0] <= 31)){
				 if (ad[0] <= 9){
				dateStr += "/" + ad[0] + "/"
				}else{
				dateStr += "/" + ad[0] + "/"
				}
			
			dateStr += ad[2];
			var elements = document.getElementsByClassName("DateTo");
			
			
			for (var j = 0; j < elements.length; j++) {
              elements[j].value = dateStr;
            }
			}
		}

								if (temp[i] == "starrating"){
									var elements = document.getElementsByClassName('starratingsearchpage');
									for (var j = 0; j < elements.length; j++) {
										//alert(temp[i+1] + ' - ' + elements[j].value);
										if (temp[i+1] == elements[j].value){
											elements[j].setAttribute("checked", "true");
										}
                                	}
								}

                                if (temp[i] == "bedrooms"){
                                var elements = document.getElementsByClassName("Bedrooms");
								
								for (var j = 0; j < elements.length; j++) {
                                 elements[j].value = temp[i+1];
                                }

                               }

                                if (temp[i] == "bathrooms"){
                                var elements = document.getElementsByClassName("Bathrooms");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].value = temp[i+1];
                                }

                               }

                               if (temp[i] == "sleeps"){
                                var elements = document.getElementsByClassName("Sleeps");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].value = temp[i+1];
                                }

                               }

                              if (temp[i]=="pool"){
                              var elements = document.getElementsByClassName("pool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i] == "lid"){
                                var elements = document.getElementsByClassName("locationID");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].value = temp[i+1];
                                }

                               }
							   
							   if (temp[i] == "golf"){
                                var elements = document.getElementsByClassName("golf");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "fishing"){
                                var elements = document.getElementsByClassName("fishing");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "clubhouse"){
                                var elements = document.getElementsByClassName("clubhouse");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "bbq"){
                                var elements = document.getElementsByClassName("bbq");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "kitchen"){
                                var elements = document.getElementsByClassName("Kitchen");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "laundry"){
                                var elements = document.getElementsByClassName("laundry");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "dock"){
                                var elements = document.getElementsByClassName("Dock");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "fireplace"){
                                var elements = document.getElementsByClassName("fireplace");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }

							   if (temp[i] == "aircon"){
                                var elements = document.getElementsByClassName("Aircon");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "nearb"){
                                var elements = document.getElementsByClassName("NearBeach");
								
								for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }

                               }
							   
							   if (temp[i] == "propertytype"){
                                var elements = document.getElementsByClassName("radioType");
								
								for (var j = 0; j < elements.length; j++) {
                                	if(elements[j].value == temp[i+1]){
                                		elements[j].checked	= true;
                                	}
                                }

                               }
							   
							   if (temp[i]=="aircon"){
                              var elements = document.getElementsByClassName("aircon");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }
							  
							  if (temp[i]=="orderbyprice"){
                              var elements;
							  
							  if (temp[i+1] == "a"){
								  elements = document.getElementsByClassName("price");
							  }
							  
							  if (temp[i+1] == "d"){
								  elements = document.getElementsByClassName("price");
							  }
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }
							  
							  if (temp[i]=="nearb"){
                              var elements = document.getElementsByClassName("nearbeach");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="spa"){
                              var elements = document.getElementsByClassName("spa");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="gameroom"){
                              var elements = document.getElementsByClassName("gameroom");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="gasfree"){
                              var elements = document.getElementsByClassName("freegas");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="sfp"){
                              var elements = document.getElementsByClassName("southpool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="cv"){
                              var elements = document.getElementsByClassName("conservationview");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="wv"){
                              var elements = document.getElementsByClassName("waterview");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="pf"){
                              var elements = document.getElementsByClassName("privacyfence");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="cg"){
                              var elements = document.getElementsByClassName("communalgym");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="wifi"){
                              var elements = document.getElementsByClassName("wifi");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }


                              if (temp[i]=="nfp"){
                              var elements = document.getElementsByClassName("northpool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="efp"){
                              var elements = document.getElementsByClassName("eastpool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="wfp"){
                              var elements = document.getElementsByClassName("westpool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="internet"){
                              var elements = document.getElementsByClassName("internet");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="pets"){
                              var elements = document.getElementsByClassName("petfriendly");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="linprov"){
                              var elements = document.getElementsByClassName("linensprov");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="tenniscourts"){
                              var elements = document.getElementsByClassName("tenniscourts");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="NearThemeParks"){
                              var elements = document.getElementsByClassName("NearThemeParks");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="smoking"){
                              var elements = document.getElementsByClassName("smoking");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="fc"){
                              var elements = document.getElementsByClassName("freecalls");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="wc"){
                              var elements = document.getElementsByClassName("wheelchair");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="cwprov"){
                              var elements = document.getElementsByClassName("CookwareProvided");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="garageax"){
                              var elements = document.getElementsByClassName("garageaccess");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              if (temp[i]=="gc"){
                              var elements = document.getElementsByClassName("gatedcom");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }
							  
							  if (temp[i]=="PoolHeat"){
                              var elements = document.getElementsByClassName("heatedpool");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }
							  
							  if (temp[i]=="SeaOceanView"){
                              var elements = document.getElementsByClassName("SeaOceanView");
							  
							  for (var j = 0; j < elements.length; j++) {
                                elements[j].checked = true;
                                }
                              }

                              $("input[type=checkbox]").each(function(){
								if (this.checked){
								$("." + $(this).attr("id")).css("background-position", "0px -16px")
								}
							  });
	
	}

}