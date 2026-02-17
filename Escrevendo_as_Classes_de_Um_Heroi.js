//Heroclass
class fichaHerio {
    constructor(nome , idade , tipo ) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }
    ataque(){
        let heroiAtaque;
       if(this.tipo == "guerreiro"){
           heroiAtaque = "usou espada"
       }
       else if (this.tipo == "mago"){
           heroiAtaque = "usou magia"
       }
       else if (this.tipo == "monge"){
           heroiAtaque = "usou artes marciais"
       }
       else if (this.tipo == ninja){
           heroiAtaque = "usou shuriken"
       }
       return heroiAtaque
    }
}

let seuHeroi = new fichaHerio("Havenothuh", 34, "monge")

console.log(`O ${seuHeroi.tipo} atacou usando ${seuHeroi.ataque()}`)