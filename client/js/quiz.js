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
        document.getElementById("anxiety").textContent = "Showing Symptons of Anxiety: Please Talk to Your Doctor if Problems Persist";
    } else if(anxiety < 12 && anxiety >=8){
		document.getElementById("anxiety").textContent = "Showing Symptons of Anxiety: Please Talk to Your Doctor if Problems Persist";
	}else{
		document.getElementById("anxiety").textContent = "High Chance of Anxiety: Visit the Resources Tab and Talk to a Doctor for Official Help";
	}
	
	//PTSD
	if (ptsd < 4) {
        document.getElementById("ptsd").textContent = "Low Chance of PTSD";
    } else if(ptsd < 8 && ptsd >= 4){
        document.getElementById("ptsd").textContent = "Showing Symptons of PTSD: Visit the Resources Tab and Talk to a Doctor for Help";
    } else if(ptsd < 12 && ptsd >=8){
		document.getElementById("ptsd").textContent = "Showing Symptons of PTSD: Visit the Resources Tab and Talk to a Doctor for Help";
	}else{
		document.getElementById("ptsd").textContent = "Many Signs of PTSD: Visit the Resources Tab and Talk to a Doctor for an Official Diagnosis";
	}
	
	//Depression
	if (depression < 4) {
        document.getElementById("depression").textContent = "Few to no Signs of Depression";
    } else if(depression < 8 && depression >= 4){
        document.getElementById("depression").textContent = "Showing Symptons of Depression: Visit the Resources Tab and Talk to a Doctor for Help";
    } else if(depression < 12 && depression >=8){
		document.getElementById("depression").textContent = "Showing Symptons of Depression: Visit the Resources Tab and Talk to a Doctor for Help";
	}else{
		document.getElementById("depression").textContent = "Many Signs of Depression: Talk to Family/Friends about Professional Assistance. If Urgent Call the National Suicide Prevention Hotline (1-800-273-8255)";
	}
	
	//BiPolar
	if (bipolar < 4) {
        document.getElementById("bipolar").textContent = "Few to no Signs of Bipolar Disorder";
    } else if(bipolar < 8 && bipolar >= 4){
        document.getElementById("bipolar").textContent = "Showing Symptons of Bipolar Disorder";
    } else if(bipolar < 12 && bipolar >=8){
		document.getElementById("bipolar").textContent = "Showing Symptons of Bipolar Disorder";
	}else{
		document.getElementById("bipolar").textContent = "Many Signs of Bipolar Disorder: Visit the Resources Tab and Talk to a Doctor for an Official Diagnosis";
	}
	
	if (substance < 4) {
        document.getElementById("substance").textContent = "Low Chance of Substance Abuse";
    } else if(substance < 12 && substance >= 4){
        document.getElementById("substance").textContent = "Showing Symptons of Substance Abuse: Visit the Resources Tab to Find a Professional";
    } else if(substance < 18 && substance >=12){
		document.getElementById("substance").textContent = "Showing Moderate Amount of Symptons of Substance Abuse: Visit the Resources Tab to Find a Professional";
	}else{
		document.getElementById("substance").textContent = "Many Symptoms of Substance Abuse: Please Reachout to a Trusted Person for Help. Visit the Resources Tab if in Need";
	}
}
