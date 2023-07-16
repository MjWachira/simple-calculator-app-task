let form=document.getElementsByClassName('inputs')
let num1=document.getElementById('first-number')
let num2=document.getElementById('second-number')
let ans=document.getElementById('answer')
let add=document.getElementById('btn-add')
let sub=document.getElementById('btn-sub')
let mult=document.getElementById('btn-Mult')
let divi=document.getElementById('btn-div')



add.addEventListener('click',()=>{
    vnum1=num1.value
    vnum2=num2.value
    sum=parseFloat(vnum1)+ parseFloat(vnum2)
    console.log(sum)
    ans.innerHTML=sum    
})

sub.addEventListener('click',()=>{
    vnum1=num1.value
    vnum2=num2.value
    sub=parseFloat(vnum1)- parseFloat(vnum2)
    console.log(sub)
    ans.innerHTML=sub
})

divi.addEventListener('click',()=>{
    vnum1=num1.value
    vnum2=num2.value
    div=parseFloat(vnum1)/parseFloat(vnum2)
    console.log(div)
    ans.innerHTML=div
})
 mult.addEventListener('click',()=>{
    vnum1=num1.value
    vnum2=num2.value
    multi=parseFloat(vnum1)*parseFloat(vnum2)
    console.log(multi)
    ans.innerHTML=multi 
})