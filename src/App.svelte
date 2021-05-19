<script lang="ts" >
	import { onMount } from 'svelte'
	import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
	import { Router, Link, Route } from "svelte-routing"
	import About from "./pages/about/about.svelte"
	import Home from "./pages/home/home.svelte"
	import { MenuService } from './services/menu.service';
	import PagarHome from './components/pagar-home/pagar-home.svelte';
	import LinkRapidoHome from './components/linkrapido-home/link-rapido-home.svelte';
	import BusquedaHome from './components/busqueda-home/busqueda-home.svelte';
	import CargandoHome from './components/cargando-home/cargando-home.svelte';
import { BannerService } from './services/banner.service';
	
	export let url: string = ''
	let menus: Array<any> | null = null
	let banners: Array<any> | null = null
	let loading: boolean = true
	let error: string | null = null
	
	onMount(() => init())

	function init(): void {
		Promise.all<Array<any>>([
			MenuService.getMenu(),
			BannerService.getBanners()
		])
			.then((responses: Array<any>) => {
				menus = responses[0]
				banners = responses[1]
				loading = false
			})
			.catch((e: any) => {
				error = 'Ha ocurrido un error'
				loading = false
			})
	}
	

</script>

<svelte:head>
	<!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"> -->
</svelte:head>

<main>
	{#if error != null}
		<div class="error">{error}</div>
	{/if}
	{#if loading }
		<CargandoHome />
	{/if}
	{#if menus != null}

		<PagarHome />
		<LinkRapidoHome />
		<BusquedaHome />
		
		<Router url="{url}">
			<nav class="menu__nav">				
				<ul class="menu__listado">
					{#each menus as menu}
					<li class="menu__enlace">
						<Link to="{menu.nombre}">{menu.nombre}</Link>
					</li>
					{/each}
				</ul>
			</nav>
		</Router>

		<Router url="{url}">
			<div>
				<Route path="about" component="{About}" />
				<Route path="/"><Home banners={banners} /></Route>
			</div>
		</Router>
	{/if}
</main>

<style>
	.menu__nav{
		box-shadow: 0px 0px 7px -3px rgba(0,0,0,.5);
	}
	.menu__listado{
		list-style: none;
		display: flex;
		align-items: center;
		justify-items: center;
		font-size: .65rem;
		font-weight: 600;
		margin-top: 0px;
		margin-bottom: 0px;
	}
	.menu__enlace {
		padding: 5px 10px;
		transition: .3s all ease;
		background: linear-gradient(0deg, var(--primary) 0px, #FFFFFF 0px);
	}
	.menu__enlace:hover{
		background: rgb(2,0,36);
		background: linear-gradient(0deg, var(--primary) 3px, #FFFFFF 3px);
	}
	.menu__enlace a{
		color: #111;
		text-decoration: none !important; 
	}
</style>