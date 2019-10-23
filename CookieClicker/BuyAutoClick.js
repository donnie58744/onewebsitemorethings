function BuyAutoClick() {
	if (CookieCount >= ((AutoClick+1) * 12)) {
	CookieCount = CookieCount - ((AutoClick+1) *12);
	AutoClick = AutoClick + 1;
	Update()
	}
}