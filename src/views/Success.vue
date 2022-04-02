<template>
	<div class="success box">
		<h1 class="title">Спасибо! 👏 Ждите звонка от менеджера</h1>
	</div>
</template>

<script>
	export default {
		mounted() {
			// fbq('track', 'PageView');
			
			setTimeout(() => {
				this.$router.push('/'); 
			}, 3000);	
		}
	}
</script>

<!-- 
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1002587753669357');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1002587753669357&ev=PageView&noscript=1"
/></noscript>
 -->