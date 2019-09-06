// var allinputs = document.getElementsByTagName('input');

		// if(allinputs.length != 1){
		// 	alert("Please enter only 1 digit");
		// }

		 // OR gate
		function checkor(){
			var valueof_A = document.getElementById('valueof_A_or').value;
			var valueof_B = document.getElementById('valueof_B_or').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("Enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultor').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultor').innerHTML = 1;
			}
		}

	function refreshor(){
		document.getElementById('valueof_A_or').value = " ";
		document.getElementById('valueof_B_or').value = " ";
		document.getElementById('show_resultor').innerHTML = "";
	}

	// NOR gate
		function checknor(){
			var valueof_A = document.getElementById('valueof_A_nor').value;
			var valueof_B = document.getElementById('valueof_B_nor').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("Enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultnor').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
		}

	function refreshnor(){
		document.getElementById('valueof_A_nor').value = " ";
		document.getElementById('valueof_B_nor').value = " ";
		document.getElementById('show_resultnor').innerHTML = "";
	}

	// AND gate

	function checkand(){
			var valueof_A = document.getElementById('valueof_A_and').value;
			var valueof_B = document.getElementById('valueof_B_and').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("Enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultand').innerHTML = 1;
			}
		}

	function refreshand(){
		document.getElementById('valueof_A_and').value = " ";
		document.getElementById('valueof_B_and').value = " ";
		document.getElementById('show_resultand').innerHTML = "";
	}

	// NAND gate

	function checknand(){
			var valueof_A = document.getElementById('valueof_A_nand').value;
			var valueof_B = document.getElementById('valueof_B_nand').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("Enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultnand').innerHTML = 0;
			}
		}

	function refreshnand(){
		document.getElementById('valueof_A_nand').value = " ";
		document.getElementById('valueof_B_nand').value = " ";
		document.getElementById('show_resultnand').innerHTML = "";
	}

	// Exclusive OR gate

	function checkexor(){
			var valueof_A = document.getElementById('valueof_A_exor').value;
			var valueof_B = document.getElementById('valueof_B_exor').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("Enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultexor').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultexor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultexor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultexor').innerHTML = 0;
			}
		}

	function refreshexor(){
		document.getElementById('valueof_A_exor').value = " ";
		document.getElementById('valueof_B_exor').value = " ";
		document.getElementById('show_resultexor').innerHTML = "";
	}

	// Exclusive NOR gate

	function checkexnor(){
			var valueof_A = document.getElementById('valueof_A_exnor').value;
			var valueof_B = document.getElementById('valueof_B_exnor').value;

			if((valueof_A.length != 1) || (valueof_B.length != 1)){
				alert("No columns should be empty, enter only one digit");
			}

			else if((valueof_A != 0) && (valueof_A != 1)){
				alert("Values accepted 0,1");
			}
			else if((valueof_B != 0) && (valueof_B != 1)){
				alert("Values accepted 0,1");
			}

			else if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultexnor').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultexnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultexnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultexnor').innerHTML = 1;
			}
		}

	function refreshexnor(){
		document.getElementById('valueof_A_exnor').value = " ";
		document.getElementById('valueof_B_exnor').value = " ";
		document.getElementById('show_resultexnor').innerHTML = "";
	}