// heart icon functionality
let totalHeart=0;
const totalClickHeart=document.getElementById("total-heart-count");
const iconBtns=document.querySelectorAll(".heart-icon");

for(let iconBtn of iconBtns){
    iconBtn.addEventListener("click",function(){
        totalHeart++;
        totalClickHeart.innerText=totalHeart;
    })
}

// function to set inner text
function setInnerText(value) {
  const availableCoinsElement = document.getElementById("available-coins");
  availableCoinsElement.innerText = value;
}

// call button functionality
let reduceCoins=20;
document.getElementById("national-call").addEventListener("click",function(){
   const serviceName= document.getElementById("national-title").innerText;
   const serviceNumber=document.getElementById("national-number").innerText;
   const alertMessage= "📞 calling"+ " " + serviceName + " " + serviceNumber +"...";
   alert(alertMessage);
   const availableCoins=document.getElementById("available-coins").innerText;
   if(availableCoins<reduceCoins){
alert("You don't have sufficient coins");
return;
   }
   const currentCoins=Number(availableCoins)- Number(reduceCoins);

   setInnerText(currentCoins);

})