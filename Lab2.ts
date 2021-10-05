interface mountain {
    name: string;
    height: number;
}

let allmountains:mountain[] = [
    {name: 'Kilimanjaro', height: 19341},
    {name: 'Everest', height: 29029},
    {name: 'Denali', height: 20310}
    
]

function findTallest(mountains: mountain[]):string {
    let tallestheight: number = 0;
    let currentname: string = '';

    for (let i=0; i<mountains.length; i++) {
        if (mountains[i].height > tallestheight) {
            tallestheight = mountains[i].height;
            currentname = mountains[i].name;
        }
    }
    return currentname;
}

let tallestname: string = findTallest(allmountains);
console.log(tallestname);


interface product {
    name: string;
    price: number;
}

let allproducts:product[] = [
    {name: "candy", price: 5},
    {name: "popcorn", price: 6},
    {name: "ticket", price: 10}
]

function findAveragePrice(products: product[]):number {
    let runningsum: number = 0;
    for (let i=0; i<products.length; i++) {
        runningsum += products[i].price;
    }
    let average: number = runningsum/products.length;
    return average;
}

let averageprice: number = findAveragePrice(allproducts);
console.log(averageprice);



]