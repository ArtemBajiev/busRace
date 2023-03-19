<template>
        <div class="personal-account__content" >
        <RaceCard :button-status="false"/>
        <div class="personal-account__content-empty">
        <h2>У вас пока нет предстоящих поездок</h2>
        <p>Чтобы найти билеты на автобус выберите направление,
             дату поездки и количество пассажиров</p>
        </div>
        </div>
</template>
<script>
import RaceCard from '@/components/RaceCard.vue';

export default
{
  components: { RaceCard },

};
</script>
