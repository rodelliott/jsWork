// BMI = KG / M*M
var markWeight = 78;
var markHeight = 1.69;
var johnWeight = 92;
var johnHeight = 1.95;

var markBMI = markWeight / (markHeight * markHeight);
var johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI);
console.log(johnBMI);
var markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);