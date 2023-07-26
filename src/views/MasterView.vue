<template>
    <header-section></header-section>
    <router-view></router-view>
    <footer-section></footer-section>
</template>

<script>
import HeaderSection from '../components/frontend/HeaderView.vue';
import FooterSection from '../components/frontend/FooterView.vue';
export default {
    name:'MasterView',
     components: {HeaderSection,FooterSection},
};
</script>

<style>

</style>