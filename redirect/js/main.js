/* * * * */

$(document).ready(function() {

	var brw = new Browser();

	alert(
			'fullName: ' + brw.fullName + '\n' +
			'name: ' + brw.name + '\n' +
			'fullVersion: ' + brw.fullVersion + '\n' +
			'version: ' + brw.version + '\n' +
			'platform: ' + brw.platform+ '\n' +
			'mobile: ' + brw.mobile+ '\n' +
			'resolution: ' + brw.width + 'x' + brw.height
		);


	$( ".dataFName" ).text ('fullName: ' + brw.fullName );
	$( ".dataName" ).text ('name: ' + brw.name );
	$( ".dataFVer" ).text ('fullVersion: ' + brw.fullVersion );
	$( ".dataFVer" ).text ('version: ' + brw.version );


	/*chrome*/
	/*if (brw.name === "chrome") {
		
		//window.location.replace("http://www.google.com");

	}*/

});