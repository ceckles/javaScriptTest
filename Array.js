let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
selectedColors[4] = "A";
console.log(selectedColors);
console.log(selectedColors.filter((item) => typeof item !== "number")); //filter array to only show Strings
console.log(selectedColors.length);
console.log(selectedColors[0]);
selectedColors[1]= "purple";
console.log(selectedColors);