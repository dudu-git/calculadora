const nao_limpar_tela = false
const limpar_tela = true
export default class CalculadoraModel{
    #valor: string
    #acumulador: number
    #limparTela: boolean
    #operacao: string

    constructor(valor: string = null, acumulador: number = null, operacao: string = null, limparTela: boolean= false){
         this.#valor = valor
         this.#acumulador = acumulador
         this.#limparTela = limparTela
         this.#operacao = operacao
    }

    get valor(){ return this.#valor?.replace('.',',') || '0' }
    // get acumulador(){ return this.#acumulador }
    // get limparTela(){ return this.#limparTela }
    // get operacao(){ return this.#operacao }


    numeroDigitado(novoValor: string){
      return new CalculadoraModel(
        this.#limparTela || !this.#valor ? novoValor : this.#valor + novoValor,
        this.#acumulador,
        this.#operacao,
        nao_limpar_tela
      )
    }
    virgulaDigitada(){
      return new CalculadoraModel(
        this.#valor?.includes('.') ? this.#valor : this.#valor + '.',
        this.#acumulador,
        this.#operacao,
        nao_limpar_tela
      )
    }

    botaoAC(){
      return new CalculadoraModel()
    }

    operacaoDigitada(proximaOperacao: string){
       return this.calcular(proximaOperacao)
    }

    calcular(proximaOperacao: string = null){
      const acumulador = !this.#operacao 
          ? parseFloat(this.#valor)
          : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)

      const valor = !this.#operacao ? this.#valor : `${acumulador}`
      
      return new CalculadoraModel(
        valor,
        acumulador,
        proximaOperacao,
        proximaOperacao ? limpar_tela : nao_limpar_tela 

      )
    }
}
