/**
Seu desafio é fazer um programa que leia o valor total a ser pago e o valor 
efetivamente pago, informando o menor número de cédulas e moedas que devem
ser fornecidas como troco.

Deve-se considerar que há:
cédulas de R$100,00, R$50,00, R$10,00, R$5,00 e R$1,00;
moedas de R$0,50, R$0,10 e R$0,05.
 Caso o troco seja menor que R$0,05 o valor deve ser arredondado para cima.

 Exemplos:
  Valor do produto: R$ 4,95
  Valor pago: R$5,00
  Resultado esperado: 1 moeda de R$0,05
  Valor do produto: R$ 52,99
  Valor pago: R$55,00
  Resultado esperado: 2 cédulas de R$1,00
*/

export class Calculator {
    sum = (a: number, b: number) => {
        return a + b;
    };
}
