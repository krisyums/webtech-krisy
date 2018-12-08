// Dies ist ein beispielhaftes Personen-Array, welches den Aufbau verdeutlicht
// Es enthält weitere Arrays mit [name, birthYear, status, sex].
const persons = [
    ['Max', 1967, 2, 'm'],
    ['Maria', 1990, 1, 'f'],
    ['Meik', 1982, 2, 'm'],
    ['Mareike', 1985, 3, 'f'],
    ['Mervin', 1971, 1, 'm'],
    ['Magdalena', 1979, 1, 'f'],
];

// Diese Funktion filtert das übergebene Array nach dem Geschlecht
// Rückgabe: ein Array, das alle Personen des ursprünglichen Arrays enthält, bei denen das
// Geschlecht dem übergebenen Parameter entspricht; Wenn kein Eintrag vorhanden ist,
// dann wird ein leeres Array zurückgegeben
// Zum Beispiel: filterSex(persons, 'f')
// Bsp-Rückgabe:
// [ ['Maria', 1990, 1, 'f'], [ 'Mareike', 1995, 3, 'f' ],
// [ 'Magdalena', 1979, 1, 'f' ] ]
function filterSex(personsArray, sex) {
    return personsArray.filter(function(person) {
        return person[3] === sex;});
}

// Diese Funktion berechnet das Alter jeder Person
// Zum Beispiel: getAge(persons)
// Bsp-Rückgabe:
// [ [ 'Max', 50 ], ['Maria', 27 ], [ 'Meik', 35 ], [ 'Mareike', 32 ]
// [ 'Mervin', 46 ], [ 'Magdalena', 38 ] ]
function getAge(personsArray) {
    return personsArray.map(function(person) {
        return [person[0], 2018 - person[1]];});
}

// Diese Funktion berechnet den Status (Alter * Statuszahl) jeder Person
// und sortiert das Array (höchster Status zuerst, bei
// gleichem Status: nach Namen alphabetisch)
// für String-Vergleiche in der Mozilla Referenz nachschauen
// Zum Beispiel: getSortedStatus(persons)
// Bsp-Rückgabe:
// [ ['Max', 100],['Mareike', 96],['Meik', 70],
// ['Mervin', 46],['Magdalena', 38],['Maria', 27] ]
function getSortedStatus(personsArray) {
    return getAge(personsArray).sort(function(a,b) {
        return a[1] > b[1] ? 1 : -1;});
}

// Diese Funktion gibt ein Array mit den Namen aller Personen zurück
// Zum Beispiel:getNames(persons)
// Bsp-Rückgabe:
// ['Max', 'Maria', 'Meik', 'Mareike', 'Mervin', 'Magdalena']
function getNames(personsArray) {
    return personsArray.map(function(person) {
        return person[0];});
}

// Diese Funktion gibt das addierte Alter aller Personen zurück
// Zum Beispiel:getAggregatedAge(persons)
// Bsp-Rückgabe:
// 228
function getAggregatedAge(personsArray) {
    return getAge(personsArray).map(person => person[1]).reduce((acc, cur) => acc + cur, 0);
}

// Diese Funktion zählt die Geschlechter der Personen und gruppiert diese in einer Map.
// (siehe http://eloquentjavascript.net/06_object.html#h_gAcc11EHzV).
// Achtung:Man kann nicht davon ausgehen, dass nur 'f' und 'm' vorkommen!
// Bsp-Rückgabe für persons:
// Map { 'f' = > 3, 'm' = > 3 }
function getAmount(personsArray) {
    return {
        "Women": filterSex(personsArray, 'f').length,
        "Men": filterSex(personsArray, 'm').length
    };
}

console.log("filtering sex: ");
console.log(filterSex(persons, 'm'));
console.log("======================");

console.log("getting age: ");
console.log(getAge(persons));
console.log("======================");

console.log("getting sorted status: ");
console.log(getSortedStatus(persons));
console.log("======================");

console.log("getting names: ");
console.log(getNames(persons));
console.log("======================");

console.log("getting aggregated age: ");
console.log(getAggregatedAge(persons));
console.log("======================");

console.log("getting amount: ");
console.log(getAmount(persons));
console.log("======================");
