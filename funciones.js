var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  /*alert("Le dieron click a la celda"+celda);*/

  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      var tablero = document.getElementById("tabla");
      alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
        }
      }

      

      reinasPorColocar--;
      reinasColocadas++;
    }
  } else {
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      /* Bloqueamos renglon */
      var tablero = document.getElementById("tabla");
      alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
        tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
      }
    reinasPorColocar++;
    reinasColocadas--;
  }
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;

}