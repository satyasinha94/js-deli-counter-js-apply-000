<<<<<<< HEAD

function takeANumber (line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing (line) {
  var first = line[0];
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    line.shift();
    return `Currently serving ${first}.`
    }
  }

function currentLine(line) {
  var numberedLine = [];
  if (line.length == 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0, h = i+1; i < line.length; i++, h++) {
      numberedLine.push(`${h}. ${line[i]}`)
    }
  }
return `The line is currently: ${numberedLine.join(", ")}`
=======
function takeANumber (katzDeli, name) {
  for (let i = 0; i < katzDeli.length; i++) {
    katzDeli.push(name)
  }
  return `Welcome ${katzDeli}`
>>>>>>> 4d3620d91f7c33f7275e6d391aca5de3a89cb4e3
}
