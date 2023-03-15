<template>
  <SeatPage></SeatPage>
  <FormRace/>
  <RaceCard/>
  <!-- <Error /> -->
</template>
<script>
import RaceCard from './components/RaceCard.vue';
import FormRace from './views/form.vue';
import Error from './views/Error.vue';
import HeaderСrumbsVue from './components/HeaderСrumbs.vue';
import SeatPage from './views/SeatPage.vue';

export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components, object-curly-newline
  components: { RaceCard, FormRace, Error, HeaderСrumbsVue, SeatPage },
};
</script>
<style>
*{
  box-sizing: border-box;
}
:root{
  --blue: #2196F3;
}
.blue__link
{
  color: var(--blue);
  cursor: pointer;
}
body
{
  background-color: #f5f5f5 !important;
}
/* headerCrumbs */

</style>
