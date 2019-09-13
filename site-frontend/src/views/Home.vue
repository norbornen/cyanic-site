<template>
<div class="mw9 center pa4 ph7-l">
    <header>
        <h1 class="sans-serif f2 f1-m f-headline-l lh-title measure-wide mv0">
            <span class="bg-black-90 lh-copy white pa1">Cyanic</span>
        </h1>
        <h3 class="f4 f2-l f3-m fw3 georgia lh-title i mt2 measure-wide">
            <span class="bg-black-90 white pa1">
                Аренда 2 и 3-комнатных квартир на улицах Лукинская, Шолохова, <span class="nowrap-ns">Скульптора Мухиной</span> и Чоботовская в <span class="nowrap">Ново-Переделкино</span>
            </span>
        </h3>
        <div v-if="offers.length === 0" class="mt4  measure">
            <h3 class="sans-serif fw3 f3 f2-m f1-l  georgia i">
                <span class="bg-black-90 lh-copy white pa1">Сейчас в базе нет объявлений</span>
            </h3>
        </div>
    </header>
    <div>
        <FlatOffersDailyGroup v-for="group in offers" :key="group._id.createdAt" :group="group" />
    </div>
</div>
</template>

<script>
import FlatOffersDailyGroup from '@/components/FlatOffersDailyGroup.vue'
import axios from "axios";

export default {
    name: 'home',
    components: {
        FlatOffersDailyGroup
    },
    data() {
        return {
            offers: []
        };
    },
    created() {
        this.fetchOffersByDate();
    },
    methods: {
        fetchOffersByDate() {
            axios.get(`/api/offer/by_date`).then(({ data }) => (this.offers = data));
        }
    }
};
</script>
