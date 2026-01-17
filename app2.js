let apiResponse =
    '{"users":[{"id":1,"name":"Ayaan","skills":["JS","React"],"isIntern":true},{"id":2,"name":"Riya","skills":["HTML","CSS"],"isIntern":false}]}';

let objectApi = JSON.parse(apiResponse); // Accessed and Converted into Object;
console.log(objectApi);

let checkArry = objectApi.users.checkArry;
console.log(Array.isArray(objectApi.users));


let final = JSON.stringify(objectApi);
console.log(final);
typeof final;