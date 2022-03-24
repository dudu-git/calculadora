<script lang="ts">
import CalculadoraModel from "../model/CalculadoraModel";

import Botao from "./Botao.svelte";
import Linha from "./Linha.svelte";
import Tela from "./tela.svelte";

let calc = new CalculadoraModel()

const numeroDigitado = (num: string) => calc = calc.numeroDigitado(num)
const operacaoDigitada = (op: string) => calc = calc.operacaoDigitada(op)
const calcular = () => calc = calc.calcular()
const virgulaDigitada = () => calc = calc.virgulaDigitada()
const botaoAC = () => calc = calc.botaoAC()


</script>

<div class="calculadora">
  <Tela valor = {calc.valor} />
  <Linha>
    <Botao triplo destaque texto = "AC" onClick= {botaoAC}/>
    <Botao texto = "/" onClick= {operacaoDigitada} />
  </Linha>
  <Linha>
    <Botao texto = "7" onClick= {numeroDigitado}/>
    <Botao texto = "8" onClick= {numeroDigitado}/>
    <Botao texto = "9" onClick= {numeroDigitado}/>
    <Botao operacao texto = "*" onClick= {operacaoDigitada} /> 
  </Linha>  
  <Linha>
    <Botao texto = "4" onClick= {numeroDigitado}/>
    <Botao texto = "5" onClick= {numeroDigitado}/>
    <Botao texto = "6" onClick= {numeroDigitado}/>
    <Botao operacao texto = "-" onClick= {operacaoDigitada} /> 
  </Linha>  
  <Linha>
    <Botao texto = "1" onClick= {numeroDigitado}/>
    <Botao texto = "2" onClick= {numeroDigitado}/>
    <Botao texto = "3" onClick= {numeroDigitado}/>
    <Botao operacao texto = "+" onClick= {operacaoDigitada} /> 
  </Linha>  
  <Linha>
    <Botao duplo texto = "0" onClick= {numeroDigitado}/>
    <Botao texto = "," onClick= {virgulaDigitada}/>
    <Botao destaque texto = "=" onClick= {calcular} /> 
  </Linha>   
</div>

<style>
  .calculadora{
     background-color: var(--cor-fundo);
     height:300px;
     width:250px;
     padding: 5px;
     border-radius: 10px;

     display: flex;
     flex-direction: column;
  }
</style>