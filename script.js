let totalHeart=0;
const totalClickHeart=document.getElementById("total-heart-count");
const iconBtns=document.querySelectorAll(".heart-icon");

for(let iconBtn of iconBtns){
    iconBtn.addEventListener("click",function(){
        totalHeart++;
        totalClickHeart.innerText=totalHeart;
    })
}
