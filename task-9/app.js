let is_honor_student = (student) => {
    let name = prompt("Введите имя студента:");
    let averageGrade = parseFloat(prompt("Введите средний балл студента:"));

    if (averageGrade >= 4.5) {
        console.log(`${name} является отличником!`);
    } else {
        console.log(`${name} не является отличником!`);
    }
};
console.log(is_honor_student());