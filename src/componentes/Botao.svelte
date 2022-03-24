<script lang="ts">
  export let texto: string 
  export let triplo: boolean = false
  export let duplo: boolean = false
  export let destaque: boolean = false
  export let operacao: boolean = false
  export let onClick: (valor: string)=> void = () =>{}
</script>

<button class="botao" 
       on:click={ () => onClick(texto)}
       class:triplo={triplo} class:duplo={duplo} 
       class:destaque={destaque} class:operacao={operacao} >
       {texto}
</button>

<style>
 .botao{   
      margin: 0;
      border: 1px solid var(--cor-fundo);
      flex-basis: 25%;
      height: 50px;
      background-color: rgb(225, 225, 225);
 }
 .duplo{   
      flex-basis: 50%;
 }
 .triplo{   
      flex-basis: 75%;
 }
 .destaque{   
      background-color: rgb(120, 0, 0);
      color: white;
 }
 .operacao{   
      background-color: rgb(255, 125, 0);
      color: white;
 }
</style>