function Load(){
	CookieCount=localStorage.getItem("CookieCount")
	CookieCount = parseInt(CookieCount)
	AutoClick= localStorage.getItem("AutoClick")
	AutoClick = parseInt(AutoClick)
	Update()
}