let lines = "Явление I\n" +
    "Городничий, попечитель богоугодных заведений, смотритель училищ, судья, частный пристав, лекарь, два квартальных.\n" +
    "Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.\n" +
    "Аммос Федорович. Как ревизор?\n" +
    "Артемий Филиппович. Как ревизор?\n" +
    "Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.\n" +
    "Аммос Федорович. Вот те на!\n" +
    "Артемий Филиппович. Вот не было заботы, так подай!\n" +
    "Лука Лукич. Господи Боже! еще и с секретным предписаньем!\n";
var phrases = [[], []];
var roles = ["Городничий", "Лука Лукич", "Аммос Федорович", "Артемий Филиппович"];
var word = "";
var currentRole ="";
function Parse(){
for (i = 0; i < lines.length - 1; i++) {

    if (lines[i] === "\n") {
        if (currentRole !== "") {
            phrases.push([[""], [""]]);
            phrases[phrases.length - 1] [0] = currentRole;
            phrases[phrases.length - 1] [1] = word;
        }

        word = "";
        currentRole = "";
        continue;
    }

    if (roles.indexOf(word) === -1 || currentRole !== "") {

        word += lines[i];

    } else {

        currentRole = word;
        word = phrases.length + 1 + ") ";

    }

}

if (currentRole !== "") {
    phrases.push();
    phrases[phrases.length - 1] [0] = currentRole;
    phrases[phrases.length - 1] [1] = word;
}

let count = 0;
let first;
for (let ch of roles) {
    for (let ph of phrases) {
        first = true;
        if (ch == ph[0]) {

            if (first) {
                console.log(ch + ":" + "\n");
                first = false;
            }
            console.log(ph[1] + "\n");
        }

    }

}
}
Parse()
