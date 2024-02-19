let bookSeries = {
    name: "Гарри Поттер",
    creator: "Дж. К. Роулинг",
    numberOfBooks: 7,
    genre: "роман",
    yearsOfManufacture: "1997-2007",
}

for (let i in bookSeries) {
    console.log(`${i}: ${bookSeries[i]}`);
    }
    if (bookSeries.numberOfBooks > 3) {
    console.log(`Эта книжная серия большая. Ее обьем = ${bookSeries.numberOfBooks}`);
    } else {
    console.log(`Эта книжная серия не большая. Ее обьем = ${bookSeries.numberOfBooks}`);
    }