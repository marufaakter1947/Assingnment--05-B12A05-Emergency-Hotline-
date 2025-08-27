// heart icon functionality
let totalHeart=0;
let totalCopy=0;
let reduceCoins=20;
const historyData=[];
const totalClickHeart=document.getElementById("total-heart-count");
const iconBtns=document.querySelectorAll(".heart-icon");

for(let iconBtn of iconBtns){
    iconBtn.addEventListener("click",function(){
        totalHeart++;
        totalClickHeart.innerText=totalHeart;
    })
}
// click Copy number update
const totalClickCopy=document.getElementById("total-copy-count");
const copyBtns=document.querySelectorAll(".copy-btn");

for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click",function(){
        totalCopy++;
        totalClickCopy.innerText=totalCopy;
    })
}

// functions to get innerText

function getInnerText(id) {
  const getText = document.getElementById(id).innerText;
  return getText;
}
// Function to set innerText
function setInnerText(value) {
  const availableCoinsElement = document.getElementById("available-coins");
  availableCoinsElement.innerText = value;
}

//National call button functionality

document.getElementById("national-call").addEventListener("click",function(){
//    const serviceName= document.getElementById("national-title").innerText;
   const serviceName= getInnerText("national-title");
   const serviceNumber=getInnerText("national-number");
   const alertMessage= "📞 calling"+ " " + serviceName + " " + serviceNumber +"...";
   alert(alertMessage);
   const availableCoins=getInnerText("available-coins");
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


// function for copy hotline Number
function getHotlineNumber(id){
    const getNumber=getInnerText(id).trim();
     navigator.clipboard.writeText(getNumber).then(function(){
    alert("Copied: "+ getNumber);
   });
   return getNumber;
}

document.getElementById("national-copy").addEventListener("click",function(){
getHotlineNumber("national-number");
    });

    document.getElementById("police-copy").addEventListener("click",function(){
getHotlineNumber("police-number");
    });

      document.getElementById("fire-copy").addEventListener("click",function(){
getHotlineNumber("fire-number");
    });

      document.getElementById("ambulance-copy").addEventListener("click",function(){
getHotlineNumber("ambulance-number");
    });
      document.getElementById("w-c-help-copy").addEventListener("click",function(){
getHotlineNumber("w-c-help-number");
    });
      document.getElementById("anti-cr-copy").addEventListener("click",function(){
getHotlineNumber("anti-cr-number");
    });
      document.getElementById("electricity-copy").addEventListener("click",function(){
getHotlineNumber("electricity-number");
    });
      document.getElementById("brac-copy").addEventListener("click",function(){
getHotlineNumber("brac-number");
    });
      document.getElementById("railway-copy").addEventListener("click",function(){
getHotlineNumber("railway-number");
    });