"use strict";
//ENUM- enumaradores
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["domingo"] = 1] = "domingo";
    diasSemana[diasSemana["segunda"] = 2] = "segunda";
    diasSemana[diasSemana["terca"] = 3] = "terca";
    diasSemana[diasSemana["quarta"] = 4] = "quarta";
    diasSemana[diasSemana["quinta"] = 5] = "quinta";
    diasSemana[diasSemana["sexta"] = 6] = "sexta";
    diasSemana[diasSemana["sabado"] = 7] = "sabado";
})(diasSemana || (diasSemana = {}));
// console.log(diasSemana.domingo)
// console.log(diasSemana['domingo'])
// console.log(diasSemana[1])
const data = new Date();
// console.log(data.getDate())
// console.log(diasSemana[data.getDay() + 1])
//enum textual
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["azul"] = "#00f";
    cores["verde"] = "#0f0";
    cores["vermelho"] = "#f00";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
// enum sem especificar numero
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["ADMIN"] = 10] = "ADMIN";
    tipoUsuario[tipoUsuario["NORMAL"] = 100] = "NORMAL";
    tipoUsuario[tipoUsuario["VISITANTE"] = 1000] = "VISITANTE";
})(tipoUsuario || (tipoUsuario = {}));
console.log(tipoUsuario.ADMIN);
//enum como tipo
const tp = tipoUsuario.ADMIN;
console.log(tp);
