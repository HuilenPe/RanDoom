let functionalityQuestion = document.getElementById('functionality-question')
let functionality = document.getElementById('functionality')
let functionalityAnswer = document.getElementById('functionality-answer')

functionality.style.display='none'
functionalityAnswer.style.display='none'

functionalityQuestion.onclick=()=>{
    functionality.style.display='block';
    functionalityQuestion.style.display='none';
    functionalityAnswer.style.display='block';
}

functionalityAnswer.onclick=()=>{
    functionality.style.display='none';
    functionalityQuestion.style.display='block';
    functionalityAnswer.style.display='none';
}

let accessQuestion = document.getElementById('access-question')
let access = document.getElementById('access')
let accessAnswer = document.getElementById('access-answer')

access.style.display='none'
accessAnswer.style.display='none'

accessQuestion.onclick=()=>{
    access.style.display='block';
    accessQuestion.style.display='none';
    accessAnswer.style.display='block';
}

accessAnswer.onclick=()=>{
    access.style.display='none';
    accessQuestion.style.display='block';
    accessAnswer.style.display='none';
}


let dietQuestion = document.getElementById('diet-question')
let diet = document.getElementById('diet')
let dietAnswer = document.getElementById('diet-answer')

diet.style.display='none'
dietAnswer.style.display='none'

dietQuestion.onclick=()=>{
    diet.style.display='block';
    dietQuestion.style.display='none';
    dietAnswer.style.display='block';
}

dietAnswer.onclick=()=>{
    diet.style.display='none';
    dietQuestion.style.display='block';
    dietAnswer.style.display='none';
}


let noQuestion = document.getElementById('no-question')
let no = document.getElementById('no')
let noAnswer = document.getElementById('no-answer')

no.style.display='none'
noAnswer.style.display='none'

noQuestion.onclick=()=>{
    no.style.display='block';
    noQuestion.style.display='none';
    noAnswer.style.display='block';
}

noAnswer.onclick=()=>{
    no.style.display='none';
    noQuestion.style.display='block';
    noAnswer.style.display='none';
}


let saveQuestion = document.getElementById('save-question')
let save = document.getElementById('save')
let saveAnswer = document.getElementById('save-answer')

save.style.display='none'
saveAnswer.style.display='none'

saveQuestion.onclick=()=>{
    save.style.display='block';
    saveQuestion.style.display='none';
    saveAnswer.style.display='block';
}

saveAnswer.onclick=()=>{
    save.style.display='none';
    saveQuestion.style.display='block';
    saveAnswer.style.display='none';
}