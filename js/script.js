const canvas = new Canvas('my-canvas');
const cxt = new Context(canvas.cnv);
const cxt2 = new Context(canvas.cnv);
const fondo = new Fondo();
const suelo = new Suelo();
const tuberia = new Tuberias();
const pajaro = new Pajaro();
const gameover = new Gameover();
const puntuacion = new Puntuacion();
const velocidadVuelo = 2;
const timeOut = 1000/60;
let intervalo = null;
let sumaFrames = 0;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    this.blur();
  };

  canvas.cnv.addEventListener('click', function (e){
      e.preventDefault();
      pajaro.saltar();
  }, false);

    document.addEventListener('keypress', function (e){
        e.preventDefault();
        //pajaro.rotar(cxt.c);
        pajaro.saltar();
    },false);

    function colision (){
        /*console.log(pajaro.posX);
        console.log(tuberia.tubertiasEnX[0]);
        console.log(pajaro.posX+46>=tuberia.tubertiasEnX[0] );*/
        /*console.log(pajaro.posY);
        console.log(tuberia.tubertiasTenY[0]);
        console.log(pajaro.posY<=tuberia.tubertiasTenY[0]+793*/
        //console.log(pajaro.posY<=tuberia.tubertiasTenY[0]+793&& pajaro.posX+46>=tuberia.tubertiasEnX[0]);
        //console.log(pajaro.posX);
        /*console.log(pajaro.posX);
        console.log(tuberia.tubertiasEnX[0]);
        console.log(pajaro.posX+46>=tuberia.tubertiasEnX[0]);*/

        /*console.log(pajaro.posY);
        console.log(tuberia.tubertiasBenY[0]);
        console.log(pajaro.posY+32>=tuberia.tubertiasBenY[0]);*/
       // console.log((pajaro.posY<=tuberia.tubertiasTenY[i]+793 && pajaro.posX+46>=tuberia.tubertiasEnX[i]) || (pajaro.posX+46>=tuberia.tubertiasEnX[0] && pajaro.posY+32>=tuberia.tubertiasBenY[0]));
        //console.log(tuberia.contadorTuberias());
            if((pajaro.posY+5<=tuberia.tubertiasTenY[tuberia.contadorTuberias()]+793 && pajaro.posX+40>=tuberia.tubertiasEnX[tuberia.contadorTuberias()]) ||
                (pajaro.posX+40>=tuberia.tubertiasEnX[tuberia.contadorTuberias()] && pajaro.posY+28>=tuberia.tubertiasBenY[tuberia.contadorTuberias()]) ||
                (pajaro.posY+25>=suelo.hSuelo)){

                clearInterval(intervalo);
                gameover.dibujargameover(cxt.c);


            }
            //console.log((pajaro.posY<=tuberia.tubertiasTenY[i]+793 && pajaro.posX+46>=tuberia.tubertiasEnX[i]) || (pajaro.posX+46>=tuberia.tubertiasEnX[0] && pajaro.posY+32>=tuberia.tubertiasBenY[0]));


    }


  function startGame() {

     intervalo = setInterval(()=> {

      //requestAnimationFrame(animarFlappy);
      cxt.c.clearRect(0,0, canvas.cnv.width, canvas.cnv.height);
      fondo.dibujarFondo(cxt.c, canvas.cnv.width, velocidadVuelo);
      tuberia.dibujarTuberias(cxt.c, velocidadVuelo);
      suelo.dibujarSuelo(cxt.c, velocidadVuelo);
      pajaro.dibujarPajaro(cxt.c, velocidadVuelo, sumaFrames%10==0);
      puntuacion.dibujarContador(cxt2.c);
      puntuacion.sumarPuntos(tuberia.pasado);
      sumaFrames+=1;
      colision();
    },timeOut);




    //dibujando un rect??ngulo
    /*cxt.fillStyle = 'blue'; //dando estilo al rect??ngulo
    cxt.fillRect(100, 100, 100, 100);

    //dibujando una l??nea
    cxt.beginPath(); //necesario para empezar el dibujado de la l??nea
    cxt.moveTo(50,300); //punto al que se dirige el inicio.
    cxt.lineTo(300,100);
    cxt.lineTo(400,600);
    cxt.strokeStyle='red'; // dando estilo  a la l??nea.
    cxt.stroke(); //hace falta llamar a este m??todo para que la l??nea se dibuje.

    //dibujando un c??rculo.
    cxt.beginPath();
    cxt.arc(300, 300, 30, 0, Math.PI * 2, false); //tenemos dibujado el c??culo, pero no se ve porque est?? vacio. Tenemos que rellenarlo con una propiedad stoke o fill
    cxt.strokeStyle = 'pink';
    cxt.stroke();

    //dibujando muchos c??rculos con un for
    for(let i = 0; i<3;i++){
      cxt.beginPath();
      cxt.arc(Math.floor(Math.random()*900), Math.floor(Math.random()*504), 30, 0, Math.PI * 2, false); //tenemos dibujado el c??culo, pero no se ve porque est?? vacio. Tenemos que rellenarlo con una propiedad stoke o fill
      cxt.strokeStyle = 'pink';
      cxt.stroke();
    }

    //mover la im??genes que hemos creado
    let posicionXCirculo = 100;
    let posicionYCirculo = 300;
    let velocidadX = 4;
    let velocidadY = 2;
    let radioDelC??rculo = 30;
    let animar = () =>{ //tenemos que crear una funci??n que se llame a s?? misma de forma recursiva.
      requestAnimationFrame(animar);
      cxt.clearRect(0,0,900,504); //borramos todo para volver a dibujarlo despu??s
      console.log('funciono!');
      cxt.beginPath();
      cxt.arc(posicionXCirculo, posicionYCirculo, radioDelC??rculo, 0, Math.PI * 2, false); //tenemos dibujado el c??culo, pero no se ve porque est?? vacio. Tenemos que rellenarlo con una propiedad stoke o fill
      cxt.strokeStyle = 'blue';
      cxt.stroke();
      posicionXCirculo += velocidadX;
      posicionYCirculo += velocidadY;
      if(posicionXCirculo + radioDelC??rculo >= 900 || posicionXCirculo - radioDelC??rculo <= 0){
        velocidadX *= -1;
      }

      if(posicionYCirculo + radioDelC??rculo >=504 || posicionYCirculo - radioDelC??rculo <=0){
        velocidadY *= -1;
      }


    }



    animar(); //hay que llamar a la funci??n para que funcione... l??gicamente.*/


  }

};
