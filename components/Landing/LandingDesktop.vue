<template>
  <div class="desktop-landing">
    <div class="c-landing__header">
      <nuxt-link to="/profile">
        <AnimatedLink class="c-bezier"> Profile </AnimatedLink>
      </nuxt-link>
      <nuxt-link to="/archive">
        <AnimatedLink class="c-bezier"> Gallery </AnimatedLink>
      </nuxt-link>
      <nuxt-link to="/archive">
        <AnimatedLink class="c-bezier"> Menu </AnimatedLink>
      </nuxt-link>
    </div>
    <div class="c-landing__desktop">
      <div class="hero-content">
        <div class="hero-image">
          <div class="image-mask"></div>
          <div
            class="c-image"
            :style="{
              backgroundImage: `url(${optImg(
                'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472276/PHOTO-2025-11-16-20-41-56_mk8yv4-removebg-preview_cp5ryy.png'
              )})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          ></div>
        </div>
        <div class="c-name__image">
          <div
            class="inner"
            :style="{
              backgroundImage: `url(${optImg(
                'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472453/PHOTO-2025-11-16-20-41-59_tafemr-removebg-preview_yyyjep.png'
              )})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          ></div>
        </div>
        <div class="c-name__details">
          <h1 class="details-title span-overflow">
            <span class="ov-inner"> munchi </span>
          </h1>
          <p class="details-jd span-overflow">
            <span class="ov-inner">
              PERSONAL CHEF & <br />
              CULINARY ARTIST
            </span>
          </p>
        </div>

        <button class="credits-link" @click="openModal">
          <div class="c-inner">
            <AnimatedLink class="c-bezier"> credits </AnimatedLink>
          </div>
        </button>
      </div>
      <div class="hero-links">
        <div class="c-hoverlink hover-link-1">
          <div class="span-overflow">
            <div class="ov-inner">
              <p>
                Based in the United Kingdom. Munchi creates exceptional culinary
                experiences with a focus on -
              </p>
            </div>
          </div>
          <div>
            <hover-link
              label="CULINARY JOURNEY"
              :assetUrl="
                optImg(
                  'https://res.cloudinary.com/dnf1unqkp/video/upload/v1763468507/IMG_0996_q9lzfh.mp4'
                )
              "
              href="https://www.youtube.com/channel/UCTFFhYhkLkxjhcCdwUKmQ5g"
            >
              <sup class="c-hoverlink__super">01</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    CUL<span class="fraunces">I</span>NARY
                    <span class="fraunces">JOURNEY</span>
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
        </div>

        <div class="c-hoverlink hover-link-2">
          <div>
            <hover-link
              label="ABOUT ME"
              :assetUrl="
                optImg(
                  'https://res.cloudinary.com/dnf1unqkp/video/upload/v1763468509/IMG_0999_z1rb1y.mp4'
                )
              "
              href="https://www.instagram.com/korty_eo/"
            >
              <sup class="c-hoverlink__super">02</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    AB<span class="fraunces">O</span>UT
                    <span class="fraunces">ME</span>
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
          <div class="span-overflow">
            <span class="ov-inner">
              <p>
                these showcase my culinary journey and creations. Follow for
                daily food inspiration and recipes.
              </p>
            </span>
          </div>
        </div>
        <div class="c-hoverlink hover-link-3">
          <div class="image-details">
            <div class="span-overflow">
              <span class="ov-inner">
                <p>
                  Specializing in creating memorable dining experiences with a
                  personal touch
                </p>
              </span>
            </div>
            <div class="c-image c-model__image ov-h">
              <img
                :src="
                  optImg(
                    'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340447/PHOTO-2025-11-16-20-41-59_ehdnck.jpg'
                  )
                "
                alt="Munchi - Personal Chef & Culinary Artist"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </div>
          </div>
          <div>
            <hover-link
              label="MY ARCHIVE"
              :assetUrl="
                optImg(
                  'https://res.cloudinary.com/dnf1unqkp/video/upload/v1763468532/IMG_1006_t2xwbg.mp4'
                )
              "
              :href="'/archive'"
            >
              <sup class="c-hoverlink__super">03</sup>
              <div class="link-overflow">
                <span class="ov-inner">
                  <AnimatedLink>
                    MY <span class="fraunces">A</span>RCHIVE
                  </AnimatedLink>
                </span>
              </div>
            </hover-link>
          </div>
        </div>
        <nuxt-link class="c-circular-link" to="/profile">
          <circular-link> View Munchi's Profile </circular-link>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import CircularLink from '../CircularLink/CircularLink.vue'
import HoverLink from '../HoverLink/HoverLink.vue'
import { optimizeCloudinaryImage } from '@/utils/index'
export default {
  components: { CircularLink, HoverLink },
  methods: {
    openModal() {
      this.$store.commit('updateModal', true)
    },
    optImg(url) {
      return optimizeCloudinaryImage(url)
    },
  },
}
</script>

<style lang="scss" scoped></style>
