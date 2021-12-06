function t3p1paragrafoInnerHtml() {
    document.getElementById("t3p1-muda-paragrafo").innerHTML = 3 + 4;
}

function t3p3alerta() {
    alert(3 + 4);
}

function t3p4consoleLog() {
    console.log(3 + 4);
}

function t3p5print() {
    window.print();
}

function t4p1somandoStrings() {
    document.getElementById("t4p1-somando-strings").innerHTML = "Daniel \"R\"" + " " + "da" + " " + "Roça";
}

function t4p2somandoSnn() {
    document.getElementById("t4p2-somando-snn").innerHTML = "3" + 4 + "1";
}

function t5p1somandoNumeros() {
    let $x, $y, $z;
    $x = 4;
    $y = 2;
    $z = $x + $y;
    document.getElementById("t5-p1-paragrafo").innerHTML =
        'O valor de "z" é ' + $z + '.';
}

//Apenas declarando variáveis aleartórias

function t6p1escrevendoVar() {
    var $cor = "roxo", $sim = "não", $numeros = 78;
    let $coisas = "normais";
    const $queN = "muda";
    document.getElementById("t6-p1-escrevendoVar").innerHTML =
        `Aqui vão algumas variáveis: ${$cor}, ${$sim}, ${$numeros}, ${$coisas} e ${$queN}.`;
}

function t7p1escrevendoArray() {
    var $cor = "roxo", $sim = "não", $numeros = 78;
    let $coisas = "normais";
    const $queN = "muda";
    let array = [$cor, $sim, $numeros, $coisas, $queN];
    document.getElementById("t7-p1-escrevendoArray").innerHTML =
        `Aqui vão algumas variáveis escritas com array: ${array[0]}, ${array[1]}, ${array[2]}, ${array[3]} e ${array[4]}.`;
}

function t8p1objetos() {
    let $pessoa = {
        primeiroNome: "Rafael",
        ultimoNome: "Leal",
        altura: 1.78,
        idade: 30,
        nomeCompleto: function () {
            return this.primeiroNome + " " + this.ultimoNome;
        }
    };
    document.getElementById("t8-p1-objetos").innerHTML =
        `Aqui vão algumas variáveis escritas de um objeto: ${$pessoa.nomeCompleto()} tem ${$pessoa.idade} anos de idade.`;
}

function t9p1usandoTypeof() {
    document.getElementById("t9-p1-usando-typeof").innerHTML =
        typeof "" + "<br>" +
        typeof "John" + "<br>" +
        typeof "John Doe" + "<br>" +
        typeof 0 + "<br>" +
        typeof 314 + "<br>" +
        typeof 3.14 + "<br>" +
        typeof (3.14);
}

function t10p1stringLength() {
    let $t10p1 = "coisas que podem ter um \
tamanho expecífico"
    document.getElementById("t10-p1-string-length").innerHTML = $t10p1 + "<br>" + $t10p1.length;
}

function t11p1indexOfString() {
    let $str = "coisa coisadas coisinhas coisendo"
    document.getElementById("t11-p1-index-of-string").innerHTML =
        $str + "<br>" + $str.indexOf("coisinhas");
}

function t12p1matchString() {
    let $str = "The rain in SPAIN stays mainly in the plain";
    let $res = $str.match(/ain/g);
    document.getElementById("t12-p1-match-string").innerHTML = $res;
}

function t13p1mudaTrecho() {
    let $texto = document.getElementById("t13-p1-muda-trecho").innerHTML;
    document.getElementById("t13-p1-muda-trecho").innerHTML = 
    $texto.replace("aqui","ali");
}

function t14p1p2upperCase() {
    document.getElementById("t14-p1-paragrafo").style.textTransform = "uppercase";
    let $texto2 = document.getElementById("t14-p2-paragrafo").innerHTML;
    document.getElementById("t14-p2-paragrafo").innerHTML =
    $texto2.toUpperCase();
}

function t14p1p2lowerCase() {
    document.getElementById("t14-p1-paragrafo").style.textTransform = "lowercase";
    let $texto2 = document.getElementById("t14-p2-paragrafo").innerHTML;
    document.getElementById("t14-p2-paragrafo").innerHTML =
    $texto2.toLowerCase();
}

function t15p1splitString() {
    let $texto1 = document.getElementById("t15-p1-split-string").innerHTML;
    const $array1 = $texto1.split("a");
    document.getElementById("t15-p1-split-string").innerHTML =
    `${$array1[0]}, ${$array1[1]}, ${$array1[2]}, ${$array1[3]} e ${$array1[4]}`;
}