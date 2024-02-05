let product = {
        name: "PC",
        price: 80000,
        inStock: true,
        brand: "MSI",
    }
let specifications = {
        CPU: "Intel Core i5-12400F",
        motherBoard: "MSI PRO H610M-E DDR4",
        RAM: "8GB ADATA XPG SPECTRIX D41 RGB 3200MHz",
        GPU: "GeForce RTX 3060",
        powerUnit: "DEEPCOOL DN500 500W",
    }
let sale = {
        discount: "скидка в честь нового года",
        percentage: 10,
        expirationDate: "2024-01-10",
    }

let customer = {
        name: "Roman",
        budget: 100000,
    }


if ( product.inStock === true ) {
    console.log(`Товар есть на складе, Вы выбрали ${product.name}.`);
    } else {
        console.log(`Товара нет на складе ${product.name}.`);
    }
    if ( customer.budget >= product.price ) {
        console.log(`У вас хватает на ${product.name}. Его цена ${product.price}. Ваш бюджет = ${customer.budget}.`);
        console.log(`Наименование товара - ${product.name}. Цена - ${product.price} руб. Наличие на складе - ${product.inStock}. Бренд - ${product.brand}.`);
        console.log(`Процессор - ${specifications.CPU}. Материнская плата - ${specifications.motherBoard}. Оперативная памать - ${specifications.RAM}. Видеокарта - ${specifications.GPU}. Блок питания - ${specifications.powerUnit}.`);
    } else {
        console.log(`Ваш бюджет = ${customer.budget}, Вам не хватает на покупку. Цена товара который вы хотите купить = ${product.price}.`);
    }
    if ( sale.percentage > 0 ) {
        let result = product.price - (product.price / 100 * sale.percentage)
        console.log(`На ${product.name} действует скидка ${sale.discount} ${sale.percentage} %. Цена с учетом скидки = ${result}.`);
    } else {
        console.log(`На ${product.name} не действует скидка.`);
    }
