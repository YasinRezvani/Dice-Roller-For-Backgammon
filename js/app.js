let btn = document.querySelector('.btn');
let diceres = document.querySelector('.dice-res') ;
let dice = document.querySelector('.dice');
let die = document.querySelector('.die');
let animation = document.querySelector('.animation');

let dicearray1 = ['one','two','three','four','five','six'];
let dicearray2 = ['one','two','three','four','five','six'];

btn.addEventListener('click' , function(){
    let dicerandom1  = Math.floor(Math.random() * dicearray1.length);
    let dicerandom2  = Math.floor(Math.random() * dicearray1.length);
    let res1 = dicearray1[dicerandom1];
    let res2 = dicearray2[dicerandom2];
    
    diceresult(res1,res2);
    die.classList.toggle('rot');

})


function diceresult(res1,res2){
    if(res1 === res2){
        diceres.innerHTML = `
        <p style="color:green;">" امروز شانس باهات هست"</p>       
                <i class="die fas fa-dice-${res1}"></i>
                <i class="die fas fa-dice-${res2}"></i>
        `
    }

    else{
        diceres.innerHTML = `
        <p style="color:red;">" دوباره امتحان کن"</p>       
                <i class="die fas fa-dice-${res1}"></i>
                <i class="die fas fa-dice-${res2}"></i>
        `
    }
}
/*var res;
function randomjs(max , min){

    document.getElementById('aa').innerHTML = Math.floor(Math.random() * (max-min+1) + min);
    document.getElementById('bb').innerHTML = Math.floor(Math.random() * (max-min+1) + min);
    
     res = randomjs(6,1);
}
randomjs();
 console.log(res)


*/

