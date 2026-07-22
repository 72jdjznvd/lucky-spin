const symbols = ["🍒","🍋","🍉","🍇","⭐","💎","7️⃣"];

let coins = 1000;

const reels = [
document.getElementById("r1"),
document.getElementById("r2"),
document.getElementById("r3")
];

const balance = document.getElementById("coins");
const result = document.getElementById("result");
const spinBtn = document.getElementById("spin");

function randomSymbol(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

spinBtn.onclick = ()=>{

    if(coins<10){
        result.innerHTML="❌ Jeton yoxdur!";
        return;
    }

    coins-=10;
    balance.innerHTML=coins;

    spinBtn.disabled=true;
    result.innerHTML="🎰 Fırlanır...";

    let speed=setInterval(()=>{

        reels.forEach(r=>{
            r.innerHTML=randomSymbol();
        });

    },70);

    setTimeout(()=>{

        clearInterval(speed);

        const a=randomSymbol();
        const b=randomSymbol();
        const c=randomSymbol();

        reels[0].innerHTML=a;
        reels[1].innerHTML=b;
        reels[2].innerHTML=c;

        if(a==b && b==c){

    coins+=100;

    reels.forEach(r=>r.classList.add("win"));

    setTimeout(()=>{
        reels.forEach(r=>r.classList.remove("win"));
    },3000);

    result.innerHTML="🎉 JACKPOT! +100";
        }

        }else if(a==b || b==c || a==c){

            coins+=30;

            result.innerHTML="✨ Qazandın +30";

        }else{

            result.innerHTML="😔 Uduzdun";

        }

        balance.innerHTML=coins;
        spinBtn.disabled=false;

    },2000);

    }
