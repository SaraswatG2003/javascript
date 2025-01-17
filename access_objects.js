const allUsers = [{
    firstName: "John",
    gender: "male",
    metadata: {
        age: 22,
    }
}, {
    
    firstName: "Jane",
    gender: "male",
    metadata: {
    age: 25,
}
},
{
    firstName: "priya",
    gender: "female",
    metadata: {
        age: {
            value: "25",
        }
    }},    
]
//[1,2,3] arr[i]
//[{[{}]}]==> arr[i]["firstName"]
for(let i=0; i<allUsers.length; i++){
    if(allUsers[i]["metadata"]["age"]["value"]== "25")
        {
        console.log(allUsers[i]["firstName"]);
    }
}
//harkirat["name"] is same as harkirat.name