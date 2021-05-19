<script lang="ts">
  import Banners from "./components/banners.svelte";
  import EnlaceDestacado from "./components/enlace-destacado.svelte";
  import SoloHoy from "./components/solo-hoy.svelte";

  export let banners: Array<any> | null = null
  let accesosDestacados: Array<any> = [0,1,2,3]
</script>

<div>
  <Banners banners={banners} />
  <div class="container">
    <div class="row pt-3">
      {#each accesosDestacados as acceso}
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3 px-2">
          <EnlaceDestacado></EnlaceDestacado>
        </div>
      {/each}
    </div>
  </div>
  <SoloHoy />
  <div class="py-5"></div>
</div>

<style lang="scss">
  $color: #005577;
  h1 {
    color: $color;
  }
</style>