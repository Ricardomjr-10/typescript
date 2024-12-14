"use strict";
//static poo - propriedades ou  metodos estaticos - menbros associados a classe e nao a instancia
//mesmo endereço de memoria - apontando para o mesmo endereço de memoria
//globais
Object.defineProperty(exports, "__esModule", { value: true });
const globais_1 = require("./globais");
console.log(globais_1.Globais.teste);
globais_1.Globais.teste = 10;
