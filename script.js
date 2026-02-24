//1
function dobro (num){
    return num*2;

}
console.log(dobro(5))

///////////////////////////////////////////////////

//2
function triplo (num){
    return num*3;

}
console.log(triplo(5))

///////////////////////////////////////////////////

//3
function somar(a, b){
    return a + b ;

}
console.log(somar(2,3))
//2 = a e 3 = b


///////////////////////////////////////////////////

//4
function multi (a, b){
    return a * b ;

}
console.log(multi(2,3))


/////////////////////////////////////////////////

//5
function realToDolar (a){
    return a * 5,18;

}
console.log(realToDolar(20))


/////////////////////////////////////////////////

//6
function dolarToReal (a){
    return a / 5,18;

}
console.log(dolarToReal(20))

/////////////////////////////////////////////////

//7
function salario (a,aumento){
    

    return a + (a * (aumento / 100));

}
console.log(salario(7000,10))

//////////////////////////////////////////////////////

//8
function parImpar (a){
    
    if (a % 2 === 0){
         return "É par"
    }
    else{
         return "é impar"
    }


}
console.log(parImpar(49))

////////////////////////////////////////////////////////////

//9

function contar(){
    
    for (let i=1 ; i <=10; i++){
    console.log(i)
}

    

}
contar() 

//////////////////////////////////////////////////////////////////
//10

function contar(a){
    
    for (let i=1 ; i <=a; i++){
    console.log(i)
}

    

}
contar(50) 


///////////////////////////////////////////////////////////////////

//11
function somarAteDez() {
  let soma = 0;
  // Loop para somar de 1 até 10
  for (let i = 1; i <= 10; i++) {
    soma += i;
  }
  return soma;
}

console.log(somarAteDez()); // Resultado: 55

///////////////////////////////////////////////////////////////////

//12


function contar(a){
    
    for (let i=1 ; i <=a; i++){
        if (i % 2===0){
            console.log(i)
        }
    
}


}
contar(10) 

///////////////////////////////////////////////////////////////////


//13


function cont(a){
    
    for (let i=1 ; i <=10; i++){
        console.log(a * i)
    
}

    

}
cont(9) 

///////////////////////////////////////////////////////////////////


//14



function contando(){
    
    for (let i=10 ; i >=0; i--){
    console.log(i)
}

    

}
contando() 

///////////////////////////////////////////////////////////////////


//15



function continha(){
    
    for (let i=1; i <=27; i++){
    console.log(i)
}

}
continha() 

///////////////////////////////////////////////////////////////////


//16



function co(a){
    
     for (let i=1 ; i <=a; i++){
        if (i % 2===0){
            console.log(i)
        }
    
}

    

}
co(50) 

///////////////////////////////////////////////////////////////////


//17
function con(a){
    
     for (let i=1 ; i <=a; i++){
        if (i % 2===1){
            console.log(i)
        }
    
}

    

}
con(50) 

///////////////////////////////////////////////////////////////////


//18
function media(a , b){
    let reusltado = (a+b)/2.
    return reusltado
    
    
}

console.log(media(20,50))




///////////////////////////////////////////////////////////////////


//19
function medi(a){
    
    return a * a
    
    
}

console.log(medi(2))


