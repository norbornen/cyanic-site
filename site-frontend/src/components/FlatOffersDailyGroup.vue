<template>
    <div>
        <h3 class="f4 f3-ns fw6 i  mt4 mb2 mb3-ns">
            {{ group._id.createdAt | formatDate }}
        </h3>
        <FlatOffer v-for="offer in group.results" :key="offer._id" :offer="offer" />
    </div>
</template>

<script>
import FlatOffer from '@/components/FlatOffer.vue'

const formatDateOptions = {
    weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'
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
                const str = (d instanceof Date ? d : new Date(d)).toLocaleString('ru', formatDateOptions);
                return str.replace(/\sг.$/, '');
            }
            return '';
        }
    }
}
</script>
