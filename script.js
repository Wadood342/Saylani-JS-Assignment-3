function anAlert() {
    alert("This is an alert!");
  }
  function prName() {
    let myname = document.getElementById("input").value;
    document.getElementById("statement").innerHTML =
      "Please! Enter your Name in Input field.";
  
    if (myname == "") {
      alert("Please! Enter your Name in Input field");
    } else {
      document.getElementById("output").innerHTML = myname;
    }
  }
  
  let cities = [
    "Lahore",
    "Faisalabad",
    "Karachi",
    "Sialkot",
    "Multan",
    "Islamabad",
  ];
  
  function prCities() {
    document.getElementById("statement").innerHTML = "";
  
    for (let index = 0; index < cities.length; index++) {
      document.getElementById("statement").innerHTML +=
        index+1 + ")" + cities[index] + "&ensp;";
    }
  
    document.getElementById("output").innerHTML = " ";
    for (let index = 0; index < cities.length; index++) {
      document.getElementById("output").innerHTML +=
        index + 1 + ")" + cities[index] + "<br>";
    }
  }
  
  function adCities() {
    if (document.getElementById("input").value == "") {
      alert("please Enter city");
    } else {
      cities.push(document.getElementById("input").value);
    }
  }
  function rmCities() {
    
      cities.pop(document.getElementById("input").value);
    }
  
  
  function gTable() {
    let num = +prompt("Table of which Number");
  
    if (!isNaN(num)) {
      document.getElementById("output").innerHTML =
        "<h2 class='text-primary'>Table of" + " " + num + "</h2>";
  
      for (let i = 1; i <= 10; i++) {
        document.getElementById("output").innerHTML +=
          num + " * " + i + " = " + num * i + "<br>";
      }
    } else {
      alert("please! enter a number");
    }
  }
  
  
  function clearop() {
      
      document.getElementById("statement").innerHTML = " ";
      document.getElementById("output").innerHTML = " ";
  }
  
  function clearinp() {
    document.getElementById("input").value = " ";
    document.getElementById("statement").innerHTML = " ";
  }