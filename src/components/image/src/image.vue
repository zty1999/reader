<template>
  <img v-if="src != undefined" :style="{ 'width': width + 'px', 'height': height + 'px' }" :src="url" />
  <template v-else>
    <div v-if="placeholder">
      {{ placeholder }}
    </div>
    <div v-else>
      <img src="@/assets/vue.svg" alt="">
    </div>
  </template>
</template>
<script lang="ts" setup>

const props = defineProps({
  src: String,
  width: String,
  height: String,
  fit: String,// object-fit 
  placeholder: String   // 图片地址为空显示内容 默认显示暂无图片
})

let url = ref("")
let { src,width,height,fit,placeholder } = props; 
const getImageUrl = (src:string) => {
  return new URL(src,import.meta.url).href
}
url = computed((props:string) => {return (src && getImageUrl(src)|| '' )})

</script>

<style lang="scss" scoped>

</style>
