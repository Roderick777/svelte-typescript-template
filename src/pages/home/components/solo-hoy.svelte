<script>
import OfertaHoy from "./oferta-hoy.svelte";

</script>
<!-- <div>
  <div class="content-contador" href="">
    <div class="content-logo content-logo-navidad">
      <img class="lazy" alt="ABCDIN" src="http://abcdin.cl/wcsstore/ABCDIN/images/2021/huincha/logo_sxh.svg" style="display: inline; height: 40px;">
    </div>
    <p>Las ofertas se acaban en</p>
    <div style="align-self: flex-end; display: flex; align-items: flex-end;">
      <h2 class="your-class" id="seg">02</h2>
      <h2 class="dos-puntos">:</h2>
      <h2 class="your-class" id="min">34</h2>
      <h2 class="dos-puntos">:</h2>
      <h2 class="your-class" id="horas">11</h2>
    </div>
  </div>
</div> -->

<div>
  <div class="container my-3">
    <div class="row px-2">
      <div class="col-12 solo-hoy pl-0">
        <div class="container pl-0">
          <div class="row pl-0">
            <div class="col d-flex align-items-center">
              <div class="content-logo content-logo-navidad solo-hoy-logo">
                <img class="lazy" alt="ABCDIN" src="http://abcdin.cl/wcsstore/ABCDIN/images/2021/huincha/logo_sxh.svg" style="display: inline; height: 40px;">
              </div>
              <p class="pl-2">Las ofertas se acaban en</p>
            </div>
            <div class="col" style="display: flex; justify-content: flex-end;">
              <div class="d-flex jutify-content-end">
                <h2 class="your-class" id="seg">02</h2>
                <h2 class="dos-puntos">:</h2>
                <h2 class="your-class" id="min">34</h2>
                <h2 class="dos-puntos">:</h2>
                <h2 class="your-class" id="horas">11</h2>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <OfertaHoy />
              </div>
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <OfertaHoy />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .solo-hoy-logo{
    background-color: #ccc;
    height: 100%;
    border-top-left-radius: var(--border-radius);
    display: flex;
    align-items: center;
  }
  .solo-hoy{
    background-color: #ddd;
    border-radius: var(--border-radius);
  }
</style>