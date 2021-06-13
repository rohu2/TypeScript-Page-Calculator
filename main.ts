const {['log']:c} = console


function getUserInfo(){

const totalPgs = window.prompt('How many pages does the book have?')
const auth = window.prompt('What is the name of the author?')
const title = window.prompt('What is the title of the book?')

document.getElementById("author").innerHTML = auth
document.getElementById("title").innerHTML = title

return totalPgs
    
}


function pageCalculator(totalPgs:string){

const pg: number = Number(totalPgs) / 100


for (let i = 1; i < 101; i++) {

const box = document.getElementById(`box${i}`)
!!box ? box.innerHTML  = String(Math.round(pg * i)) : '' ;

}
}


pageCalculator(getUserInfo())
