function kiertekeles(){
	document.getElementById("valaszok").innerHTML="";

	var nev = document.getElementById("nev").value;
	console.log(nev)
	document.getElementById("valaszok").innerHTML += "kitoltőneve: "+nev+"<br>";

	var szuletesi_datum = new Date(document.getElementById("szuletesi_datum").value)
	var ev= szuletesi_datum.getFullYear();
	var honap = szuletesi_datum.getMonth();
	var nap = szuletesi_datum.getDate();
	document.getElementById("valaszok").innerHTML +="A kitöltő szletési dátuma: "+ev+"."+honap+"."+nap+".<br>";

	var kozlekedes = document.getElementsByName("kozlekedes");

	for (let i = 0; i < kozlekedes.length; i++) {
		if (kozlekedes[i].checked) {
			document.getElementById("valaszok").innerHTML +="A választott közlekedési szköz a(z) "+kozlekedes[i].value+".<br>"
		}
	}

	var utazas = document.getElementsByName("utazas");
	var utazasi_celpont = new Array();
	for (let i = 0; i < utazas.length; i++) {
		if (utazas[i].checked) {
			if (utazas[i].checked) {
				utazasi_celpont.push(utazas[i].value);
			}
		}
		document.getElementById("valaszok").innerHTML += "A vaéasztott utazási célpont(ok) ";
		switch (utazasi_celpont.length) {
			case 0:
				document.getElementById("valaszok").innerHTML+="sehova";
				break;
			case 1:
				document.getElementById("valaszok").innerHTML+= utazasi_celpont
			default:
				break;
		}
	}
}