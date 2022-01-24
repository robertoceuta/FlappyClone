class Canvas {
    constructor(idCanvas) {
        this.cnv = document.getElementById(idCanvas);
        this.cnv.width = 900;
        this.cnv.height = 504;
    }
}

class Context {
    constructor(canvas) {
        this.c = canvas.getContext('2d');
    }
}

class Fondo{
    constructor() {
        this.img = new Image();
        this.img.src = "../images/bg.png";
        this.w = 0;
    }

    dibujarFondo(cxt, wCanvas, velocidadVuelo){
        cxt.drawImage(this.img, this.w, 0);
        cxt.drawImage(this.img, this.w + wCanvas, 0);
        if(this.w <= -wCanvas){
            this.w = 0;
        }
        this.w -= velocidadVuelo;
        //console.log(velocidadVuelo);
    }

}

class Suelo {
    constructor() {
        this.img = new Image();
        this.img.src = "../images/game-bg-footer.png"
        this.w = 0;
        this.hSuelo = 475;
        this.img.width = 466;
    }

    dibujarSuelo(cxt, velocidadVuelo){
        cxt.drawImage(this.img, this.w, this.hSuelo);
        cxt.drawImage(this.img, this.w + this.img.width, this.hSuelo);
        cxt.drawImage(this.img, this.w + (this.img.width * 2), this.hSuelo);
        cxt.drawImage(this.img, this.w + (this.img.width * 3), this.hSuelo);

        if(this.w <= -this.img.width){
            this.w = 0;
        }

        this.w -= velocidadVuelo;
        //console.log(this.img);
    }
}

class Tuberias {
    constructor() {
        this.tuberiasT = new Array();
        this.tuberiasB = new Array();
        this.tubertiasEnX = new Array();
        //this.tubertiasEnY = new Array();
        this.tubertiasTenY = new Array();
        this.tubertiasBenY = new Array();
        this.numTuberias = 5;
        this.contadorNumTuberias = 0;
        for(let i = 0; i<this.numTuberias;i++){
            this.tuberiasT.push(new Image());
            this.tuberiasB.push(new Image());
            this.tubertiasEnX.push(500 + (350 * (i+1)));
            let aux = Math.floor(Math.random()*((-525) - (-775)))+(-775);
            this.tubertiasTenY.push(aux);
            this.tubertiasBenY.push((793+aux)+135);
            this.tuberiasT[i].src = "../images/obstacle_top.png";
            this.tuberiasB[i].src = "../images/obstacle_bottom.png";
        }
        this.contador = 0;
    }

    dibujarTuberias(cxt, velocidadVuelo){
                for(let i = 0; i<this.numTuberias; i++){
                    cxt.drawImage(this.tuberiasT[i], this.tubertiasEnX[i],  this.tubertiasTenY[i]);
                    cxt.drawImage(this.tuberiasB[i], this.tubertiasEnX[i], this.tubertiasBenY[i]);
                    this.tubertiasEnX[i] -= velocidadVuelo;
                    if(this.tubertiasEnX[i]==250-138){
                        this.contadorNumTuberias++;
                        if(this.contadorNumTuberias>=this.numTuberias){
                            this.contadorNumTuberias=0;
                        }
                    }
                }

        if(this.tubertiasEnX[this.contador]<=-200){
            let aux = Math.floor(Math.random()*((-525) - (-775)))+(-775);
            if(this.contador == 0){
                this.tubertiasEnX[this.contador] =  this.tubertiasEnX[this.tubertiasEnX.length-1]+350;
                this.tubertiasTenY[this.contador] = aux;
                this.tubertiasBenY[this.contador] = (793+aux)+135;
            }else{
                this.tubertiasEnX[this.contador] =  this.tubertiasEnX[this.contador-1]+350;
                this.tubertiasTenY[this.contador] = aux;
                this.tubertiasBenY[this.contador] = (793+aux)+135;
            }
            this.contador += 1;
            if(this.contador>this.numTuberias-1){
                this.contador=0;
            }

        }


        console.log(this.contador);
        console.log(this.tuberiasT.length);
        console.log(this.tubertiasBenY);
        console.log(this.tubertiasTenY);
        //console.log(this.tubertiasEnX[0]);
        //console.log(this.tubertiasEnX[this.tubertiasEnX.length-1]);
    }
    contadorTuberias (){

        return this.contadorNumTuberias;
    }
}

class Pajaro {
    constructor() {
        this.posX = 250;
        this.posY = 250;
        this.img = new Image();
        this.img.src = "../images/bird.png";
        this.alas =[0,46,92];
        this.contador = 0;
        this.gravedad = 0.25;
        this.gravedadVelocidad = 0;
    }

    dibujarPajaro(cxt, velocidadVuelo, aleteo){
        if(aleteo){
            this.contador++
            if(this.contador==3){
                this.contador = 0;
            }
        }

        cxt.drawImage(this.img, this.alas[this.contador], 0, 46, 32, this.posX, this.posY, 46, 32);
        this.posY+=this.gravedadVelocidad;
        this.gravedadVelocidad+=this.gravedad;
        //console.log(aleteo);
    }

    saltar(){
        if(this.gravedadVelocidad>=0){
            this.gravedadVelocidad = -2;
            this.gravedadVelocidad -= 3;
        }
        //this.gravedadVelocidad = 0;
        this.posY-=5;
    }

    rotar(cxt){
        cxt.rotate(20 * Math.PI / 180);
    }




}