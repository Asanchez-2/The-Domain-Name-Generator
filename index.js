var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

var domainGenerator = "";
var countIndex = 0;

for ( let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
            domainGenerator+="<li>" + pronoun[i] + adj[j] + noun[k] + ".com" + "</li>";
        }
    }
}
console.log(domainGenerator);
document.querySelector("#domainList").innerHTML = domainGenerator;
