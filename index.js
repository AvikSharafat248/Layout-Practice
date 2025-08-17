let show = document.getElementById('show-plus')
let answer1= document.getElementById('answer1')

show.addEventListener('click', function(){
    if(answer1.style.display==='block'){
        answer1.style.display='none'
        show.src='./images/icon-plus.svg'
    }else{
        answer1.style.display='block'
        show.src= '/images/icon-minus.svg'
    }
})

let show2 = document.getElementById('show2')
let answer2= document.getElementById('answer2')

show2.addEventListener('click', function(){
    if(answer2.style.display==='block'){
        answer2.style.display='none'
        show2.src='./images/icon-plus.svg'
    }else{
        answer2.style.display ='block'
        show2.src ='./images/icon-minus.svg'
    }
})

show3.addEventListener('click', function(){
    if(answer3.style.display==='block'){
        answer3.style.display='none'
        show3.src='./images/icon-plus.svg'
    }else{
        answer3.style.display ='block'
        show3.src ='./images/icon-minus.svg'
    }
})

let last = document.getElementById('last')
let intro = document.getElementById('intro')

last.addEventListener('click', function(){
    if(intro.style.display==='block'){
        intro.style.display='none'
        last.src='./images/icon-plus.svg'
    }else{
        intro.style.display='block'
        last.src='./images/icon-minus.svg'
    }
})