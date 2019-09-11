<template>
    <div class="mb3 mb4-l mb4-m">
        <h3 class="ma0 fw5  georgia">
            <span class="dib bg-black-90 white  pa2 pa3-m pa3-l">
                {{ offer.source.name }}: <a :href="offer.ext_full_url" target="blank" class="white">{{ offer.location.address }}</a>
            </span>
        </h3>
        <div class="bg-white dt  w-100  avenir">
            <div class="dtc w-30 tc v-mid  pa2 pa3-m pa3-l mr2  f4 f3-l f3-m">
                {{ offer.rooms_count }}<br/>комн
            </div>
            <div class="dtc w-30-ns w-40 tc v-mid  pa2 pa3-m pa3-l mr2  nowrap  f4 f3-l f3-m">
                {{ offer.price.amount }} ₽
            </div>
            <div class="dtc w-30 tc v-mid  pa2 pa3-m pa3-l mr2  f5 f4-l f4-m">
                <span v-if="!!offer.floor_number" class="nowrap">
                    {{ offer.floor_number }} этаж{{ !!offer.floors_total ? ` / ${offer.floors_total}` : '' }}
                </span>
            </div>
            <div class="ys  dn dtc-ns w-10 tc v-mid  pv2 pv3-m pv3-l">
                 <yandex-share :services="['telegram','whatsapp','viber']" :url="offer.ext_full_url" vertical small />
            </div>
        </div>
    </div>
</template>

<script>
import YandexShare from '@cookieseater/vue-yandex-share';
export default {
    name: 'FlatOffer',
    components: {
        YandexShare
    },
    props: {
        offer: Object
    }
}
</script>

<style scoped>
    .ys >>> .ya-share2__badge {
        filter: grayscale(100);
        opacity: .25;
    }
    .ys >>> .ya-share2__title {
        display: none;
        visibility: hidden;
    }
</style>
