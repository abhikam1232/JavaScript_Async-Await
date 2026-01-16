// Understanding Two methods to access the JSON Data:- 
let jsonResponse =
    '{"fact":"A cat can sprint at about thirty-one miles per hour.","length":52}';

let validResponse = JSON.parse(jsonResponse);
console.info(validResponse);

// Assignmnet Question 2:-

let apiResponse =
    '{"user":{"id":101,"name":"Abhishek","skills":["JavaScript","HTML","CSS"],"isIntern":true}}';

let resultApi = JSON.parse(apiResponse); // This is used to Access the API and converted into and Object...
console.log(resultApi);

let skills = resultApi.user.skills;
console.log(Array.isArray(resultApi.user.skills));

// Now I need to print all the skills on new line using foreach():- 

resultApi.user.skills.forEach((ele) => {
    console.log(ele);
});

let convert_Obj_to_Api = JSON.stringify(resultApi);
console.log(convert_Obj_to_Api);




