const themeEL = document.querySelectorAll('.main .main-theme div ul li');
const themeColor = document.querySelectorAll('.main .main-theme div span span');
const mainTheme= document.querySelector(".main-theme");
const mainEcran= document.querySelector(".main-ecran");
const mainKeys= document.querySelector(".main-keys");
const mainKeysElement= document.querySelectorAll(".main-keys>div");
const keyDel = document.querySelector('.del');
const keyRest = document.querySelector('.reset');
const keyResult = document.querySelector('.result');

let result=0; 
for(let i =0 ; i<themeEL.length ; i++){
   themeEL[i].addEventListener('click' , ()=>{
     i !== 2 ? themeColor[i].style.backgroundColor="var(--Orange)"  : themeColor[i].style.backgroundColor="var(--Pure-cyan)";
   for(let j=0 ; j<themeColor.length; j++){
       if(j != i){
          themeColor[j].style.backgroundColor="transparent";
       }
   }
   
   if(i==1){
    document.body.style.background="var(--Light-gray)";
    mainTheme.style.color="var(--Very-dark-desaturated-blue1)";
    mainEcran.style.backgroundColor="#FFF";
    mainEcran.style.color="#191919";
    mainKeys.style.backgroundColor="var(--Grayish-red)";
    mainKeys.style.color="#191919";
    for(let i=0 ; i<mainKeysElement.length ; i++){
        mainKeysElement[i].style.backgroundColor="#FFF";
        mainKeysElement[i].style.boxShadow =" 0px 4px 0px  0px  var(--Dark-grayish-orange)"
    }
    keyDel.style.backgroundColor="var(--Dark-moderate-cyan)";
    keyDel.style.boxShadow="0px 4px 0px  0px  var(--Very-dark-cyan)"
    keyRest.style.backgroundColor="var(--Dark-moderate-cyan)";
    keyRest.style.boxShadow="0px 4px 0px  0px  var(--Very-dark-cyan)"
    keyResult.style.backgroundColor="var(--Orange)";
    keyResult.style.color="#191919";
    keyResult.style.boxShadow="0px 4px 0px  0px  var(--Dark-orange)";
}

else if (i==2){
    document.body.style.background="var(--Very-dark-violet)";
   mainTheme.style.color="var(--Light-yellow)";
    mainEcran.style.color="var(--Light-yellow)";
    mainKeys.style.color="var(--Very-dark-viole)";
    for(let i=0 ; i<mainKeysElement.length ; i++){
        mainKeysElement[i].style.backgroundColor="var(--Dark-violet)";
        mainKeysElement[i].style.boxShadow =" 0px 5px 0px  0px  var(--Dark-magenta)"
    }
    keyDel.style.backgroundColor="var(--Vivid-magenta)";
    keyRest.style.backgroundColor="var(--Vivid-magenta)";
    keyResult.style.backgroundColor="var(--Pure-cyan)";
    keyResult.style.color="#191919";
    keyResult.style.boxShadow="none";
}
else{
        document.body.style.background="var(--Very-dark-desaturated-blue)";
        mainTheme.style.color="#FFF";
        mainEcran.style.backgroundColor="var(--Very-dark-desaturated-blue2)";
        mainEcran.style.color="#FFF";
        mainKeys.style.backgroundColor="var(--Very-dark-desaturated-blue2)";
        mainKeys.style.color="#191919";
        for(let i=0 ; i<mainKeysElement.length ; i++){
            mainKeysElement[i].style.backgroundColor="#FFF";
        }
        keyDel.style.backgroundColor="var(--Very-dark-desaturated-blue)";
        keyRest.style.backgroundColor="var(--Very-dark-desaturated-blue)";
        keyResult.style.backgroundColor="var(--Orange)";
        keyResult.style.color="#FFF";
} 
})}

//calcule the result code

for (let i =0 ; i<mainKeysElement.length ; i++){
    mainKeysElement[i].onclick = mainKeysElement[i].style.boxShadow="none";
   mainKeysElement[i].addEventListener("click" , ()=>{
    
    
    
    if(((mainKeysElement[i].textContent))>=0){
        mainEcran.textContent += mainKeysElement[i].textContent;
        result += (mainKeysElement[i].textContent).n; 
    }
    else if(mainKeysElement[i].textContent === "reset"){
        mainEcran.textContent = "";
        result="";
    }
    else if(mainKeysElement[i].textContent === "Del"){
        mainEcran.textContent = mainEcran.textContent.slice(0,-1);
    }
    else if (mainKeysElement[i].textContent == "="){
    try{
        mainEcran.textContent = eval(mainEcran.textContent);
    }catch{
        mainEcran.textContent = "ERROR";
    }
}
else if (mainKeysElement[i].textContent == "."){
    mainEcran.textContent += `${mainKeysElement[i].textContent}`;
}
else{
    mainEcran.textContent += ` ${mainKeysElement[i].textContent} `;
}
   
   })
}
