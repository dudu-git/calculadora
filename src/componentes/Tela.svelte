<script lang="ts">
  export let valor: string

  $: tamanhoFonte = valor.length >= 20 ? 'pequena': `s-${valor.length}`

</script>
<div class={`tela ${tamanhoFonte}`}>
    <span>
        {valor}
    </span>
</div>

<style>
   .tela{
     display: flex;
     flex: 1;
     justify-content: flex-end;
     align-items: center;
     background-color: aliceblue;
     font-size: 1.7rem;
     padding: 0px 5px;
     overflow: hidden;
     margin: 2px 1px;
     border-top-right-radius: 5px;
     border-top-left-radius: 5px;
   }
   /* .s-10{font-size: 1.5rem;}
   .s-11{font-size: 1.4rem;}
   .s-12{font-size: 1.3rem;}
   .s-13{font-size: 1.2rem;}
   .s-14{font-size: 1.1rem;}
   .s-15{font-size: 1.05rem;} */
   /* .s-16{font-size: 1.0rem;} */
   .s-17{font-size: 1.6rem;}
   .s-18{font-size: 1.5rem;}
   .s-19{font-size: 1.4rem;}
   .pequena{font-size: 1.3rem;}

</style>