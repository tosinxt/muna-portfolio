<template>
  <LocomotiveScroll
    ref="scroller"
    :getted-options="{
      offset: ['30%', 0],
      direction: 'vertical'
    }"
    class="mobile-landing"
  >
    <div class="c-landing__header">
      <nuxt-link to="/profile">
        <AnimatedLink class="c-bezier">
          Profile
        </AnimatedLink>
      </nuxt-link>
      <nuxt-link to="/gallery">
        <AnimatedLink class="c-bezier">
          Gallery
        </AnimatedLink>
      </nuxt-link>
      <nuxt-link to="/menu">
        <AnimatedLink class="c-bezier">
          Menu
        </AnimatedLink>
      </nuxt-link>
    </div>
    <div class="c-landing__mobile">
      <div class="c-intro">
        <div class="c-intro__image c-name__image ov-h">
          <div 
            class="inner"
            style="background-image: url('/images/munachi/PHOTO-2025-11-16-20-41-59.jpg')"
          ></div>
        </div>

        <div class="c-intro__details">
          <h1 class="details-title span-overflow" style="margin-bottom: 12px;">
            <span class="ov-inner">
munchi
            </span>
          </h1>
          <p class="details-jd span-overflow">
            <span class="ov-inner">
              PERSONAL CHEF & <br />
              CULINARY ARTIST
            </span>
          </p>
        </div>
      </div>
      <div class="c-jobs">
        <div class="c-desc">
          <p class="span-overflow">
            <span class="ov-inner">
              Creating exceptional culinary experiences with a focus on quality ingredients and innovative flavors.
            </span>
          </p>
        </div>

        <div class="c-job">
          <a
            href="https://www.youtube.com/results?search_query=korty+eo"
            target="_blank"
          >
            <h2 class="c-job__title align-right ml-auto">
              <span
                >CUL<span class="fraunces">I</span>NARY</span
              >
              <br />
              <span class="fraunces">JOURNEY</span>
            </h2>
          </a>
          <div class="c-job__video">
            <video
              src="https://res.cloudinary.com/dnf1unqkp/video/upload/v1763468507/IMG_0996_q9lzfh.mp4"
              class="hover-reveal__video mobile"
              autoplay
              preload="auto"
              muted
              loop
              playsinline
            />
          </div>
        </div>

        <div class="c-job">
          <div class="c-job__title max">
            <a href="https://www.instagram.com/korty_eo/">
              <span>AB<span class="fraunces">O</span>UT</span>
              <br />
              <span class="align-right bottom-text">
                <div><span class="fraunces">ME</span></div>
                <div class="title-desc ml-auto">
                  <p>
                    these showcase my culinary journey and creations. Follow for daily food inspiration and recipes.
                  </p>
                </div>
              </span>
            </a>
          </div>
          <div class="c-job__video">
            <video
              src="https://res.cloudinary.com/dnf1unqkp/video/upload/v1763468509/IMG_0999_z1rb1y.mp4"
              class="hover-reveal__video mobile"
              autoplay
              preload="auto"
              muted
              loop
              playsinline
            />
          </div>
        </div>

        <div class="c-job">
          <h2 class="c-job__title align-right">
            <nuxt-link to="/archive">
              <span>MY <span class="fraunces">A</span>RCHIVE</span>
            </nuxt-link>
          </h2>
          <div class="c-job__desc">
            <div class="desc-image">
              <img
                src="https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340447/PHOTO-2025-11-16-20-41-59_ehdnck.jpg"
                alt="Munchi - Personal Chef & Culinary Artist"
                style="width: 100%; height: 100%; object-fit: cover;"
              />
            </div>
            <div class="desc-text">
              <p>
                Specializing in creating memorable dining experiences with a personal touch
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <nuxt-link class="c-circular-link" to="/profile">
          <circular-link label="profile-1">
            View Munchi's Profile
          </circular-link>
        </nuxt-link>
      </div>
      <div class="c-credits">
        <button class="credits-link" @click="openModal">
          <div class="c-inner">
            credits
          </div>
        </button>
      </div>
    </div>
  </LocomotiveScroll>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedLink from "../AnimatedLink/AnimatedLink.vue";
import CircularLink from "../CircularLink/CircularLink.vue";

gsap.registerPlugin(ScrollTrigger, CircularLink);

export default {
  components: { AnimatedLink },
  mounted() {
    this.initScrolltrigger();
    // const elements = document.querySelectorAll(".scroll-in");
    // elements.forEach(element => this.elementAnimation(element));
  },
  methods: {
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive;
      locomotive.on("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          };
        }
      });
    },

    openModal() {
      this.$store.commit("updateModal", true);
    }
  }
};
</script>

<style lang="scss" scoped></style>
