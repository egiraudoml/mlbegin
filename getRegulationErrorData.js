var getRegulationErrorData = function () {
	var date = $("div.number_block:first > p.value").text();
	var user_id = $("table.small:first > tbody > tr:nth-child(2) td").text();
	var count = $("div.number_block:nth-child(3) > p.value").text();

	var url = $("table.small:first > tbody > tr:nth-child(1) td").text();
	var url = new URL("http://www.algo.com" + url);
	var identification_number = url.searchParams.get("identification_number");
	var identification_type = url.searchParams.get("identification_type");

	var log = date + "\t" + user_id + "\t" + identification_type + "\t" + identification_number + "\t" + count + "\t\t\t\tNR"
	console.log(log);

  	fallbackCopyTextToClipboard(log);
};
function fallbackCopyTextToClipboard(text) {
	var textArea = document.createElement("textarea");
	textArea.value = text;
	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	var successful = document.execCommand('copy');
	var msg = successful ? 'successful' : 'unsuccessful';

	document.body.removeChild(textArea);
}
getRegulationErrorData();


function testAlert() {
	alert("funciona!");
	console.log("funciona!!");
}