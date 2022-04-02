<template>
	<div class="box start-preloader">
		<div class="inner fade-top">
			<div class="head"><span>Плюшевые мишки от производителя</span></div>

			<div class="body">
				<h1>Выберите цвет плюшевого мишки</h1>

				<div class="swiper">
					<div class="swiper-wrapper">
						<div class="swiper-slide card-item" v-for="category of categories" :key="category.id">
							<a @click.prevent="next" :href="/products/ + category.id">
				                <div class="image">
				                    <img :src=" require('../assets/img/' + category.image) " alt="">
				                </div>
				                <div class="name">{{ category.title }}</div>
				            </a> 
						</div>
					</div>

					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>
				</div>
			</div>	

			<div class="foot">
				<a href="#" @click.prevent="$router.back()" class="back">
					<svg viewBox="0 0 24 24" class="mdi-icon mdi-24px"><title>mdi-arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" stroke-width="0" fill-rule="nonzero"></path></svg>
				</a>
			</div>		
		</div>		
	</div>
</template>

<script>
	import Swiper, { Navigation, Pagination } from 'swiper';
	import 'swiper/swiper.min.css';
	import 'swiper/swiper-bundle.min.css';

  	export default {
  		mounted() {
  			Swiper.use([Navigation]);

  			const swiper = new Swiper('.swiper', {
  				loop: true,
  				slidesPerView: 4,
  				spaceBetween: 15,
	  			navigation: {
	  			    nextEl: '.swiper-button-next',
	  			    prevEl: '.swiper-button-prev',
	  			},
	  			breakpoints: {
	  				320: {
				      	slidesPerView: 2,
				    },
				    650: {
				      	slidesPerView: 3,
				    },
				    768: {
				      	slidesPerView: 4,
				    }
				}
  			});
  		},
  		methods: {
            next(e) {
                let href = e.target.closest('a').getAttribute('href');
                document.body.classList.add('preloader');

                setTimeout(() => {
                    this.$router.push(href);
                }, 500);
            }
        },
  		data: () => ({
  			categories: [
  				{
  					"id": 1,
		            "title": "Бежевый",
		            "image": "cat-1.webp"
  				},
  				{
  					"id": 2,
		            "title": "Пшеничный",
		            "image": "cat-2.webp"
  				},
  				{
  					"id": 3,
		            "title": "Медовый",
		            "image": "cat-3.webp"
  				},
  				{
  					"id": 4,
		            "title": "Розовый",
		            "image": "cat-4.webp"
  				},
  				{
  					"id": 5,
		            "title": "Серый",
		            "image": "cat-5.webp"
  				},
  				{
  					"id": 6,
		            "title": "Белый",
		            "image": "cat-6.webp"
  				},
  				{
  					"id": 7,
		            "title": "Голубой",
		            "image": "cat-7.webp"
  				},
  				{
  					"id": 8,
		            "title": "Абрикосовый",
		            "image": "cat-8.webp"
  				},
  				{
  					"id": 9,
		            "title": "Коричневый",
		            "image": "cat-9.webp"
  				}
  			]
  		})
  	}
</script>

<style>
	.swiper {margin-top: 10px;}
</style>