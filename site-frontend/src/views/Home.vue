<template>
<div class="mw9 center pa4 ph7-l">
    <header>
        <h1 class="sans-serif f2 f1-m f-headline-l lh-title measure-wide mv0">
            <span class="bg-black-90 lh-copy white pa1">
                <span>Cyanic</span>
                <span class="dib">
                    <a href="https://t.me/cyanic_public" target="blank" class="ml2 dib telegram-channel-link" title="cyanic_public - Telegram Public Group"></a>
                </span>
            </span>
        </h1>
        <h3 class="f4 f2-l f3-m fw3 georgia lh-title i mt2 measure-wide">
            <span class="bg-black-90 white pa1">
                Аренда 2 и 3-комнатных квартир на улицах Лукинская, Шолохова, <span class="nowrap-ns">Скульптора Мухиной</span> и Чоботовская в <span class="nowrap">Ново-Переделкино</span>
            </span>
        </h3>
    </header>
    <FlatOffersList />
</div>
</template>

<script>
import FlatOffersList from '@/components/FlatOffersList.vue'

export default {
    name: 'home',
    components: {
        FlatOffersList
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
    .telegram-channel-link {
        height: 2rem;
        width: 2rem;
        background-size: 2rem 2rem;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M18.92 6.089L4.747 11.555c-.967.388-.962.928-.176 1.168l3.534 1.104 1.353 4.146c.164.454.083.634.56.634.368 0 .53-.168.736-.368.13-.127.903-.88 1.767-1.719l3.677 2.717c.676.373 1.165.18 1.333-.628l2.414-11.374c.247-.99-.378-1.44-1.025-1.146zM8.66 13.573l7.967-5.026c.398-.242.763-.112.463.154l-6.822 6.155-.265 2.833-1.343-4.116z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
    }
    @media screen and (min-width: 30em) and (max-width: 60em) {
        .telegram-channel-link {
            vertical-align: sub;
            height: 4rem;
            width: 4rem;
            background-size: 4rem 4rem;
        }
    }
    @media screen and (min-width: 60em) {
        .telegram-channel-link {
            vertical-align: baseline;
            height: 6rem;
            width: 6rem;
            background-size: 6rem 6rem;
        }
    }
</style>
