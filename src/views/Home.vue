<template>
    <div class="home start-preloader">
        <div class="content fade-right">
            <div>
                <h1>Мягкие мишки от производителя</h1>
                <p>Лучшее качество всего от 280 грн</p>

                <a @click.prevent="next" href="/categories" class="btn">
                    <svg viewBox="0 0 24 24" class="mdi-icon"><path d="M20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" stroke-width="0" fill-rule="nonzero"></path></svg>
                    <span>Подобрать Мишку</span>
                </a>
            </div>            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        methods: {
            next(e) {
                let href = e.target.closest('a').href;
                document.body.classList.add('preloader');

                setTimeout(() => {
                    this.$router.push(href);
                }, 500);
            }
        }
    }
</script>

<style lang="scss">
    .home  {
        height: 100vh;
        background: url(../assets/img/bg-home.webp) no-repeat fixed;
        background-size: cover;
        display: flex;
        justify-content: flex-end;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            background: linear-gradient(270deg,#272626,transparent);
        }

        h1 {
            padding-top: 15px;
            font-size: 25px;
            position: relative;
            &:before {
                content: '';
                display: block;
                width: 38px;
                height: 3px;
                position: absolute;
                top: 0;
                left: 0;
                background: #fff;
            }
        }

        p {
            margin-top: 15px;
            margin-bottom: 15px;
        }

        .content {
            width: 40%;
            border-left: 1px solid hsla(0,0%,100%,.16);
            padding: 30px;
            display: flex;
            align-items: center;
            color: #fff;
            position: relative;
            z-index: 2;
        }
    }
</style>
