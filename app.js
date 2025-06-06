let gameSeq=[];
let userSeq=[];

let highScore = 0;
let btns=["yellow","red", "purple", "green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
    console.log("game started");
    started=true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;


    //random btn choose

    let randIdx= Math.floor(Math.random()*3);
    let randColor= btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
}

// function checkAns(idx){
//    // console.log("curr level :", level);
//   // let idx= level -1;

//    if(userSeq[idx]===gameSeq[idx]){
//     if(userSeq.length==gameSeq.length){
//         //levelUp();
//         setTimeout(levelUp, 1000);
//     }
//    // console.log("same value");
//    }
//    else{
//     h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
//     document.querySelector("body").style.backgroundColor="red";
//     setTimeout(function(){
//         document.querySelector("body").style.backgroundColor="white";
//     },150);
//     reset();
//    }

// }


// function checkAns(idx){
//    // console.log("curr level :", level);
//   // let idx= level -1;

//    if(userSeq[idx]===gameSeq[idx]){
//     if(userSeq.length==gameSeq.length){
//         //levelUp();
//         setTimeout(levelUp, 1000);
//     }
//    // console.log("same value");
//    }
//    else{
//    // h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
//    if (level > highScore) {
//     highScore = level;
// }
// h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Highest Score: <b>${highScore}</b><br>Press any key to start.`;

//     document.querySelector("body").style.backgroundColor="red";
//     setTimeout(function(){
//         document.querySelector("body").style.backgroundColor="white";
//     },150);
//     reset();
//    }

// }


// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         if (level > highScore) {
//             highScore = level;
//         }
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Highest Score: <b>${highScore}</b><br>Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function () {
//             document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        let score = level - 1; // last completed level

        if (score > highScore) {
            highScore = score;
        }

        h2.innerHTML = `Game Over! Your score was <b>${score}</b> <br> Highest Score: <b>${highScore}</b><br>Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);

        reset();
    }
}

function btnPress(){
   // console.log("btn was pressed");
   let btn=this;
   userFlash(btn);

   userColor=btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}