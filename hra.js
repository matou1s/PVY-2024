console.log(`AHOJDA lasko copak tu podledáváš` )

const heslodobrodruha = '123456'
let prihlaseny = false;
let spatnePrihlaseni = 0

let jmenodobrodruha = window.prompt('Ahojky jak tě mame nazívat?')
console.log('Tvé jméno je ' + jmenodobrodruha + '.')

do {
   const zadaneheslo = window.prompt(`zadejte heslo ${jmenodobrodruha}`)
   if (zadaneheslo === heslodobrodruha){
    window.alert('vítej kamaráde')
    prihlaseny = true;
   }

   else{
    spatnePrihlaseni ++;
   }
    if(spatnePrihlaseni > 3){
        const jerobot = window.confirm('jsi robot?')
    }

   } while (!prihlaseny);

const MINIMUM = 20;
const MAXIMUM = 50; 



//radek 33 az radek 53 prevzato 

const máráddobrodružství = window.confirm('Máš rád dobrodružství')

if (máráddobrodružství) {
    window.alert('jsi tu správně ' +jmenodobrodruha+ '.')

let vekUzivatele = window.prompt('jak jsi starý ' + jmenodobrodruha+ '?')

if (Number(vekUzivatele) >= MINIMUM){
    window.alert('Těšíš se na největší dobrodružství svého života?')
}

else {
    if(!isNaN(vekUzivatele)) {
        window.alert('jsi moc mladý na to abys zažil dobrodrůžo, vymysli si větší věk a zažiz dobrodružství s námi!!')
    }
}

}
else{
    window.alert('jdi dále v tomto případě tady nemáš co pohledávat!')
}

const myButton = document.getElementById('myButton');


document.querySelector('.myButton').addEventListener('click', () => {
    
    window.alert('Ahoj! Jak se máš?')
})
