const marco = {
 name:"marco",
 lastName: "Rossi",
 isAmbassador : true,
}

const amy = {
    name:"paul",
    lastName: "Flynn",
    isAmbassador : false,
   }

   const paul = {
    name:"amy",
    lastName: "Reed",
    isAmbassador : false,
   }

   const prices = [34,5,2];
   const shippingCost = 50
   let usershop = amy

   let listaUtenti = [];
   let listaAmbassador = [];
   listaUtenti.push(marco, amy , paul);
   console.log(listaUtenti);

   for(let i = 0 ; i < listaUtenti.length; i++){
    if(listaUtenti[i].isAmbassador === true){
        console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName + " è un Ambassador" );
      listaAmbassador.push(listaUtenti[i]);
    }else{
        console.log(listaUtenti[i].name + " " + listaUtenti[i].lastName + " non è un Ambassador" );
    }
   }

   console.log(listaAmbassador)


let user = amy ;
const prices = [34 , 5 ,2 ];
const shippingCost = 50;
let finalprice = 0;

console.log(finalprice)

function totale(price , user , shippingCost) {
 for( let i = 0 ; i < price.length; i++){
  finalprice += price[i];

  console.log(finalprice)
 }

 console.log(amy);

  
