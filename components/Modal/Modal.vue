<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <div class="c-modal" v-if="modalOpen">
      <div class="c-modal__main" ref="main">
        <button to="/" class="home-link" @click="closeModal">
          <animated-link class="c-bezier"> CLOSE </animated-link>
        </button>

        <div class="main__top sect">
          <div class="left">
            <h1>WEBSITE CREDITS</h1>
            <p>
              <a
                href="https://x.com/tosinxt"
                target="__blank"
                style="text-decoration: underline"
                >Oluwatosin Alli</a
              >
              - Senior Developer
            </p>
          </div>
          <div class="right">
            <img
              src="https://res.cloudinary.com/dmwfd0zhh/image/upload/q_auto,f_auto/v1621921773/Korty/Rectangle_57_twgrjb.jpg"
              alt="Munchi - Personal Chef & Culinary Artist"
              style="max-width: 100%; height: auto"
            />
          </div>
        </div>
        <div class="main__bottom sect">
          <div class="left">
            <h1>TYPESETTING</h1>
            <p>Type for this website was set in Fraunces and HK Grotesk</p>
            <div class="left-footer">
              <p>© 2025 Munchi. All rights reserved.</p>
            </div>
          </div>
          <div class="right">
            <h1>ABOUT THIS SITE</h1>
            <p>A showcase of Munchi's culinary journey and creations.</p>
          </div>
        </div>

        <div class="main__footer">
          <p>A fansite for Korty EO</p>
          <p>© 2024</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import gsap from 'gsap/all'
import { mapState, mapGetters } from 'vuex'
import AnimatedLink from '../AnimatedLink/AnimatedLink.vue'
export default {
  components: { AnimatedLink },

  computed: {
    ...mapState(['modalOpen', 'imagesLoaded']),
  },
  methods: {
    closeModal() {
      this.$store.commit('updateModal', false)
    },
    beforeEnter(el) {
      gsap.set(el, {
        height: 0,
        bottom: 0,
      })
    },

    enter(el, done) {
      const timeline = gsap.timeline({
        onComplete() {
          done()
        },
      })
      timeline
        .to(el, {
          height: '100vh',
          duration: 0.8,
          ease: 'power2.inOut',
        })
        .set(el, { top: 0 })
        .from('.c-modal__main', {
          opacity: 0,
        })
    },
    beforeLeave(el) {
      gsap.set(el, {
        top: 0,
        bottom: 'unset',
      })
    },

    leave(el, done) {
      const timeline = gsap.timeline({
        onComplete: done,
      })
      timeline.to(el, {
        height: 0,
        duration: 0.8,
        ease: 'power2.inOut',
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
