class Animal {
    constructor(pernas) {
        this.pernas = pernas;
    }

    anda() {
        console.log(`Anda sobre ${this.pernas} pernas`);
    }
}

class Passaro extends Animal {
    constructor(pernas) {
        super(pernas); 
    }

    voa() {
        console.log('Voa');
    }
}

const pombo = new Passaro(2);
pombo.anda(); 
pombo.voa(); 
