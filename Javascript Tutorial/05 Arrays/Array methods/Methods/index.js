//push():add to end
let heros1 = ["ironman", "thor", "hulk", "spiderman"]
heros1.push("Deep")
console.log(heros1)

//pop():delete from end & return
let heros2 = ["ironman", "thor", "hulk", "spiderman"]
console.log(heros2)
let deleteItem =heros2.pop()
console.log(heros2)
console.log("deleteItem =",deleteItem)

//toString():converts array to string
let heros3 = ["ironman", "thor", "hulk", "spiderman"]
let num =[85, 97, 44, 37, 76, 60]
console.log(heros3)
console.log(heros3.toString())
console.log(num)
console.log(num.toString())

//concat():joins multiple arrays & retruns resilt
let marvrel_heroes1 = ["ironman", "thor", "hulk", "spiderman"]
let dc_heroes =["superman", "batman"]
let indian_heros=["shaktiman"]
let heros4=marvrel_heroes1.concat(dc_heroes,indian_heros)
console.log(heros4)

//unshift:add to start 
let marvrel_heroes2 = ["ironman", "thor", "hulk", "spiderman"]
marvrel_heroes2.unshift("Deep")//unshift means add value to start
console.log(marvrel_heroes2)

//shift():delete from start & retrun
let marvrel_heroes3 = ["ironman", "thor", "hulk", "spiderman"]
let del=marvrel_heroes2.shift()//shift means delete value from start
console.log(marvrel_heroes3)
console.log("delete =",del)

//slice():returns a piece of the array
let marvrel_heroes4 = ["ironman", "thor", "hulk", "spiderman"]
console.log(marvrel_heroes4)
console.log(marvrel_heroes4.slice(1,3))
console.log(marvrel_heroes4.slice(1))


//splice():change original array(add,remove,replace)
let arr1 =[1,2,3,4,5,6,7,8]
arr1.splice(2,2,101,102)//add,delete,repalce
console.log(arr1)

let arr2 =[1,2,3,4,5,6,7,8]
arr2.splice(2,0,101,102)//add element
console.log(arr2)

let arr3 =[1,2,3,4,5,6,7,8]
arr3.splice(3,1)//delete element
console.log(arr3)
let arr4 =[1,2,3,4,5,6,7,8]
arr4.splice(3,1,101)
console.log(arr4)


