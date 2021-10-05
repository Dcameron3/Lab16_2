"use strict";
var allmountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29029 },
    { name: 'Denali', height: 20310 }
];
function findTallest(mountains) {
    var tallestheight = 0;
    var currentname = '';
    for (var i = 0; i < mountains.length; i++) {
        if (mountains[i].height > tallestheight) {
            tallestheight = mountains[i].height;
            currentname = mountains[i].name;
        }
    }
    return currentname;
}
var tallestname = findTallest(allmountains);
console.log(tallestname);
