"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globais_1 = require("./globais");
globais_1.Globais.teste = 10; // nao precisa instaciar, pois é static
console.log(globais_1.Globais.teste);
