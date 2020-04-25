window.onload = () => {
    document.querySelector('#btn').addEventListener("click", () => {
        document.querySelector('#domain').innerHTML = generateDomain();

var generateDomain = () => {

    let pronoun = ["the", "our"];
    let adj = ["great", "big"];
    let noun = ["jogger", "racoon"];

    let pronounRandom = Math.floor(Math.random() * (pronoun.length));
    console.log(pronounRandom);
    let adjRandom = Math.floor(Math.random() * (adj.length));
    console.log(adjRandom);
    let nounRandom = Math.floor(Math.random() * (noun.length));
    console.log(nounRandom);

    return pronoun[pronounRandom] + adj[adjRandom] + noun[nounRandom] + "com";
};
console.log(generateDomain);