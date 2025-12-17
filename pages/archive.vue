<template>
  <div class="c-archive">
    <svg class="cursor" width="32" ref="cursor" height="32" viewBox="0 0 20 20">
      <circle class="cursor__inner" cx="10" cy="10" r="5" />
    </svg>
    <div class="c-archive__header">
      <nuxt-link to="/profile">
        <animated-link class="c-bezier">
          Profile
        </animated-link>
      </nuxt-link>
      <nuxt-link to="/">
        <animated-link class="c-bezier">
          Close
        </animated-link>
      </nuxt-link>
    </div>
    <LocomotiveScroll
      ref="scroller"
      class="horizontal"
      :getted-options="{
        direction: 'horizontal',
        smooth: true,
        getSpeed: true,
        lerp: 0.08
        // Other options
      }"
    >
      <div class="c-archive__main">
        <div>
          <div class="archive__intro">
            <p>
              A collection of Munchi's culinary masterpieces and food photography.
              Each dish tells a story of passion, creativity, and dedication to the
              art of cooking. All images are original works by Munchi.
            </p>

            <button class="credits-link show-mobile" @click="openModal">
              <div class="c-inner">
                <animated-link class="c-bezier">
                  credits
                </animated-link>
              </div>
            </button>

            <h1>
              "Cooking is an art, but all art requires knowing something about the techniques and materials."
            </h1>
            <nuxt-link to="/" class="home-link">
              <animated-link class="c-bezier">
                Go to Home
              </animated-link>
            </nuxt-link>

            <button class="credits-link show-desktop" @click="openModal">
              <div class="c-inner">
                <animated-link class="c-bezier">
                  credits
                </animated-link>
              </div>
            </button>
          </div>
          <div class="archive__images">
            <div class="c-image sm">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340486/PHOTO-2025-11-16-20-41-59_rutlks.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340475/PHOTO-2025-11-16-20-41-59_cxbx6h.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340473/PHOTO-2025-11-16-20-41-59_iuiqwd.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image md nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340471/PHOTO-2025-11-16-20-41-59_w4zjg3.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340463/PHOTO-2025-11-16-20-41-59_eowigs.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340460/PHOTO-2025-11-16-20-41-59_urrw6j.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340439/PHOTO-2025-11-16-20-41-59_ovxdwp.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340435/PHOTO-2025-11-16-20-41-59_q0rxjr.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340434/PHOTO-2025-11-16-20-41-59_k7l18a.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image md nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340433/PHOTO-2025-11-16-20-41-59_rtljqm.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340427/PHOTO-2025-11-16-20-41-59_rkgtdr.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image md nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340426/PHOTO-2025-11-16-20-41-58_zi4dlw.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340425/PHOTO-2025-11-16-20-41-58_gzi0fb.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340413/PHOTO-2025-11-16-20-41-58_q4u9yq.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340411/PHOTO-2025-11-16-20-41-58_cys02p.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340404/PHOTO-2025-11-16-20-41-58_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340403/PHOTO-2025-11-16-20-41-58_ndkq1y.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image md">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340402/PHOTO-2025-11-16-20-41-58_pe4y8v.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image sm nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340400/PHOTO-2025-11-16-20-41-58_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs nobp">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340399/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                    background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340397/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                    background-position: center;
                    background-size: cover;">
                </div>
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340396/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image md">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340395/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340394/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>

              <div class="c-image xs">
                <div
                  data-scroll
                  data-scroll-speed="-0.8"
                  class="bg-image"
                  style="
                  background-image: url(https://res.cloudinary.com/dnf1unqkp/image/upload/v1763340393/PHOTO-2025-11-16-20-41-57_sw0i5d.jpg);
                  background-position: center;
                  background-size: cover;
                "
                />
              </div>
          </div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import AnimatedArrow from "@/components/AnimatedArrow.vue";
import AnimatedLink from "@/components/AnimatedLink/AnimatedLink.vue";
import { map, clamp } from "@/utils/index";
import gsap from "gsap/all";
import { Cursor } from "~/animations/cursor";

export default {
  components: { AnimatedArrow, AnimatedLink },

  /**
   * TODO: outsource the exit animations into one and reuse
   */
  transition: {
    name: "profile",
    mode: "out-in",
    css: false,
    appear: true,
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0
      });
    },
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });
      tl.to(el, {
        opacity: 1,
        duration: 1.5
      })
        .set(".archive__images .c-image", { autoAlpha: 1 }, "-=1.5")
        .from(
          ".archive__images .c-image",
          {
            duration: 1.5,
            yPercent: 100,
            ease: "Expo.easeInOut"
          },
          "-=1.5"
        )
        .from(".archive__images .bg-image", {
          duration: 1.5,
          yPercent: -100,
          delay: -1.5,
          ease: "Expo.easeInOut"
        })
        .from(".archive__images .bg-image", {
          duration: 1.5,
          scale: 1.2,
          delay: -1.4,
          ease: "Expo.easeInOut"
        });
    },
    beforeLeave(el) {
      gsap.set(".c-exit", {
        zIndex: 30,
        top: "unset",
        bottom: 0
      });
      gsap.set(".exit-span", {
        opacity: 1
      });
    },
    leave(el, done) {
      const tl = gsap.timeline({
        onComplete: done
      });

      tl.to(".c-exit", {
        height: window.innerHeight,
        duration: 1.5,
        ease: "Expo.easeInOut"
      })
        .set(".c-exit", {
          top: 0,
          bottom: "unset"
        })
        .from(
          ".exit-span",
          {
            yPercent: 100,
            duration: 1,
            skewY: 5,
            stagger: {
              amount: 0.1
            },
            ease: "power2.out"
          },
          "-=.5"
        )
        .set(el, {
          opacity: 0
        })
        .to(".exit-span", {
          opacity: 0,
          duration: 1,
          ease: "power2.out"
        })
        .to(
          ".c-exit",
          {
            height: 0,
            duration: 1.5,
            ease: "Expo.easeInOut"
          },
          "-=1"
        );
    }
  },
  mounted() {
    const locomotive = this.$refs.scroller.locomotive;
    this.$nuxt.$emit("update-locomotive");
    this.beginCursor();

    let direction = "horizontal";
    window.addEventListener("resize", () => {
      const width = window.innerWidth;

      if (width <= 768 && direction !== "vertical") {
        locomotive.destroy();
        locomotive.init();
        direction = "vertical";
      }

      if (width > 768 && direction === "vertical") {
        locomotive.destroy();
        locomotive.init();
        direction = "horizontal";
      }
    });

    let scroll = { cache: 0, current: 0 };
    const allImgs = [...document.querySelectorAll(".archive__images .c-image")];
    locomotive.on("scroll", obj => {
      scroll.current = obj.scroll.x;
      const distance = scroll.current - scroll.cache;
      scroll.cache = scroll.current;
      const skewVal = map(distance, -50, 50, -15, 15);
      allImgs.forEach(
        el => (el.style.transform = `skewX(${clamp(skewVal, -1, 1)}deg)`)
      );
    });
    locomotive.update();
  },
  methods: {
    openModal() {
      this.$store.commit("updateModal", true);
    },
    beginCursor() {
      const cursorRef = this.$refs.cursor;
      const cursor = new Cursor(cursorRef);
      [...document.querySelectorAll("a")].forEach(link => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
      [...document.querySelectorAll("button")].forEach(link => {
        link.addEventListener("mouseenter", () => cursor.enter());
        link.addEventListener("mouseleave", () => cursor.leave());
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
