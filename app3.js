let apiString =
    '{"product":{"id":501,"name":"Laptop","price":55000,"inStock":true}}';

let apiobj = JSON.parse(apiString);
console.info(apiobj);

// now I will print the product name:- 
console.log(apiobj.product.name);


// Now I neeed to check whether the price is a number or not:- 
console.log(typeof apiobj.product.price);

if (apiobj.product.instock = true) {
    console.log("Stock is Available");
} else {
    console.log("Stock is not Available");
}

// Now I need to convert it back to a ApiString:-

let newString = JSON.stringify(apiobj);
console.log(newString);