const body=document.querySelector("body");
const gnBTN=document.querySelector("#genrator");
const randomCDO=document.querySelector("#hexCode");
const copy=document.querySelector("#copy");
const coppied=document.querySelector("#copied")



gnBTN.addEventListener("click" ,()=>{
        randomClr();
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(randomCDO.innerHTML).then(() => {
    coppied.innerHTML="Color Code Copied!"
    });
});

function randomClr(){
    const randomNum=Math.floor(Math.random()*16777216);
    const randomColorCode="#"+ randomNum.toString(16);
    body.style.backgroundColor=randomColorCode;
    document.getElementById("preBox").style.backgroundColor=randomColorCode;
    randomCDO.innerHTML=randomColorCode;
    coppied.innerHTML="";
 
}

randomClr();