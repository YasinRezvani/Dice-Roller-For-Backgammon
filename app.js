var res;function randomjs(max , min){

    document.getElementById('aa').innerHTML = Math.floor(Math.random() * max-min + 1) + min;
    document.getElementById('bb').innerHTML = Math.floor(Math.random() * max-min + 1) + min;
    
     res = randomjs(6,1);
}
randomjs();
 console.log(res)




