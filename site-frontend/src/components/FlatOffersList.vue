<template>
<div>
    <div v-if="offers === null" class="mt4  measure-wide">
        <h3 class="sans-serif f4 f2-l f3-m fw3  georgia i">
            <span class="bg-black-90 lh-copy white pa1">Объявления загружаются...</span>
        </h3>
    </div>
    <div v-if="offers && offers.length === 0" class="mt4  measure-wide">
        <h3 class="sans-serif f4 f2-l f3-m fw3  georgia i">
            <span class="bg-black-90 lh-copy white pa1">В базе нет подходящих объявлений</span>
        </h3>
    </div>
    <FlatOffersDailyGroup v-for="group in offers" :key="group._id.createdAt" :group="group" />
    <infinite-loading @infinite="infiniteHandler">
        <span slot="no-more"></span>
        <span slot="no-results"></span>
    </infinite-loading>
</div>
</template>

<script>
import axios from "axios";
import InfiniteLoading from 'vue-infinite-loading';
import FlatOffersDailyGroup from '@/components/FlatOffersDailyGroup.vue'

export default {
    name: 'FlatOffersList',
    components: {
        InfiniteLoading,
        FlatOffersDailyGroup
    },
    data() {
        return {
            infiniteId: 0,
            page: 0,
            offers: null
        };
    },
    created() {
    },
    methods: {
        infiniteHandler($state) {
            axios.get('/api/offer/by_date', {params: {page: this.page}})
            .then(({ data }) => {
                if (data && data.length > 0) {
                    this.page++;
                    (this.offers || (this.offers = [])).push(...data);
                    // $state.loaded();
                } else {
                    // $state.complete();
                }
                $state.complete();
            });
        },
        changeFilter() {
            this.page = 0;
            this.offers = null;
            this.infiniteId++;
        }
    }
};
</script>

<style scoped>
    >>> .infinite-loading-container .infinite-status-prompt {
        color: #000000;
    }
    >>> .infinite-loading-container .infinite-status-prompt i {
        border: 1px solid #000000;
    }
    >>> .infinite-loading-container .infinite-status-prompt i::before {
        background-color: #000000;
    }
</style>
