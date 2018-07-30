
var numbers = [0599121212];
var stop = 0;
var start = 0;
function handleFiles(files) {
	// Check for the various File API support.
	if (window.FileReader) {
		// FileReader are supported.
		getAsText(files[0]);
	} else {
		alert('FileReader are not supported in this browser.');
	}
}

function setStop(flag){
	stop = flag;
	start = 0;

}
function setStart(flag){
	start = flag;
	stop = 0;

}

function getAsText(fileToRead) {
	var reader = new FileReader();
	// Handle errors load
	reader.onload = loadHandler;
	reader.onerror = errorHandler;
	// Read file into memory as UTF-8      
	reader.readAsText(fileToRead);
}

function loadHandler(event) {
	var csv = event.target.result;
	processData(csv);             
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
		}
		numbers = lines;
	//	var item = lines[Math.floor(Math.random()*lines.length)]+"";
	//	numbers = item. split("");
	//	numbers = item + "";
	//	alert("numbers: "+numbers)
 
		generateNumber(0);
 
//	console.log(item);
	//drawOutput(item);
}

function errorHandler(evt) {
	if(evt.target.error.name == "NotReadableError") {
		alert("Canno't read file !");
	}
}

function drawOutput(lines){
	//Clear previous data
	document.getElementById("output").innerHTML = "";
	var table = document.createElement("table");
	for (var i = 0; i < lines.length; i++) {
		var row = table.insertRow(-1);
		for (var j = 0; j < lines[i].length; j++) {
			var firstNameCell = row.insertCell(-1);
			firstNameCell.appendChild(document.createTextNode(lines[i][j]));
		}
	}
	document.getElementById("output").appendChild(table);
}


function generateNumber(index) {

 // var desired = numbers[index];
  var desired = "05" + numbers.slice(2, 9);
	var duration = 20000000000;


  var output = $('#output' + index); // Start ID with letter
  var started = new Date().getTime();

  animationTimer = setInterval(function() {
		if (start === 1) {
    if  ((output.text().trim() === desired || new Date().getTime() - started > duration) || stop === 1 )  {
      clearInterval(animationTimer); // Stop the loop
      output.text(	numbers[Math.floor(Math.random()*numbers.length)]+""); // Print desired number in case it stopped at a different one due to duration expiration
			generateNumber(index + 1);
    } else {
      output.text(
				numbers[Math.floor(Math.random()*numbers.length)]+""
        //'05' +  Math.floor(Math.random() * 6) + 3
     //   Math.floor(Math.random() * 100000000) 
      );
    }
	}
	}, 33);
	
}



