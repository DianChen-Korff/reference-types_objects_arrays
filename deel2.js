const selectedColors = ['groen', 'blauw', 'rood'];

console.log (selectedColors);
console.log (selectedColors.length);
console.log (selectedColors[0]);
console.log (selectedColors[length - 1]);

selectedColors.push('geel');
console.log (selectedColors);
selectedColors.push(5);
console.log (selectedColors);
selectedColors.push ({greeting: "hi ik ben een object"});
console.log (selectedColors);
console.log (selectedColors [selectedColors.length - 1].greeting);