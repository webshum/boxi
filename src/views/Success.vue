<template>
	<div class="success box">
		<h1 class="title">Спасибо! 👏 Ждите звонка от менеджера</h1>
	</div>
</template>

<script>
	export default {
		mounted() {
			setTimeout(() => {
				this.$router.push('/'); 
			}, 3000);	
		}
	}
</script>