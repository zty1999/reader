<template>
  <!-- 动画组件   
    使用方法：
    <cu-animation :type="'bounce'" :time="0.5"></cu-animation> 
    -->
  <div class="wow animate__animated" :class="typeSet" :data-wow-duration="timeSet">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import WOW from "wow.js";
export interface Props {
  type?: string,// 动画类型
  time?: number // 动画时间
}
const props = withDefaults(defineProps<Props>(), {
  type: '',
  time: 3
})
const { type, time } = props;
// 动画集合
const classNameList = ref<any>({
  // Attention Seekers
  bounce: "animate__bounce",
  flash: " animate__flash",
  pulse: " animate__pulse",
  rubberBand: " animate__rubberBand",
  shake: " animate__shake",
  swing: " animate__swing",
  tada: " animate__tada",
  wobble: " animate__wobble",
  // Bouncing Entrances
  bounceIn: " animate__bounceIn",
  bounceInDown: " animate__bounceInDown",
  bounceInLeft: " animate__bounceInLeft",
  bounceInRight: " animate__bounceInRight",
  bounceInUp: " animate__bounceInUp",
  // Bouncing Exits
  bounceOut: " animate__bounceOut",
  bounceOutDown: " animate__bounceOutDown",
  bounceOutLeft: " animate__bounceOutLeft",
  bounceOutRight: " animate__bounceOutRight",
  bounceOutUp: " animate__bounceOutUp",
  // Fading Entrances
  fadeIn: " animate__fadeIn",
  fadeInDown: " animate__fadeInDown",
  fadeInDownBig: " animate__fadeInDownBig",
  fadeInLeft: " animate__fadeInLeft",
  fadeInLeftBig: " animate__fadeInLeftBig",
  fadeInRight: " animate__fadeInRight",
  fadeInRightBig: " animate__fadeInRightBig",
  fadeInUp: " animate__fadeInUp",
  fadeInUpBig: " animate__fadeInUpBig",
  // Fading Exits
  fadeOut: " animate__fadeOut",
  fadeOutDown: " animate__fadeOutDown",
  fadeOutDownBig: " animate__fadeOutDownBig",
  fadeOutLeft: " animate__fadeOutLeft",
  fadeOutLeftBig: " animate__fadeOutLeftBig",
  fadeOutRight: " animate__fadeOutRight",
  fadeOutRightBig: " animate__fadeOutRightBig",
  fadeOutUp: " animate__fadeOutUp",
  fadeOutUpBig: " animate__fadeOutUpBig",
  // Flippers
  flip: " animate__flip",
  flipInX: " animate__flipInX",
  flipInY: " animate__flipInY",
  flipOutX: " animate__flipOutX",
  flipOutY: " animate__flipOutY",
  // Lightspeed
  lightSpeedIn: " animate__lightSpeedIn",
  lightSpeedOut: " animate__lightSpeedOut",
  // Rotating Entrances
  rotateIn: " animate__rotateIn",
  rotateInDownLeft: " animate__rotateInDownLeft",
  rotateInDownRight: " animate__rotateInDownRight",
  rotateInUpLeft: " animate__rotateInUpLeft",
  rotateInUpRight: " animate__rotateInUpRight",
  // Rotating Exits
  rotateOut: " animate__rotateOut",
  rotateOutDownLeft: " animate__rotateOutDownLeft",
  rotateOutDownRight: " animate__rotateOutDownRight",
  rotateOutUpLeft: " animate__rotateOutUpLeft",
  rotateOutUpRight: " animate__rotateOutUpRight",
  // Sliders
  slideInDown: " animate__slideInDown",
  slideInLeft: " animate__slideInLeft",
  slideInRight: " animate__slideInRight",
  slideOutLeft: " animate__slideOutLeft",
  slideOutRight: " animate__slideOutRight",
  slideOutUp: " animate__slideOutUp",
  // Specials
  hinge: " animate__hinge",
  rollIn: " animate__rollIn",
  rollOut: " animate__rollOut",
})
const typeSet = computed(() => classNameList.value[type])
const timeSet = computed(() => time + "s")

onMounted(() => {
  var wow = new WOW(
    {
      boxClass: 'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset: 0,          // distance to the element when triggering the animation (default is 0)
      mobile: true,       // trigger animations on mobile devices (default is true)
      live: true,       // act on asynchronously loaded content (default is true)
      callback: function (box: any) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();
})
</script>

<style lang="scss" scoped></style>
