let form=document.getElementsByClassName('inputs')
let num1=document.getElementById('first-number')
let num2=document.getElementById('second-number')
let ans=document.getElementById('answer')
let add=document.getElementById('btn-add')
let sub=document.getElementById('btn-sub')
let mult=document.getElementById('btn-mult')
let divi=document.getElementById('btn-div')



// function getNumbers(){
//     var num1=document.getElementById('first-number').value
//     var num2=document.getElementById('second-number').value
// }


// num1=nu
// // form.addEventListener('submit', (e)=>{

// //         e.preventault();})


add.addEventListener('click',()=>{
    
    console.log(num1.value)
    console.log(num2.value)
    let a = (num1.value)+(num2.value)
    console.log(a.value)
    ans.innerHTML=a


    })

sub.addEventListener()