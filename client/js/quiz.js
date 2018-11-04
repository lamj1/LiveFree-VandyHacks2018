function results() {
    let results = 0;
    for(let i=0; i<3; i++) {
        let name = "q" + (i + 1);
        let radios = document.getElementsByName(name);
        for(let j=0; j<radios.length; j++) {
            if(radios[j].checked) {
                results += parseInt(radios[j].value);
            }
        }
    }
    if (results == 3) {
        document.getElementById("result").textContent = "I love Vandy!!!";
    } else {
        document.getElementById("result").textContent = "Wrong...";
    }
}