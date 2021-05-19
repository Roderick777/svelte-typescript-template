<script lang="ts">
  let urlPago: string = 'https://www.abcserviciosfinancieros.cl/paga-tu-cuenta'
  let imgPago: string = 'https://marketing.abcdin.cl/iconos/site/logo-tarjeta-yo-tengo.png'
  
  function goToPago(): void {
    window.location.href = urlPago
  }

</script>

<div class="pagar-home py-2" on:click={() => goToPago() } >
  <div class="px-2">Prefiere pagar <b>online tu tarjeta</b></div>
  <div class="px-2 btn-abcdin"><span>¡Pagar aquí!</span></div>
  <img class="px-2" alt="" style="height: 20px;" src={imgPago}>
</div>

<style>
.pagar-home{
  background-color: var(--secondary);
  color: #FFF;
  display: flex;
  justify-content: center;
  font-size: .9rem;
  cursor: pointer;
}
.btn-abcdin{
  display: inline-block;
  /* padding: 1px 8px; */
  background: var(--primary) !important;
  border: none!important;
  color: #fff!important;
  /* margin: 0 0 -5px 10px; */
  border-radius: 6px!important;
  transition: all .5s ease-in-out;
  position: relative;
  z-index: 1;
  overflow: hidden;
  padding-top: 2px;
  padding-bottom: 2px;
}

.btn-abcdin span {
  transition: all .5s ease-in-out;
  font-size: .9rem;
}

.btn-abcdin:hover span{
  color: var(--primary);
  z-index: 3;
}
.btn-abcdin:before{
  content: '';
  width: 0%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
  transition: all .5s ease-in-out;
}
.btn-abcdin:hover::before{
  width: 100%;
}
</style>