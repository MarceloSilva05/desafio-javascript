
//1
let regras = `1.tesoura corta papel; 
2.papel cobre veneno;
3.pedra esmaga lagarto;
4.lagarto corta Spock;
5.Spock vaporiza tesoura;
6.tesoura decapita Spock;
7.lagarto come papel;
8.veneno refuta lagarto;
9.Spock vaporiza pedra;
10.veneno esmaga tesoura.`;
regras=regras.replace(/esmaga/g,"quebra").replace(/veneno/g,"pedra").replace(/lagarto/g,"tesoura")
.replace(/Spock/g,"papel").replace(/vaporiza/g,"embrulha").replace("cobre","embrulha")
.replace("decapita","corta").replace("come","corta").replace("refuta","quebra");
console.log(regras);

