const delay = ms => new Promise(res => setTimeout(res,ms));
console.log("hiii")

async function GMSC (){
    while (true){
        document.body.style.backgroundColor="black";
        await delay(500)    
        document.body.style.backgroundColor="red";
        await delay(500)
        document.body.style.backgroundColor="green";
        await delay(500)
    }
}
GMSC