<template>
	<div class="box order start-preloader">
		<div class="inner fade-top">
			<div>
				<div class="head"><span>Плюшевые мишки от производителя</span></div>

				<div class="body">
					<h1>Выберите способ доставки</h1>
					<ul class="links-list">
						<li>
							<a @click.prevent="next" :href="'/checkout/Новая почта/' + this.$route.params.title + '/' + this.$route.params.category ">
								<span>Новая почта</span>
							</a>
						</li>
						<li>
							<a @click.prevent="next" :href="'/checkout/Курьерская доставка/' + this.$route.params.title + '/' + this.$route.params.category ">
								<span>Курьерская доставка</span>
							</a>
						</li>
						<li>
							<a @click.prevent="next" :href="'/checkout/Justin/' + this.$route.params.title + '/' + this.$route.params.category">
								<span>Justin</span>
							</a>
						</li>
						<li>
							<a @click.prevent="next" :href="'/checkout/Укрпочта/' + this.$route.params.title + '/' + this.$route.params.category ">
								<span>Укрпочта</span>
							</a>
						</li>
					</ul>
				</div>	

				<div class="foot">
					<a href="#" @click.prevent="$router.back()" class="back">
						<svg viewBox="0 0 24 24" class="mdi-icon mdi-24px"><title>mdi-arrow-left</title><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" stroke-width="0" fill-rule="nonzero"></path></svg>
					</a>
				</div>	
			</div>
			
			<aside>
				<div class="manager">
					<div class="avatar">
						<img :src=" require('../assets/img/avatar.webp') " alt="">
					</div>
					<div>
						<h3>Владислав</h3>
						<p>Ваш личный<br>консультант</p>
					</div>					
				</div>

				<div class="message">Просто выберите способ , а менеджер уточнит у вас все детали :)</div>
			</aside>
		</div>		
	</div>
</template>

<script>
	export default {
		methods: {
            next(e) {
                let href = e.target.closest('a').getAttribute('href');
                document.body.classList.add('preloader');
                
                setTimeout(() => {
                    this.$router.push(href);
                }, 500);
            }
        }
	}
</script>

<style lang="scss">
	.order .inner {
		display: flex;
		justify-content: space-between;

		& > div {width: 100%;}
	}

	.links-list {
		display: flex;
		flex-wrap: wrap;
		margin-right: -7.5px;
		margin-left: -7.5px;
		list-style: none;
		margin-top: 10px;

		li {
			width: 50%;
			padding: 0 7.5px;
			margin-bottom: 15px;

			a {
				display: flex;
				align-items: center;
				padding: 12px 16px;
				border: solid 1px #e6e6e6;
				color: #363636;
				transition: all 0.3s;
				border-radius: 3px;

				&:hover {
					box-shadow: 0 1px 3px 0 rgba(0,0,0,.1);
				}

				&:before {
					content: '';
					display: block;
					width: 20px;
					height: 20px;
					border-radius: 50%;
					background: #e6e6e6;
					margin-right: 15px;
				}
			}
		}
	}

	aside {
		padding: 23px 19px;
		width: 260px;
		background: #f1f1f1;

		.manager {
			display: flex;
			align-items: center;

			.avatar {
				width: 70px;
				min-width: 70px;
    			height: 70px;
    			border-radius: 50%;
    			margin-right: 15px;
    			position: relative;

    			&:after {
    				content: '';
				    display: block;
				    width: 10px;
				    height: 10px;
				    border-radius: 50%;
				    background: #1bb157;
				    border: 2px solid #fff;
				    position: absolute;
				    right: 5px;
				    bottom: 0;
    			}
    			img {
    				width: 70px;
	    			height: 70px;
	    			border-radius: 50%;
    			}
			}

			h3 {
				font-size: 16px;
			    font-weight: 500;
			    color: #2e2e54;
			}

			p {
			    font-size: 12px;
			    color: #69748c;
			    font-weight: 300;
			}
		}

		.message {
			color: #2e2e49;
		    font-size: 12px;
		    font-weight: 300;
		    padding: 5px 18px 5px 10px;
		    background: #e6e6e6;
		    margin-top: 15px;
		    position: relative;

		    &:before {
		    	content: '';
			    border-left: 8px solid transparent;
			    border-right: 8px solid transparent;
			    border-bottom: 8px solid #e6e6e6;
			    position: absolute;
			    left: 29px;
			    bottom: 100%;
		    }
		}
	}
</style>