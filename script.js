// heart icon functionality
let totalHeart=0;
const historyData=[];
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

   const data = {
      name: "National Emergency Number",
      number: 999,
      Date: new Date().toLocaleTimeString(),
    };
    historyData.push(data);

//    Add call history

const callHistory=document.getElementById("history-container");
callHistory.innerText="";
for(const data of historyData){
     const div = document.createElement("div");
     div.innerHTML=`
     <div class="bg-[#FAFAFA] shadow-[0px_2px_3px_0px_#00000026,0px_-2px_3px_0px_#00000026]  p-4 rounded-lg flex justify-between items-center mb-2">
<div >
<h1 class="text-[18px] font-semibold text-[#111111]">${data.name}</h1>
<h1>${data.number}</h1>
    </div>
    <div>
<p class="text-[#111111] font text-[18px]">${data.Date}</p>
    </div>
    </div>
     `;
callHistory.appendChild(div);
}

});