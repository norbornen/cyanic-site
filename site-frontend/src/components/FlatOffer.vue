<template>
    <div class="mb3 mb4-ns">
        <h3 class="ma0 fw5  georgia">
            <span class="dib bg-black-90 white  pa2 pa3-ns">
                <small class="f7 avenir db mb1">{{ new Date(offer.createdAt).toLocaleString('ru') }}</small>
                <span>
                    {{ offer.source.name }}: <a :href="offer.ext_full_url" target="blank" class="white">{{ offer.location.address }}</a>
                </span>
            </span>
        </h3>
        <div class="bg-white dt  w-100">
            <div class="dtc w-30 tc v-mid  pa2 pa3-ns mr2  f4 f3-ns">
                {{ offer.rooms_count }}<br/>комн
            </div>
            <div class="dtc w-40 tc v-mid  pa2 pa3-ns mr2  nowrap  f4 f3-ns">
                {{ offer.price.amount }} ₽
            </div>
            <div class="dtc w-30 tc v-mid  pa2 pans mr2  f5 f4-ns">
                <span v-if="!!offer.floor_number" class="nowrap">
                    {{ offer.floor_number }} этаж{{ !!offer.floors_total ? ` / ${offer.floors_total}` : '' }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlatOffer',
    components: {
    },
    props: {
        offer: Object
    }
}
</script>

<style scoped>
    .created-at {
        font-size: 0.75rem;
    }
</style>
