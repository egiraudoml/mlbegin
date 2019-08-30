var getRegulationErrorData = function () {
	var date = $("div.number_block:first > p.value").text();
	var user_id = $("table.small:first > tbody > tr:nth-child(2) td").text();

	var url = $("table.small:first > tbody > tr:nth-child(1) td").text();
	var url = new URL("http://www.algo.com" + url);
	var identification_number = url.searchParams.get("identification_number");
	var identification_type = url.searchParams.get("identification_type");

	console.log(date + "\t" + user_id + "\t" + identification_type + "\t" + identification_number + "\t\t\t\tNR");
};


function testAlert() {
	alert("funciona!");
	console.log("funciona!!)
}