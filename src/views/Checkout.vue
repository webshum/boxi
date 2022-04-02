<template>
	<div class="box checkout start-preloader">
		<div class="inner">
			<h1>Последний шаг!</h1>
			<p>Оставьте ваши контакты и наш менеджер свяжется с вами для уточнения деталей</p>

			<form action="/success" @submit.prevent="submitHandler">
				<label>
					<div class="label-text">ВВЕДИТЕ ИМЯ</div>
					<div class="field">
						<svg viewBox="0 0 24 24" class="mdi-icon mdi-36px"><path d="M12,4C14.21,4 16,5.79 16,8C16,10.21 14.21,12 12,12C9.79,12 8,10.21 8,8C8,5.79 9.79,4 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" stroke-width="0" fill-rule="nonzero"></path></svg>
						<input v-model="name" type="text" placeholder="Имя" required> 
					</div>

					<div class="label-text">ВВЕДИТЕ ТЕЛЕФОН</div>
					<div class="field">						
						<svg viewBox="0 0 24 24" class="mdi-icon is-large"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5C20.55,15.5 21,15.95 21,16.5V20C21,20.55 20.55,21 20,21C10.61,21 3,13.39 3,4C3,3.45 3.45,3 4,3H7.5C8.05,3 8.5,3.45 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" stroke-width="0" fill-rule="nonzero"></path></svg>
						<input v-model="tel" @focus="focus" type="tel" v-mask="'+38 (###) ###-##-##'" placeholder="+38 (111) 111-11-11" required>
					</div>
				</label>

				<button type="submit" class="btn"><span>Оставить заявку</span></button>
			</form>
		</div>		
	</div>
</template>

<script>
	export default {
		data: () => ({
			name: '',
			tel: '',
			category: '',
			title: '',
			method: ''
		}),
		methods: {
			focus(e) {
				let holder = '+38 (___) ___-__-__';

				e.target.value = holder;

				setTimeout(() => {
			    	e.target.selectionStart = e.target.selectionEnd = 5;
			    }, 100);
			},
			submitHandler() {//*Тел*: ${this.tel}
				const _this = this;
				const title = this.title.split('-');
				const tel = this.tel.split('-');
				let newTel = tel[0] + tel[1] + tel[2]; 
				newTel = newTel.split('(');
				newTel = newTel[0] + newTel[1];
				newTel = newTel.split(')');
				newTel = newTel[0] + newTel[1];
				newTel = newTel.split('+');
				newTel = newTel[1];
				newTel = newTel.split(' ');
				newTel = newTel[0] + newTel[1] + newTel[2];

				const message = `
				*Заявка на квиз "Мягкие плюшевые мишки от производителя*

				*Имя*: ${this.name}
				*Тел*: ${newTel}				

				*Цвет плюшевого мишки*:
				${this.category}

				*Размер мишки*: ${title[0]}
				*Цена мишки*: ${title[1]}

				*Способ доставки*:
				${this.method}
				`;

				fbq('track', 'Lead', {
					content_name: this.title,
					content_category: this.category
				});

				// https://api.telegram.org/bot5200200063:AAFUVpFR-VSwLS0t_UZVa3JRJ93WeNvi9mw/getUpdates
				const token = '5200200063:AAFUVpFR-VSwLS0t_UZVa3JRJ93WeNvi9mw';
				const chat_id = '339546189';
				//const chat_id = '483570610';
				let url = 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=MarkdownV2&text=' + encodeURIComponent(message);				

				let xhttp = new XMLHttpRequest();
				xhttp.open("GET", url, true);
				xhttp.send();

				xhttp.onload = function() {
					if (xhttp.status == 200) {
					    window.location.href = '/success';
					} else {
						console.log('Error');
					}
				};
			}
		},
		mounted() {
			this.category = this.$route.params.category;
			this.title = this.$route.params.title;
			this.method = this.$route.params.method;
		}
	}
</script>

<style lang="scss">
	.checkout .inner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
		max-width: 800px;

		h1 {margin-bottom: 15px;}
	} 

	form {
		padding: 29px 35px;
	    max-width: 400px;
	    width: 100%;
	    box-shadow: 0 9px 40px 0 rgba(0, 0, 0, 0.1);
	    border: solid 1.2px rgba(0, 0, 0, 0.1);
	    background: #fff;
	    margin-top: 30px;

		label {
			margin-bottom: 12px;
			margin-top: 12px;
		}

		.label-text {
			font-size: 10px;
			font-weight: 700;
			color: #646464;
			letter-spacing: 1.2px;
			margin-bottom: 10px;
			margin-top: 15px;
			&:first-child {margin-top: 0;}
		}

		button {
			width: 100%;
			border: none;
			cursor: pointer;
			margin-top: 15px;
			margin-bottom: 15px;
			box-shadow: 0 3px 10px 0 rgba(248, 58, 75, 0.5);
		}
	}

	.field {
		position: relative;
		svg {
			max-width: 23px;
		    fill: #a5a3a3;
		    position: absolute;
		    top: 50%;
		    left: 13px;
		    transform: translateY(-50%);
		}
		input {
			border: solid 1.2px #dadadb;
			border-radius: 4px;
			font-weight: 500;
			padding: 0 33px 0 45px;
			min-height: 50px;
			width: 100%;
			color: #939393;

			&::placeholder {color: #939393;}
		}
	}
</style>