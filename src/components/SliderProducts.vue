<!-- <template>
    <swiper
        :slides-per-view="3"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="cards"
    >
        <swiper-slide class="card-item" v-for="product of products" :key="product.id">
            <router-link :to="'/order/' + product.id">
                <div class="image">
                    <img :src=" require('../assets/img/' + product.image) " alt="">
                </div>
                <div class="name">{{ product.title }}</div>
            </router-link>            
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper.min.css'

    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
            };
            const onSlideChange = () => {
            };
            return {
                onSwiper,
                onSlideChange,
            };
        },
    };
</script> -->