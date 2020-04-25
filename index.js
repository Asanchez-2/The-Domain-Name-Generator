var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

function DomainGenerator (i,j,k){
    for (let i = 0; i < pronoun.length; i++){
    for (let j = 0; j < adj.length; j++){
        for (let k = 0; k < noun.length; k++){
            console.log(pronoun[i] + adj[j] + noun[k] + ".com");
        }
    }
    }
}

document.getElementById("domain").innerHTML= DomainGenerator