const people = [{name: "Bob", email: "Bob@email.com"}, {name: "Tom", email: "Tom@email.com"}]

for (let item of people) {
    console.log(`Его зовут - ${item.name}, его почта - ${item.email}`)
    console.log("Меняем email")
    item.email = "Work@email.com"
    console.log(`Его зовут - ${item.name}, его почта - ${item.email}`)
}