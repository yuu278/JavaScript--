let result = document.getElementById("result");

function number(elem) {
  if (result.value === "0"){
      result.value = elem.value;
  }
  else if(result.value === "00"){
     result.value = elem.value;
  } 
  else {
    result.value = result.value + elem.value;
  }
   console.log(result.value);
}
  
function edit(elem) {
  if (result.value.slice(-1) === "+" ){
     return;
  }
   else if (result.value.slice(-1) === "-" ){
     return;
  }
  else if (result.value.slice(-1) === "*" ){
     return;
  } 
  else if (result.value.slice(-1) === "/" ){
     return;
  } 
  else if (result.value.slice(-1) === "."){
    return;
  } 
  else {
  result.value = result.value + elem.value;
  }
}

function calc(){
    result.value = new Function("return " + result.value)();
}

function update(){
    result.value = "";
}  