"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//modulos- export e import
const Classes_1 = require("./Classes"); // importando do arquivo Classes
const p1 = new Classes_1.Pessoa('bruno', 1.80);
const o1 = new Classes_1.Objeto('tiago');
console.log(p1.nome);
console.log(p1.altura);
