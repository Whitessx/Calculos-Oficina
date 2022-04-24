// 1. Calcular numero de personas para interior y mcauto. 
// Para ello necestamos disponer de Ventas Totales; Precio Ticket Medio; Desglose en porcentajes entre interior y mcauto. 

//! Variables de los input (GCs/T.Medio/Ventas)
let gcsInterior = document.getElementById("gcsinterior");
let gcsMcauto = document.getElementById("gcsmcauto");
let ticketMedio = document.getElementById("ticketmedio");
let ventasHoraUno = document.getElementById("ventashorauno");
let ventasHoraDos = document.getElementById("ventashorados");
let ventasHoraTres = document.getElementById("ventashoratres");

//! Variables de los input (Sandwiches y Bebidas)

let sandwichesHoraUno = document.getElementById("sandwicheshorauno");
let sandwichesHoraUnoUno = document.getElementById("sandwicheshoraunouno");
let sandwichesHoraDos = document.getElementById("sandwicheshorados");
let sandwichesHoraDosDos = document.getElementById("sandwicheshoradosdos");
let sandwichesHoraTres = document.getElementById("sandwicheshoratres");
let sandwichesHoraTresTres = document.getElementById("sandwicheshoratrestres");

let bebidasHoraUno = document.getElementById("bebidashorauno");
let bebidasHoraUnoUno = document.getElementById("bebidashoraunouno");
let bebidasHoraDos = document.getElementById("bebidashorados");
let bebidasHoraDosDos = document.getElementById("bebidashoradosdos");
let bebidasHoraTres = document.getElementById("bebidashoratres");
let bebidasHoraTresTres = document.getElementById("bebidashoratrestres");

//! Variables de los output (Interior y McAuto)
let resultadoInteriorUno = document.getElementById("gcsinterioruno");
let resultadoInteriorDos = document.getElementById("gcsinteriordos");
let resultadoInteriorTres = document.getElementById("gcsinteriortres");
let resultadoMcautoUno = document.getElementById("gcsmcautouno");
let resultadoMcautoDos = document.getElementById("gcsmcautodos");
let resultadoMcautoTres = document.getElementById("gcsmcautotres");

//! Variables de los output (Sandwiches y Bebidas)

let resultadoSandwichesUno = document.getElementById("resultadosandwichesuno");
let resultadoSandwichesDos = document.getElementById("resultadosandwichesdos");
let resultadoSandwichesTres = document.getElementById("resultadosandwichestres");
let resultadoBebidasUno = document.getElementById("resultadobebidasuno");
let resultadoBebidasDos = document.getElementById("resultadobebidasdos");
let resultadoBebidasTres = document.getElementById("resultadobebidastres");

const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener('click', calculo);

function calculo() {

  // Calculamos GCs Interior para la hora Uno.
  let valorEnGcsInterior = gcsInterior.value; 
  let valorVentashoraUno = ventasHoraUno.value;
  let valorTicketMedio = ticketMedio.value;
  let resultadoInteriorHoraUno = (valorVentashoraUno / valorTicketMedio) * valorEnGcsInterior / 100;
  resultadoInteriorUno.innerHTML = parseInt(resultadoInteriorHoraUno);

  // Calculamos GCs Interior para la hora Dos.
  let valorVentashoraDos = ventasHoraDos.value;
  let resultadoInteriorHoraDos = (valorVentashoraDos / valorTicketMedio) * valorEnGcsInterior / 100;
  resultadoInteriorDos.innerHTML = parseInt(resultadoInteriorHoraDos);

  // Calculamos GCs Interior para la hora Tres.
  let valorVentashoraTres = ventasHoraTres.value;
  let resultadoInteriorHoraTres = (valorVentashoraTres / valorTicketMedio) * valorEnGcsInterior / 100;
  resultadoInteriorTres.innerHTML = parseInt(resultadoInteriorHoraTres);

  // Calculamos GCs McAuto para la hora Uno.
  let valorEnGcsMcAuto = gcsMcauto.value;
  let resultadoMcautoHoraUno = (valorVentashoraUno / valorTicketMedio) * valorEnGcsMcAuto / 100;
  resultadoMcautoUno.innerHTML = parseInt(resultadoMcautoHoraUno);

  // Calculamos GCs McAuto para la hora Dos.
  let resultadoMcautoHoraDos = (valorVentashoraDos / valorTicketMedio) * valorEnGcsMcAuto / 100;
  resultadoMcautoDos.innerHTML = parseInt(resultadoMcautoHoraDos);

  // Calculamos GCs McAuto para la hora Tres.
  let resultadoMcautoHoraTres = (valorVentashoraTres / valorTicketMedio) * valorEnGcsMcAuto / 100;
  resultadoMcautoTres.innerHTML = parseInt(resultadoMcautoHoraTres);

  // Calculamos Sumatorio De Sandwiches horas uno, dos y tres.
  let valorSandwichesHoraUno = sandwichesHoraUno.value;
  let valorSandwichesHoraUnoUno = sandwichesHoraUnoUno.value;
  let resultadoSumatorioSandwichesHoraUno = parseInt(valorSandwichesHoraUno) + parseInt(valorSandwichesHoraUnoUno); 
  resultadoSandwichesUno.innerHTML = resultadoSumatorioSandwichesHoraUno;

  let valorSandwichesHoraDos = sandwichesHoraDos.value;
  let valorSandwichesHoraDosDos = sandwichesHoraDosDos.value;
  let resultadoSumatorioSandwichesHoraDos= parseInt(valorSandwichesHoraDos) + parseInt(valorSandwichesHoraDosDos); 
  resultadoSandwichesDos.innerHTML = resultadoSumatorioSandwichesHoraDos;

  let valorSandwichesHoraTres = sandwichesHoraTres.value;
  let valorSandwichesHoraTresTres = sandwichesHoraTresTres.value;
  let resultadoSumatorioSandwichesHoraTres= parseInt(valorSandwichesHoraTres) + parseInt(valorSandwichesHoraTresTres); 
  resultadoSandwichesTres.innerHTML = resultadoSumatorioSandwichesHoraTres;

  // Calculamos Sumatorio De Sandwiches horas uno, dos y tres.
  let valorBebidasHoraUno = bebidasHoraUno.value;
  let valorBebidasHoraUnoUno = bebidasHoraUnoUno.value;
  let resultadoSumatorioBebidasHoraUno = parseInt(valorBebidasHoraUno) + parseInt(valorBebidasHoraUnoUno);
  resultadoBebidasUno.innerHTML = resultadoSumatorioBebidasHoraUno;

  let valorBebidasHoraDos = bebidasHoraDos.value;
  let valorBebidasHoraDosDos = bebidasHoraDosDos.value;
  let resultadoSumatorioBebidasHoraDos = parseInt(valorBebidasHoraDos) + parseInt(valorBebidasHoraDosDos);
  resultadoBebidasDos.innerHTML = resultadoSumatorioBebidasHoraDos;

  let valorBebidasHoraTres = bebidasHoraTres.value;
  let valorBebidasHoraTresTres = bebidasHoraTresTres.value;
  let resultadoSumatorioBebidasHoraTres = parseInt(valorBebidasHoraTres) + parseInt(valorBebidasHoraTresTres);
  resultadoBebidasTres.innerHTML = resultadoSumatorioBebidasHoraTres;
}

