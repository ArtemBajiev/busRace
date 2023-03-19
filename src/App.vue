<template>
<RouterView/>
</template>
<script>

export default {
  name: 'App',

};
</script>
<style>

*{
  box-sizing: border-box;
}
:root{
    --gray: #a7a7a7;
  --blue: #2196F3;

}
.container {
  width: 100%;
  max-width: 1044px !important;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
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
.inp-gray
{
    border: 1px solid  #d2d2d2 !important;
    height: 50px !important;
}
.inp-gray::placeholder
{
  color: var(--gray);
  font-weight: 500;
}
.label-gray
{
    color: var(--gray);
    margin-bottom: 0px;
}
.but-go
{
  background-color: var(--blue);
  color: white;
  margin-top: 30px;
  height: 40px;
  width: 300px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 15%);
}

</style>
