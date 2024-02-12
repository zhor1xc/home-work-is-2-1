let numbers =[[12, 3], [5, 7], [3, 6]];
for (let item of numbers){
    console.log(`[${item}] количество элементов в массиве ${item.length}`)
}

let sum = 0

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++){
        sum += numbers[i][j];
    }
}
console.log(sum);