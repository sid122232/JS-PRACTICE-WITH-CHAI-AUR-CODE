//for of loop --> majoly use for array itteration 
let a = ['spiderman','makadmanav','kakdamanas'];
for (const arrays of a) {
   //console.log(arrays)
}


//for in loop mainly for obj we use objectname[key] for iterating its values eg; myObj[key]
let myObj={
    name:'sid',
    age:'infinity',
    skill:'c,c++,universal hacking'
}
for (const key in myObj) {
   // console.log(myObj[key])
}
//map.set==> to make object in values of ('key','values')
const map = new Map()
map.set('IN','INDIA')
map.set('USA', 'UNITED STATES OF AMERICA ')
map.set('FR','FRANCE')
//console.log(map)


//for each--> it requires a function to call an array 
let heroes = ['spiderman','makadmanav','kakdamanas'];
heroes.forEach((item)=> {
    //console.log(item)
});
let db =[
    {
        name1:"request",
        type:"fetch"
    },
    {
        name2:"post",
        type:"implementation"
    },
    {
        name3:"delete",
        type:"drop"
    }
]
db.forEach((items)=>{
    console.log(items.name1)
})