function Update(){
	document.getElementById("text").value = CookieCount;
	document.title = CookieCount + " Cookies";
	document.getElementById("AmmountAutoClick").innerHTML = "You Own " + AutoClick + " Auto Clickers"
	document.getElementById("CostAutoClick").innerHTML = "Auto Clickers Cost " + ((AutoClick+1)*12) + " Cookies"
}