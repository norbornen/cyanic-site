<template>
    <div class="">
        <h2>{{ group._id.createdAt | formatDate }}</h2>
        <div>
            <FlatOffer v-for="offer in group.results" :key="offer._id" :offer="offer" />
        </div>
    </div>
</template>

<script>
import FlatOffer from '@/components/FlatOffer.vue'

const formatDateOptions = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
};

export default {
    name: 'FlatOffersDailyGroup',
    components: {
        FlatOffer
    },
    props: {
        group: Object
    },
    filters: {
        formatDate: function(d) {
            if (d) {
                return (d instanceof Date ? d : new Date(d)).toLocaleString('ru', formatDateOptions);
            }
            return '';
        }
    }
}
</script>
