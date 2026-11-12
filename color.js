const delay = ms => new Promise(res => setTimeout(res,ms));
console.log("hiii")

async function GMSC (){
    while (true){
        for(let i = 0; i <= 100; i++){
            document.body.style.backgroundColor=`color-mix(in srgb,green ${i}%, #ea1c1c)`;
            await delay(50)
        }
        
    }
}
GMSC()