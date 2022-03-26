<!-- <template>
    <swiper
        :slides-per-view="4"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="cards"
    >
        <swiper-slide class="card-item" v-for="category of categories" :key="category.id">
            <router-link :to="'/products/' + category.id">
                <div class="image">
                    <img :src=" require('../assets/img/' + category.image) " alt="">
                </div>
                <div class="name">{{ category.title }}</div>
            </router-link>            
        </swiper-slide>
    </swiper>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/swiper.min.css'

    export default {
        props: {
            categories: {
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