let btn = document.querySelector('.btn');
let diceres = document.querySelector('.dice-res') ;
let dice = document.querySelector('.dice');

let dicearray1 = ['one','two','three','four','five','six'];
let dicearray2 = ['one','two','three','four','five','six'];


var res;function randomjs(max , min){

    document.getElementById('aa').innerHTML = Math.floor(Math.random() * (max-min+1) + min);
    document.getElementById('bb').innerHTML = Math.floor(Math.random() * (max-min+1) + min);
    
     res = randomjs(6,1);
}
randomjs();
 console.log(res)




