function results() {
    let anxiety = 0;
	let ptsd = 0;
	let depression = 0;
	let bipolar = 0;
	let substance = 0;
    
	//Anxiety
	for(let i=0; i<4; i++) {
        let name = "a" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                anxiety += parseInt(radios[j].value);
            }
        }
    }
	
	//PTSD
	for(let i=0; i<5; i++) {
        let name = "p" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                ptsd += parseInt(radios[j].value);
            }
        }
    }
	
	//Depression
	for(let i=0; i<4; i++) {
        let name = "d" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                depression += parseInt(radios[j].value);
            }
        }
    }
	
	//BiPolar
	for(let i=0; i<4; i++) {
        let name = "b" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                bipolar += parseInt(radios[j].value);
            }
        }
    }

	//Substance
	for(let i=0; i<7; i++) {
        let name = "s" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                substance += parseInt(radios[j].value);
            }
        }
    }
	
	//Anxiety
    if (anxiety < 4) {
        document.getElementById("anxiety").textContent = "Low Chance of Anxiety";
    } else if(anxiety < 8 && anxiety >= 4){
        document.getElementById("anxiety").textContent = "Showing Symptons of Anxiety";
    } else if(anxiety < 12 && anxiety >=8){
		document.getElementById("anxiety").textContent = "Showing Symptons of Anxiety";
	}else{
		document.getElementById("anxiety").textContent = "High Chance of Anxiety";
	}
	
	//PTSD
	if (ptsd < 4) {
        document.getElementById("ptsd").textContent = "Low Chance of PTSD";
    } else if(ptsd < 8 && ptsd >= 4){
        document.getElementById("ptsd").textContent = "Showing Symptons of PTSD";
    } else if(ptsd < 12 && ptsd >=8){
		document.getElementById("ptsd").textContent = "Showing Symptons of PTSD";
	}else{
		document.getElementById("ptsd").textContent = "High Chance of PTSD";
	}
	
	//Depression
	if (depression < 4) {
        document.getElementById("depression").textContent = "Low Chance of Depression";
    } else if(depression < 8 && depression >= 4){
        document.getElementById("depression").textContent = "Showing Symptons of Depression";
    } else if(depression < 12 && depression >=8){
		document.getElementById("depression").textContent = "Showing Symptons of Depression";
	}else{
		document.getElementById("depression").textContent = "High Chance of Depression";
	}
	
	//BiPolar
	if (bipolar < 4) {
        document.getElementById("bipolar").textContent = "Low Chance of Bi-Polar";
    } else if(bipolar < 8 && bipolar >= 4){
        document.getElementById("bipolar").textContent = "Showing Symptons of Bi-Polar";
    } else if(bipolar < 12 && bipolar >=8){
		document.getElementById("bipolar").textContent = "Showing Symptons of Bi-Polar";
	}else{
		document.getElementById("bipolar").textContent = "High Chance of Bi-Polar";
	}
	
	if (substance < 4) {
        document.getElementById("substance").textContent = "Low Chance of Substance";
    } else if(substance < 8 && substance >= 4){
        document.getElementById("substance").textContent = "Showing Symptons of Substance";
    } else if(substance < 12 && substance >=8){
		document.getElementById("substance").textContent = "Showing Symptons of Substance";
	}else{
		document.getElementById("substance").textContent = "High Chance of Substance";
	}
}
