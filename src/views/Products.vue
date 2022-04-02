<template>
	<div class="box products start-preloader">
		<div class="inner fade-top">
			<div class="head"><span>Плюшевые мишки от производителя</span></div>

			<div class="body">
				<h1>Выберите размер мишки</h1>

				<div class="cards">
					<div class="card-item" v-for="product of products" :key="product.id">
						<a @click.prevent="next" :href="/order/ + product.id + '/' + product.title + '/' + product.category ">
			                <div class="image">
			                    <img :src=" require('../assets/img/' + product.image) " alt="">
			                </div>
			                <div class="name">{{ product.title }}</div>
			            </a>      
					</div>
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
	import SliderProducts from "@/components/SliderProducts";

	export default {
		components: {
			SliderProducts
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
			productList: [
				[
					{
	  					"id": 1,
	  					"category": "Бежевый",
			            "title": "135 см - 599 грн",
			            "image": "product-1.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Бежевый",
			            "title": "84 см - 379 грн",
			            "image": "product-2.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Бежевый",
			            "title": "64 см - 279 грн",
			            "image": "product-3.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Пшеничный",
			            "title": "135 см - 599 грн",
			            "image": "product-4.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Пшеничный",
			            "title": "84 см - 379 грн",
			            "image": "product-5.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Пшеничный",
			            "title": "64 см - 279 грн",
			            "image": "product-6.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Медовый",
			            "title": "135 см - 599 грн",
			            "image": "product-7.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Медовый",
			            "title": "84 см - 399 грн",
			            "image": "product-8.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Медовый",
			            "title": "64 см - 299 грн",
			            "image": "product-9.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Розовый",
			            "title": "135 см - 599 грн",
			            "image": "product-10.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Розовый",
			            "title": "84 см - 379 грн",
			            "image": "product-11.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Розовый",
			            "title": "64 см - 279 грн",
			            "image": "product-12.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Серый",
			            "title": "135 см - 599 грн",
			            "image": "product-13.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Серый",
			            "title": "84 см - 379 грн",
			            "image": "product-14.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Серый",
			            "title": "64 см - 279 грн",
			            "image": "product-15.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Белый",
			            "title": "135 см - 599грн",
			            "image": "product-16.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Белый",
			            "title": "84 см - 379 грн",
			            "image": "product-17.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Белый",
			            "title": "64 см - 279 грн",
			            "image": "product-18.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Голубой",
			            "title": "135 см - 599 грн",
			            "image": "product-19.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Голубой",
			            "title": "84 см - 379 грн",
			            "image": "product-20.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Голубой",
			            "title": "64 см - 279 грн",
			            "image": "product-21.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Абрикосовый",
			            "title": "135 см - 599 грн",
			            "image": "product-22.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Абрикосовый",
			            "title": "84 см - 379 грн",
			            "image": "product-23.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Абрикосовый",
			            "title": "64 см - 279 грн",
			            "image": "product-24.webp"
	  				}
				],
				[
					{
	  					"id": 1,
	  					"category": "Коричневый",
			            "title": "135 см - 599 грн",
			            "image": "product-25.webp"
	  				},
	  				{
	  					"id": 2,
	  					"category": "Коричневый",
			            "title": "84 см - 379 грн",
			            "image": "product-26.webp"
	  				},
	  				{
	  					"id": 3,
	  					"category": "Коричневый",
			            "title": "64 см - 279 грн",
			            "image": "product-27.webp"
	  				}
				]
			],
			products: []
		}),
		mounted() {
			this.products = this.productList[this.$route.params.id - 1];
		}
	}
</script>

<style lang="scss" scoped>
	.cards {
		display: flex;
		margin-right: -15px;

		.card-item {
			width: 33.33%;
			margin-right: 15px;
		}
	}
	
</style>
