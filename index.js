let numbers = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 7, 8, 9, 10];
let numbersWithoutDuplicates = [];
 
for (let number of numbers) {
    if (numbersWithoutDuplicates.indexOf(number) === -1) {
        numbersWithoutDuplicates.push(number);
    }
}