var diop = [
    "J'ai appris que le courage n'est pas l'absence de peur, mais la capacité de la vaincre.  |  Nelson Mandela",
    "Ceux qui manquent de courage ont toujours une philosophie pour le justifier.  |  Albert Camus",
    "Une fois dans sa vie, juste une fois, on devrait avoir suffisamment la foi en quelque chose pour tout risquer pour ce quelque chose.  |  André Breton",
    "L'homme ne peut découvrir de nouveaux océans tant qu'il n'a pas le courage de perdre de vue la côte.  |  André Gide",
    "On ne se libère pas d'une chose en l'évitant, mais en la traversant.  |  Cesare Pavese",
    "Tout le monde connaît la peur, mais quand on l'affronte, quand on admet qu'elle est là, il est possible de la transformer en courage. Le courage, ce n'est pas ne jamais avoir peur, mais faire son devoir même quand on a peur.  |  Desmond Tutu",
    "Le courage consiste à dominer sa peur, non pas à ne pas avoir peur.  |  François Mitterrand",
    "Tout ce que je sais, c'est que je ne sais rien.  |  Socrate",
    "Connais-toi toi-même.  |  Socrate",
    "il faut toujours être décidé sur le parti qu'on doit prendre, le prendre hautement et le suivre toujours.  |  J.J Rousseau"
]
function GenerateurCitations() {
    var index = Math.floor(Math.random() * diop.length);
    var nom = diop[index];
    document.getElementById("taf").innerHTML = "" + nom;
}