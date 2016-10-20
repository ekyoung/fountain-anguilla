function smit()
{
	var row = getUrlVars()["row"];
	var term = getUrlVars()["term"];
	
var x = window.location.pathname;
if (x == "/mapsearch.aspx"){
var searchURL = "/mapsearch.aspx?";
}else{
	if (row == 1){
		var searchURL = "/search.aspx?row=1";
	}else{
		var searchURL = "/search.aspx?";	
	}

}

/*if (term == 1) {
	var elements = document.getElementById("searchBy").value;
	
	if (elements == "Any"){
		
	}else if (elements == 1){
		searchURL += "&term=1";	
	}else{
		
	}
	}*/

try{
var arrive = document.getElementsByClassName('DateFrom');
for (var k = 0; k < arrive.length; k++) {

if ((arrive[k].value != "Select Date..") && (arrive[k].value != ""))
{
var date = arrive[k].value.split("/");

var month = ""
if (date.length == 3)
{
if (date[0] == 1){
month = "jan";
}
if (date[0] == 2){
month = "feb"
}
if (date[0] == 3){
month = "mar";
}
if (date[0] == 4){
month = "apr";
}
if (date[0] == 5){
month = "may";
}
if (date[0] == 6){
month = "jun";
}
if (date[0] == 7){
month = "jul";
}
if (date[0] == 8){
month = "aug";
}
if (date[0] == 9){
month = "sep";
}
if (date[0] == 10){
month = "oct";
}
if (date[0] == 11){
month = "nov";
}
if (date[0] == 12){
month = "dec";
}
var fullAd = date[1] + "+" + month + "+" + date[2];

}
searchURL += "&ad=" + fullAd;
k = arrive.length;
}
}
}catch(err){console.log("Advanced Search Filter - DateFrom Failure")}

try{
var dep = document.getElementsByClassName('DateTo');
for (var k = 0; k < dep.length; k++) {
if ((dep[k].value != "Select Date..") && (dep[k].value !=""))
{
var date = dep[k].value.split("/");


var month = ""
if (date.length == 3)
{
if (date[0] == 1){
month = "jan";
}
if (date[0] == 2){
month = "feb"
}
if (date[0] == 3){
month = "mar";
}
if (date[0] == 4){
month = "apr";
}
if (date[0] == 5){
month = "may";
}
if (date[0] == 6){
month = "jun";
}
if (date[0] == 7){
month = "jul";
}
if (date[0] == 8){
month = "aug";
}
if (date[0] == 9){
month = "sep";
}
if (date[0] == 10){
month = "oct";
}
if (date[0] == 11){
month = "nov";
}
if (date[0] == 12){
month = "dec";
}
var fullDd = date[1] + "+" + month + "+" + date[2];
}
searchURL += "&dd=" + fullDd;
k = dep.length;
}
}
}catch(err){console.log("Advanced Search Filter - DateTo Failure")}

try{
var searchBy = document.getElementsByClassName('searchBy');
for (var k = 0; k < searchBy.length; k++) {
	
	if (searchBy[k].value == "Any"){
		
	}else if (searchBy[k].value == 1){
		searchURL += "&term=1";	
	}else{
		searchURL += "&term=0";
	}
}
}catch(err){console.log("Advanced Search Filter - Door/Type Failure")}

try{
var bedrooms = document.getElementsByClassName('Bedrooms');
for (var k = 0; k < bedrooms.length; k++) {
if (bedrooms[k].value != "Any" && bedrooms[k].value != "")
{
searchURL += "&bedrooms=" + bedrooms[k].value;
k = bedrooms.length;
}
}
}catch(err){console.log("Advanced Search Filter - Bedrooms Failure")}

try{
var bathrooms = document.getElementsByClassName('bathrooms');
for (var k = 0; k < bathrooms.length; k++) {
if (bathrooms[k].value != "Not Selected" && bathrooms[k].value != "")
{
searchURL += "&bathrooms=" + bathrooms[k].value;
k = bathrooms.length;
}
}
}catch(err){console.log("Advanced Search Filter - Bathrooms Failure")}

try{
var sleeps = document.getElementsByClassName('Sleeps');
for (var k = 0; k < sleeps.length; k++) {
if (sleeps[k].value != "Any" && sleeps[k].value != "")
{
searchURL += "&sleeps=" + sleeps[k].value;
k=sleeps.length;
}
}
}catch(err){console.log("Advanced Search Filter - Sleeps Failure")}

try{
    var loc = document.getElementsByClassName('locationID');
for (var k = 0; k < loc.length; k++) {
    if (loc[k].value.length > 2 && loc[k].value != "Any" && loc[k].value != "")
{
searchURL += "&lid=" + loc[k].value;
k=loc.length;
}
}
}catch(err){console.log("Advanced Search Filter - Location Failure")}

try{
var pool = document.getElementsByClassName('pool');
for (var k = 0; k < pool.length; k++) {
if (pool[k].checked == true)
{
searchURL += "&pool=1" ;
k=pool.length;
}
}
}catch(err){console.log("Advanced Search Filter - Pool Failure")}

try{
var spa = document.getElementsByClassName('spa');
for (var k = 0; k < spa.length; k++) {
if (spa[k].checked == true)
{
searchURL += "&spa=1" ;
k = spa.length;
}
}
}catch(err){console.log("Advanced Search Filter - Spa Failure")}

try{
var gameroom = document.getElementsByClassName('gameroom');
for (var k = 0; k < gameroom.length; k++) {
if (gameroom[k].checked == true)
{
searchURL += "&gameroom=1" ;
k=gameroom.length;
}
}
}catch(err){console.log("Advanced Search Filter - Gameroom Failure")}

try{
var freegas = document.getElementsByClassName('freegas');
for (var k = 0; k < freegas.length; k++) {
if (freegas[k].checked == true)
{
searchURL += "&gasfree=1" ;
k=freegas.length;
}
}
}catch(err){console.log("Advanced Search Filter - Free Gas Failure")}

var southpool = document.getElementsByClassName('southpool');
for (var k = 0; k < southpool.length; k++) {
if (southpool[k].checked == true)
{
searchURL += "&sfp=1" ;
k=southpool.length;
}
}

try{
var conservationview = document.getElementsByClassName('conservationview');
for (var k = 0; k < conservationview.length; k++) {
if (conservationview[k].checked == true)
{
searchURL += "&cv=1" ;
k=conservationview.length;
}
}
}catch(err){console.log("Advanced Search Filter - Conservation View Failure")}

try{
var waterview = document.getElementsByClassName('waterview');
for (var k = 0; k < waterview.length; k++) {
if (waterview[k].checked == true)
{
searchURL += "&wv=1" ;
k=waterview.length;
}
}
}catch(err){console.log("Advanced Search Filter - Water View Failure")}

try{
var privacyfence = document.getElementsByClassName('privacyfence');
for (var k = 0; k < privacyfence.length; k++) {
if (privacyfence[k].checked == true)
{
searchURL += "&pf=1" ;
k=privacyfence.length;
}
}
}catch(err){console.log("Advanced Search Filter - Privacy Fence Failure")}

try{
var communalgym = document.getElementsByClassName('communalgym');
for (var k = 0; k < communalgym.length; k++) {
if (communalgym[k].checked == true)
{
searchURL += "&cg=1" ;
k=communalgym.length;
}
}
}catch(err){console.log("Advanced Search Filter - Communal Gym Failure")}

try{
var Golf = document.getElementsByClassName('golf');
for (var k = 0; k < Golf.length; k++) {
if (Golf[k].checked == true)
{
searchURL += "&golf=1" ;
k=Golf.length;
}
}
}catch(err){console.log("Advanced Search Filter - Golf Failure")}

try{
var fishing = document.getElementsByClassName('fishing');
for (var k = 0; k < fishing.length; k++) {
if (fishing[k].checked == true)
{
searchURL += "&fishing=1";
k=fishing.length;
}
}
}catch(err){console.log("Advanced Search Filter - Fishing Failure")}

try{
var clubhouse = document.getElementsByClassName('clubhouse');
for (var k = 0; k < clubhouse.length; k++) {
if (clubhouse[k].checked == true)
{
searchURL += "&clubhouse=1" ;
k=clubhouse.length;
}
}
}catch(err){console.log("Advanced Search Filter - Clubhouse Failure")}

try{
var tenniscourts = document.getElementsByClassName('tenniscourts');
for (var k = 0; k < tenniscourts.length; k++) {
if (tenniscourts[k].checked == true)
{
searchURL += "&tenniscourts=1" ;
k=tenniscourts.length;
}
}
}catch(err){console.log("Advanced Search Filter - Tennis Courts Failure")}

try{
var wifi = document.getElementsByClassName('wifi');
for (var k = 0; k < wifi.length; k++) {
if (wifi[k].checked == true)
{
searchURL += "&wifi=1" ;
k=wifi.length;
}
}
}catch(err){console.log("Advanced Search Filter - WiFi Failure")}

try{
var northpool = document.getElementsByClassName('northpool');
for (var k = 0; k < northpool.length; k++) {
if (northpool[k].checked == true)
{
searchURL += "&nfp=1" ;
k=northpool.length;
}
}
}catch(err){console.log("Advanced Search Filter - North Facing Pool Failure")}

try{
var eastpool = document.getElementsByClassName('eastpool');
for (var k = 0; k < eastpool.length; k++) {
if (eastpool[k].checked == true)
{
searchURL += "&efp=1" ;
k=eastpool.length;
}
}
}catch(err){console.log("Advanced Search Filter - East Facing Pool Failure")}

try{
var westpool = document.getElementsByClassName('westpool');
for (var k = 0; k < westpool.length; k++) {
if (westpool[k].checked == true)
{
searchURL += "&wfp=1" ;
k=westpool.length;
}
}
}catch(err){console.log("Advanced Search Filter - West Facing Pool Failure")}

try{
var petfriendly = document.getElementsByClassName('petfriendly');
for (var k = 0; k < petfriendly.length; k++) {
if (petfriendly[k].checked == true)
{
searchURL += "&pets=1" ;
k=petfriendly.length;
}
}
}catch(err){console.log("Advanced Search Filter - Pet Friendly Failure")}

try{
var internet = document.getElementsByClassName('internet');
for (var k = 0; k < internet.length; k++) {
if (internet[k].checked == true)
{
searchURL += "&internet=1" ;
k=internet.length;
}
}
}catch(err){console.log("Advanced Search Filter - Internet Failure")}

try{
var smoking = document.getElementsByClassName('smoking');
for (var k = 0; k < smoking.length; k++) {
if (smoking[k].checked == true)
{
searchURL += "&smoking=1" ;
k=smoking.length;
}
}
}catch(err){console.log("Advanced Search Filter - Smoking Failure")}

try{
var freecalls = document.getElementsByClassName('freecalls');
for (var k = 0; k < freecalls.length; k++) {
if (freecalls[k].checked == true)
{
searchURL += "&fc=1" ;
k=freecalls.length;
}
}
}catch(err){console.log("Advanced Search Filter - Free Calls Failure")}

try{
var wheelchair = document.getElementsByClassName('wheelchair');
for (var k = 0; k < wheelchair.length; k++) {
if (wheelchair[k].checked == true)
{
searchURL += "&wc=1" ;
k=wheelchair.length;
}
}
}catch(err){console.log("Advanced Search Filter - Wheelchair Failure")}

try{
var bbq = document.getElementsByClassName('bbq');
for (var k = 0; k < bbq.length; k++) {
if (bbq[k].checked == true)
{
searchURL += "&bbq=1" ;
k=bbq.length;
}
}
}catch(err){console.log("Advanced Search Filter - BBQ Failure")}

try{
var kitchen = document.getElementsByClassName('Kitchen');
for (var k = 0; k < kitchen.length; k++) {
if (kitchen[k].checked == true)
{
searchURL += "&kitchen=1" ;
k=kitchen.length;
}
}
}catch(err){console.log("Advanced Search Filter - Kitchen Failure")}

try{
var laundry = document.getElementsByClassName('laundry');
for (var k = 0; k < laundry.length; k++) {
if (laundry[k].checked == true)
{
searchURL += "&laundry=1" ;
k=laundry.length;
}
}
}catch(err){console.log("Advanced Search Filter - Laundry Failure")}

try{
var dock = document.getElementsByClassName('Dock');
for (var k = 0; k < dock.length; k++) {
if (dock[k].checked == true)
{
searchURL += "&dock=1" ;
k=dock.length;
}
}
}catch(err){console.log("Advanced Search Filter - Dock Failure")}

try{
var nearbeach = document.getElementsByClassName('NearBeach');
for (var k = 0; k < nearbeach.length; k++) {
if (nearbeach[k].checked == true)
{
searchURL += "&nearb=1" ;
k=nearbeach.length;
}
}
}catch(err){console.log("Advanced Search Filter - Near Beach Failure")}

try{
var propType = $('input[type="radio"].radioType:checked');
var kVal = 0;
for (var k = 0; k < propType.length; k++) {
if (isNaN(propType[k].value)){
}else{
kVal = propType[k].value
}
}
if (kVal > 0){
searchURL += "&propertytype=" + kVal.toString();
}

}catch(err){console.log("Advanced Search Filter - Type failure")}

try{
var aircon = document.getElementsByClassName('Aircon');
for (var k = 0; k < aircon.length; k++) {
if (aircon[k].checked == true)
{
searchURL += "&aircon=1" ;
k=aircon.length;
}
}
}catch(err){console.log("Advanced Search Filter - Air Conditioning Failure")}

try{
	var SR = document.querySelector('input[name="optionsRadios2"]:checked').value;
	if (SR > 0){
		searchURL += "&starrating=" + SR;
	}
}catch(err){
	console.log("Advanced Search Filter - Star Rating Failure")
}

try{
var poolheat = document.getElementsByClassName('heatedpool');
for (var k = 0; k < poolheat.length; k++) {
if (poolheat[k].checked == true)
{
searchURL += "&PoolHeat=1" ;
k=poolheat.length;
}
}
}catch(err){console.log("Advanced Search Filter - Pool Heat Failure")}

try{
var SeaOceanView = document.getElementsByClassName('SeaOceanView');
for (var k = 0; k < SeaOceanView.length; k++) {
if (SeaOceanView[k].checked == true)
{
searchURL += "&SeaOceanView=1" ;
k=SeaOceanView.length;
}
}
}catch(err){console.log("Advanced Search Filter - SeaOceanView Failure")}



<!-- Price Filter Adaptor -->
try{
var queryString = window.location.search;
queryString = queryString.substring(1);
var temp = new Array();

queryString = queryString.replace( /=/g, "&");

temp = queryString.split("&");

var selectedPriceFilterVal = "0";
	
	for (var i = 0; i < temp.length; i++) {
		if (temp[i] == "orderbyprice"){
			selectedPriceFilterVal = temp[i+1];
			i = temp.length;
		}
    }
	
var priced = document.getElementsByClassName('price');
for (var k = 0; k < priced.length; k++) {
if (priced[k].checked == true)
{
	
	if (selectedPriceFilterVal == "d" || selectedPriceFilterVal == "a"){
	//searchURL += "&orderbyprice=" + selectedPriceFilterVal;
		
	}else{
	searchURL += "&orderbyprice=a"	
	}
	
k=priced.length;
}
}
}catch(err){console.log("Advanced Search Filter - Price Ascending Failure")}

var queryString = window.location.search.toLowerCase();
//initVals = $("#prSlider").data('slider').getValue();


//alert(initVals[0]);

var price = false;
var minBool = false;
var maxBool = false;

if (queryStrPassed(queryString, "orderbyprice")){
	price = true;
}

if (queryStrPassed(queryString, "minprice")){
	minBool = true;
}

if (queryStrPassed(queryString, "maxprice")){
	maxBool = true;
}

if (minBool || maxBool && price){
$("#loadingOverlay").css("display", "block");
$("#loadingAnimation").show();	
	
}

//alert("pre: " + searchURL);

if (queryStrPassed(searchURL, "ad") && queryStrPassed(searchURL, "dd") && (price == false)){
	searchURL += "&orderbyprice=a"	;
}

//Use if Price Filter IS NOT Default
if (price){
	var start = queryString.indexOf("orderbyprice");
	start = start + 13;
	
	if (queryString.charAt(start) == "a"){
		searchURL += "&" + replaceParm1("orderbyprice", "a");
	}
	if (queryString.charAt(start) == "d"){
		searchURL += "&" + replaceParm1("orderbyprice", "d");
	}
//alert("min: " + searchURL);
}

if (minBool){
//searchURL += "&" + replaceParm1("minprice", initVals[0]);
searchURL += "&" + replaceParm1("minprice", sMin);
//alert("min: " + searchURL);
}

if (maxBool){
//searchURL += "&" + replaceParm1("maxprice", initVals[1]);
searchURL += "&" + replaceParm1("maxprice", sMax);
//alert("max: " + searchURL);
}

//alert(newLoc);
<!--End Price Filter Adaptor -->


<!-- redirect -->
if (searchURL.length == 13){
	searchURL += "clear=1"
	}
window.location.assign(searchURL);
//console.log(searchURL);


}


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}


<!-- Price Filter Adaptor Helper Functions -->

function queryStrPassed(str, subStr){

return (str.indexOf(subStr) > -1);

}

function replaceParm1(parmName, parmVal){
//alert("Yes");

var loc = "";
var queryString = window.location.search.toLowerCase();
	
if (queryStrPassed(queryString, parmName)){

	var start = queryString.indexOf(parmName);

	var end = 0;



		for (var i = 0; i < queryString.length - start - 1; i++){
			if (queryString.charAt(start + i ) == "&"){
			end = ( start + ( i ));
		
			i = queryString.length - start - 1;
			
			}else if (((start + parmName.length + 1) + i) == (queryString.length - 1)){
			end = queryString.length;
		
			}
	
		}

	//alert("Start: " + queryString.charAt(start) + " - End: " + queryString.charAt(end));
	
	loc += queryString.substring((start), (end));
	//alert(loc);
	//loc += parmVal;
	
	//alert(end + " - " + queryString.length);

}

return loc
//window.location.assign(loc);
//alert(loc);

}

<!-- End Price Filter Adaptor Helper Functions -->