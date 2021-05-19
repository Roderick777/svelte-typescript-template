<script lang="ts">
  export let banners: Array<any> | null = null
</script>

<div class="carrusel">
  
    {#each banners as banner}
    <div class="carrusel-item" style={'background-image: url('+ banner.imagen +')'}></div>
    {/each}
</div>

<style>
  .carrusel{
    width: 100%;
  }
  .carrusel-item{
    width: 100%;
    height: 400px;
    background-size: cover;
    background-position: center;
  }
</style>