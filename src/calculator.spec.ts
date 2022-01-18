import { Calculator } from "./calculator";

interface UnidadeMonetaria {
    chave: number;
    quantidade: number;
}

const _1_REAL = 100;

class CalcularTroco {
    cedulasDisponiveis = [10000,  5000, 1000, 500 , _1_REAL];
    
    execute({valorDaConta, valorPago}: {valorDaConta: number, valorPago: number}): UnidadeMonetaria[] {
        const valorTroco = (valorPago - valorDaConta) * 100;
        
        let troco:UnidadeMonetaria[] = [];

        if (valorTroco > 0) {
            this.cedulasDisponiveis.forEach((cedula) => {
                if((valorTroco / cedula ) >= 1){
                    const quantidade = Math.round(valorTroco/ cedula);
                    troco.push({chave: cedula, quantidade});
                }
               
            })
            
        }

        return troco;
    }
    
}

// [] -> troco 0
// [{ chave: 10000, quantidade: 1 }]

const mockTroco = {
    "cedulas": {
        "100":0,
        "50":0,
        "20":0,
        "10":0,
        "5":0,
        "1":1
    },
    "moedas": {
        "50":0,
        "10":0,
        "5":0

    }
}

describe('Calculator', function () {

    // it('Deve retornar o troco', () => {
    //     retorno = {
    //         cedula:
    //     }
    //     const valorDaConta = 49.50;
    //     const valorPago = 50.00;
    //     const sut = new CalcularTroco();
    //     const troco = sut.execute({valorDaConta, valorPago});
    //     expect()
    // });

    it('Deve retornar array vazio quando o pagamento tiver o valor exato da compra', () => {
        const valorDaConta = 10;
        const valorPago = 10;

        const sut = new CalcularTroco();
        const troco = sut.execute({ valorDaConta, valorPago });

        expect(troco).toEqual([]);
    });

    it('Deve retornar 1 cedula de 1 real', () => {
        const valorDaConta = 9;
        const valorPago = 10;

        const sut = new CalcularTroco();
        const troco = sut.execute({ valorDaConta, valorPago });

        const trocoEsperado = [
            {chave: 100, quantidade: 1}
        ];

        expect(troco).toEqual(trocoEsperado);
    });

    it('Deve retornar 4 cédulas de 1 ', () => {
        const valorDaConta = 1;
        const valorPago = 5;

        const sut = new CalcularTroco();
        const troco =sut.execute({valorDaConta, valorPago});

        const trocoEsperado = [
            {chave:100, quantidade: 4}
        ];

        expect(troco).toEqual(trocoEsperado);        
    });

    it('Deve retornar ', () => {
        const valorDaConta= 5;
        const valorPago = 10;

        const sut = new CalcularTroco();
        const troco =sut.execute({valorDaConta, valorPago});

        const trocoEsperado = [
            {chave:500, quantidade: 1}
        ];

        expect(troco).toEqual(trocoEsperado);   

    })

   

});


/**
 * 1 - Diegão
 * 2 - Sabrina
 * 3 - Bruno
 * 4 - Johannes
 * 5 - Pedrão
 */

