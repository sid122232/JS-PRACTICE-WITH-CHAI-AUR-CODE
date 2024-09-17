const obj1= {
    id:1,
    name:"sid",
    details:
    {
        bloodgroup:"O+",
        hobby:"boxing",
    }
   
}
const { details:{bloodgroup}}= obj1 
console.log(bloodgroup);


