<template>
  <div>
    <svg class="cursor" width="32" ref="cursor" height="32" viewBox="0 0 20 20">
      <circle class="cursor__inner" cx="10" cy="10" r="5" />
    </svg>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        direction: 'vertical',
        smooth: true,
        getSpeed: true,
        lerp: 0.1,
        // Other options
      }"
    >
      <div class="c-profile">
        <div class="c-profile__header">
          <nuxt-link to="/">
            <AnimatedLink class="c-bezier"> Close </AnimatedLink>
          </nuxt-link>
          <nuxt-link to="/archive">
            <AnimatedLink class="c-bezier"> Gallery </AnimatedLink>
          </nuxt-link>
          <nuxt-link to="/archive">
            <AnimatedLink class="c-bezier"> Menu </AnimatedLink>
          </nuxt-link>
        </div>

        <div class="c-profile__hero">
          <div class="hero__image">
            <img
              :src="
                optImg(
                  'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763475474/PHOTO-2025-11-18-10-36-34_ttzogs.jpg'
                )
              "
              alt="Munchi - Personal Chef & Culinary Artist"
              data-scroll-speed="1"
              style="width: 100%; height: 100%; object-fit: cover"
            />
          </div>
          <div class="hero-content">
            <h1 class="hero-content__title span-overflow">
              <span class="ov-inner">
                M<span class="fraunces">u</span>nachi
                <span class="fraunces">U.</span>
              </span>
            </h1>
            <div class="hero-content__caption">
              <p>Chef Muna</p>
              <p>Culinary Artist & Visual Storyteller</p>
              <p>Creating unforgettable experiences through food and imagery</p>
            </div>
          </div>
        </div>

        <div class="c-profile__headline">
          <h2 class="headline__text">
            <span>Chef <span class="fraunces">&</span> Creative Director</span>
            <span>Food <span class="fraunces">&</span> Visual Storyteller</span>
            <span
              >Culinary <span class="fraunces">&</span> Content Creator</span
            >
          </h2>
        </div>
        <div class="c-profile__intro">
          <div class="intro__image">
            <img
              src="/images/munachi/PHOTO-2025-11-16-20-41-59(7).jpg"
              alt="Chef Muna - Signature Dish"
            />
            <p class="c-caption">Chef Muna &nbsp; <span>Woman of God</span></p>
          </div>
          <div class="intro__text">
            <div class="inner">
              <h2>is a culinary artist with an eye for visual storytelling</h2>
              <p class="para-1">
                —blending the art of cooking with the power of visual media.
                With years of experience in professional kitchens and behind the
                lens, Muna creates immersive culinary experiences that engage
                all senses.
              </p>
              <p>
                As both a chef and visual storyteller, Muna brings a unique
                perspective to food media. Her background in professional
                cooking, combined with her skills in photography and
                videography, allows her to create content that not only tastes
                incredible but tells a compelling story. Specializing in
                [specific cuisines], she has worked with [notable
                clients/publications] to create stunning visual content that
                celebrates food culture.
              </p>
            </div>
          </div>
        </div>
        <div class="c-profile__editorial">
          <div class="editorial__image">
            <p class="c-caption">
              Culinary & Visual Portfolio &nbsp; <span>2025</span>
            </p>
          </div>
          <div class="editorial__content first">
            <div class="left">
              <h2>
                "Food is my first love, but storytelling through visuals is what
                completes the experience. Every dish has a story, and through my
                lens, I aim to capture not just how food looks, but how it makes
                us feel. The sizzle, the steam, the textures – these are the
                elements that bring culinary stories to life."”
              </h2>
              <p class="c-caption">
                – Munchi &nbsp; <span>November 18, 2025</span>
              </p>
            </div>
            <div class="right">
              <p>
                Munchi discovered her passion for culinary arts at an early age,
                inspired by the rich flavors and traditions of Nigerian cuisine.
                After honing her skills in professional kitchens across Lagos,
                she decided to combine her love for food with her creative
                vision. What started as a personal journey of culinary
                exploration quickly evolved into a professional career as a
                personal chef and culinary artist.
              </p>
            </div>
          </div>
          <div class="editorial__content second">
            <div class="left">
              <p>
                She later joined Empawa Africa, (a digital company to support
                new and upcoming african artistes) in January 2020 as a content
                lead where she had creative freedom on a couple of projects. She
                soon left to pursue a freelance filmmaking career and started a
                youtube channel document her life.
              </p>
            </div>
            <div class="right">
              <div class="image">
                <img
                  src="https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472453/PHOTO-2025-11-16-20-41-59_tafemr-removebg-preview_yyyjep.png"
                  alt="Munchi - Culinary Artist"
                  style="width: 100%; height: 100%; object-fit: cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="c-profile__work">
          <div class="c-profile__work--desktop" ref="works">
            <div class="work__intro">
              <div class="inner">
                <div class="image-con">
                  <div class="intro__image">
                    <img
                      :src="
                        optImg(
                          'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472453/PHOTO-2025-11-16-20-41-59_tafemr-removebg-preview_yyyjep.png'
                        )
                      "
                      alt="Munchi - Personal Chef"
                      style="width: 100%; height: 100%; object-fit: cover"
                    />
                  </div>
                  <p class="c-caption">
                    Munchi &nbsp;
                    <span>November 18, 2025</span>
                  </p>
                </div>

                <div class="intro__desc">
                  <h1>W<span class="fraunces">O</span>RK</h1>
                  <p class="first-para">
                    Munchi has worked across the culinary world, from high-end
                    restaurants to private dining experiences, bringing her
                    unique fusion of traditional Nigerian flavors with
                    contemporary techniques to every dish she creates.
                  </p>
                  <div class="intro__cta">
                    <button class="cta-button">
                      <animated-arrow />
                    </button>
                    <p>
                      Here are some featured projects, Keep scrolling to see.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="work__companies">
              <div class="nike-gt">
                <div class="nike">
                  <div class="nike__left">
                    <h2>FLAVOR FUSION</h2>
                    <div class="nike__image1">
                      <img
                        src="/images/munachi/PHOTO-2025-11-16-20-41-59(8).jpg"
                        alt="Flavor Fusion culinary event"
                        class="skew-image"
                      />
                    </div>
                    <animated-arrow href="#" />
                  </div>
                  <div class="nike__right">
                    <div class="nike__image2">
                      <img
                        src="/images/munachi/PHOTO-2025-11-16-20-41-59(6).jpg"
                        alt="Culinary workshop presentation"
                        class="skew-image"
                      />
                    </div>
                    <p>
                      Signature culinary event series blending traditional
                      African flavors with modern techniques.
                    </p>
                  </div>
                </div>
                <div class="gt">
                  <div>
                    <div class="gt__image">
                      <img
                        src="/images/munachi/PHOTO-2025-11-16-20-41-59(7).jpg"
                        alt="Food photography work"
                      />
                    </div>
                    <div class="gt__desc">
                      <h3>FOOD PHOTOGRAPHY</h3>
                      <p>
                        Capturing the art of cuisine through creative
                        photography
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="empawa">
                <div class="empawa__image">
                  <img
                    src="/images/munachi/PHOTO-2025-11-16-20-41-59(5).jpg"
                    alt="Culinary workshop in progress"
                    class="skew-image"
                  />
                </div>
                <div class="empawa__desc">
                  <p>
                    Leading culinary workshops that combine cooking techniques
                    with food styling and photography.
                  </p>
                  <animated-arrow href="#" />
                </div>
                <h1>WORKSHOPS</h1>
              </div>

              <div class="zikoko-ga">
                <div class="googlearts">
                  <h3>FOOD STYLING <br />& PHOTOGRAPHY</h3>
                  <p>
                    Creating visually stunning food presentations that tell a
                    story and capture the essence of each dish.
                  </p>
                </div>
                <div class="zikoko">
                  <div class="zikoko__image">
                    <img
                      src="/images/munachi/PHOTO-2025-11-16-20-41-59(4).jpg"
                      alt="Food styling work"
                      class="skew-image"
                    />
                  </div>
                  <div class="zikoko__desc">
                    <animated-arrow href="#" />
                    <div>
                      <h1>CULINARY MEDIA</h1>
                      <p>
                        Food styling and photography for restaurants, brands,
                        and culinary publications
                      </p>
                    </div>
                  </div>
                </div>

                <div class="coachella">
                  <div class="coachella__label">
                    <div class="coachella__disclaimer">
                      <span>*</span>
                      <p>featured in</p>
                    </div>
                    <h3>2024</h3>
                  </div>
                  <h2 class="coachella__title">CULINARY ARTS</h2>
                  <div class="coachella__story">
                    <div class="coachella__desc">
                      <p>
                        Featured in Culinary Arts Magazine for innovative food
                        presentation techniques
                      </p>
                    </div>
                    <animated-arrow href="#" />
                  </div>
                </div>
              </div>

              <div class="bbnaija">
                <div class="bbnaija__top">
                  <div class="image-1">
                    <img
                      src="/images/munachi/PHOTO-2025-11-16-20-41-59(3).jpg"
                      alt="Cooking show set"
                    />
                  </div>
                  <div class="image-2">
                    <img
                      src="/images/munachi/PHOTO-2025-11-16-20-41-59(2).jpg"
                      alt="Recipe development session"
                    />
                  </div>
                  <p>
                    Host and creative director of a popular cooking show that
                    combines culinary expertise with stunning visual
                    storytelling.
                  </p>
                </div>
              </div>
              <div class="keexs">
                <img
                  src="/images/munachi/PHOTO-2025-11-16-20-41-59(1).jpg"
                  alt="Recipe book cover"
                  class="keexs__image skew-image"
                />
                <div class="keexs__panel">
                  <h2>RECIPE BOOK</h2>
                  <p>
                    Authored a best-selling recipe book featuring food
                    photography and styling by the chef herself.
                  </p>
                  <animated-arrow href="#" />
                </div>
              </div>
              <div class="pamane">
                <div class="pamane__left">
                  <img
                    src="/images/munachi/PHOTO-2025-11-16-20-41-57.jpg"
                    alt="Culinary brand collaboration"
                    class="skew-image"
                  />
                </div>
                <div class="pamane__right">
                  <div class="pamane__top">
                    <div class="pamane__image">
                      <img
                        src="/images/munachi/PHOTO-2025-11-16-20-41-58(1).jpg"
                        alt="Social media content creation"
                      />
                    </div>
                    <div class="pamane__desc">
                      <animated-arrow href="#" />
                      <p>
                        Collaborations with premium kitchenware and food brands
                        for content creation and product development.
                      </p>
                    </div>
                  </div>
                  <h1>BRAND COLLABS</h1>
                </div>
              </div>
            </div>
            <div class="work__quote">
              <div>
                <div class="desc">
                  <animated-arrow
                    href="https://www.youtube.com/channel/UCTFFhYhkLkxjhcCdwUKmQ5g"
                  />
                  <p>
                    Today, Munchi runs her own culinary business, offering
                    private chef services, cooking classes, and food styling for
                    various media productions.
                  </p>
                </div>
                <h1>MAKING FILM THE</h1>
                <div class="row-2">
                  <h1>SLOWER WAY,</h1>
                  <div class="row-image">
                    <img
                      :src="
                        optImg(
                          'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472276/PHOTO-2025-11-16-20-41-56_mk8yv4-removebg-preview_cp5ryy.png'
                        )
                      "
                      alt="Munchi's Signature Dish"
                      style="width: 100%; height: 100%; object-fit: cover"
                    />
                  </div>
                </div>
                <h1><span class="fraunces">Learning</span> BY DOING</h1>
              </div>
            </div>
          </div>

          <div class="c-profile__work--mobile show-tablet">
            <h1 class="first-heading">M<span class="fraunces">Y</span> WORK</h1>
            <p class="first-para">
              Chef Muna has worked across top restaurants and media houses,
              mastering both culinary arts and visual storytelling. Her unique
              approach combines traditional cooking techniques with modern
              visual media to create compelling food narratives that engage and
              inspire.
            </p>
            <div class="intro__image">
              <div />
            </div>

            <div class="work__places">
              <a href="/" target="__blank" class="right">NIKE</a>
              <a href="/" target="__blank" class="right">GTBANK</a>
              <a href="/" target="__blank" class="right">EMPAWA</a>
              <a href="/" target="__blank" class="center">
                ZIK<span class="fraunces">O</span>K<span class="fraunces"
                  >O</span
                >
              </a>
              <a href="/" target="__blank" class="center google-arts">
                <span>GOOGLE ARTS & CULTURE</span>
              </a>
              <a href="/" target="__blank" class="center"
                >C<span class="fraunces">O</span>ACHELLA</a
              >
              <a href="/" target="__blank">BBNAIJA</a>
              <a href="/" target="__blank">KEEXS</a>
              <a href="/" target="__blank">PAMANE</a>
            </div>

            <div class="work__quote">
              <img
                :src="
                  optImg(
                    'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472276/PHOTO-2025-11-16-20-41-56_mk8yv4-removebg-preview_cp5ryy.png'
                  )
                "
                alt="Munchi's Culinary Art"
                style="width: 100%; height: 100%; object-fit: cover"
              />

              <h1>
                MAKING FILM THE SLOWER WAY,
                <span class="fraunces">Learning</span> BY DOING
              </h1>
              <p>
                Today, Munchi runs her own culinary business, offering private
                chef services, cooking classes, and food styling for various
                media productions.
              </p>
            </div>
          </div>
        </div>

        <div class="c-profile__footer">
          <div class="inner-con">
            <div class="footer__left show-desktop">
              <button class="credits-link" @click="openModal">
                <div class="c-inner">
                  <animated-link class="c-bezier"> credits </animated-link>
                </div>
              </button>
              <p>
                Munachi Udengwu <br />
                <a href="#" target="__blank" style="text-decoration: underline"
                  >Culinary & Visual Portfolio</a
                >
              </p>
              <div class="footer__image">
                <img
                  :src="
                    optImg(
                      'https://res.cloudinary.com/dnf1unqkp/image/upload/v1763472453/PHOTO-2025-11-16-20-41-59_tafemr-removebg-preview_yyyjep.png'
                    )
                  "
                  alt="Munchi - Professional Chef"
                  style="width: 100%; height: 100%; object-fit: cover"
                />
              </div>
            </div>
            <div class="footer__center">
              <h1>Thank <span class="fraunces">you!</span></h1>
              <div class="c-bottom">
                <div class="bottom__left">
                  <p class="c-desc">
                    If you enjoyed going through this web experience, consider
                    sharing it on social media so other people get to see it.
                  </p>
                  <div class="socials">
                    <a href="/" target="_blank" class="social">
                      <animated-link class="c-bezier"> Tweet </animated-link>
                    </a>
                    <a href="/" target="_blank" class="social">
                      <animated-link class="c-bezier">
                        Post on Instagram
                      </animated-link>
                    </a>
                  </div>
                  <p class="c-facebook show-desktop">
                    Let's collaborate on your next culinary or media project.
                  </p>
                </div>
                <div class="bottom__right">
                  <p>
                    Explore my portfolio to see how culinary art and visual
                    storytelling come together. For collaborations, events, or
                    media inquiries, please get in touch.
                  </p>

                  <button class="credits-link" @click="openModal">
                    <div class="c-inner">
                      <animated-link class="c-bezier"> credits </animated-link>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="footer__right">
              <nuxt-link class="c-circular-link" to="/archive">
                <circular-link> View Munchi's Portfolio </circular-link>
              </nuxt-link>
              <p class="show-mobile">
                Munachi Udengwu - Chef & Creative Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedLink from '../components/AnimatedLink/AnimatedLink.vue'
import Arrow from '../components/Arrow.vue'
import CircularLink from '../components/CircularLink/CircularLink.vue'
import AnimatedArrow from '../components/AnimatedArrow.vue'
import { map, clamp, optimizeCloudinaryImage } from '@/utils/index'
import { ScrollToPlugin } from 'gsap/all'
import { Cursor } from '~/animations/cursor'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default {
  transition: {
    name: 'profile',
    mode: 'out-in',
    css: false,
    appear: true,
    beforeEnter(el) {
      gsap.set(el, {
        opacity: 0,
      })
    },
    enter(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      })
      tl.to(el, {
        opacity: 1,
        duration: 2,
      })
        .from(
          '.hero__image img',
          {
            duration: 1,
            scale: 1.2,
            ease: 'power2.out',
          },
          '-=2'
        )
        .from(
          '.span-overflow .ov-inner',
          {
            yPercent: 100,
            duration: 1,
            ease: 'power2.out',
          },
          '-=2'
        )
    },
    beforeLeave(el) {
      gsap.set('.c-exit', {
        zIndex: 30,
        top: 'unset',
        bottom: 0,
      })
      gsap.set('.exit-span', {
        opacity: 1,
      })
    },
    leave(el, done) {
      const tl = gsap.timeline({
        onComplete: done,
      })

      tl.to('.c-exit', {
        height: window.innerHeight,
        duration: 1.5,
        ease: 'Expo.easeInOut',
      })
        .set('.c-exit', {
          top: 0,
          bottom: 'unset',
        })
        .from(
          '.exit-span',
          {
            yPercent: 100,
            duration: 1,
            skewY: 5,
            stagger: {
              amount: 0.1,
            },
            ease: 'power2.out',
          },
          '-=.5'
        )
        .set(el, {
          opacity: 0,
        })
        .to('.exit-span', {
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
        })
        .to(
          '.c-exit',
          {
            height: 0,
            duration: 1.5,
            ease: 'Expo.easeInOut',
          },
          '-=1'
        )
    },
  },
  components: { AnimatedLink, Arrow, CircularLink, AnimatedArrow },
  mounted() {
    const worksRef = this.$refs.works
    this.beginCursor()

    this.initScrolltrigger()
    this.marqueeAnimation()
    this.heroImageAnimation()
    this.worksAnimation(worksRef)
    this.googleArtsAnimation()

    this.$nuxt.$emit('update-locomotive')
  },
  methods: {
    openModal() {
      this.$store.commit('updateModal', true)
    },
    optImg(url) {
      return optimizeCloudinaryImage(url)
    },
    beginCursor() {
      const cursorRef = this.$refs.cursor
      const cursor = new Cursor(cursorRef)
      ;[...document.querySelectorAll('a')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter())
        link.addEventListener('mouseleave', () => cursor.leave())
      })
      ;[...document.querySelectorAll('button')].forEach((link) => {
        link.addEventListener('mouseenter', () => cursor.enter())
        link.addEventListener('mouseleave', () => cursor.leave())
      })
    },
    initScrolltrigger() {
      const locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', ScrollTrigger.update)

      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y
        },
        scrollLeft(value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.x
        },

        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          }
        },
      })
    },
    marqueeAnimation() {
      gsap.to('.headline__text', {
        scrollTrigger: {
          trigger: '.c-profile__headline',
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top 90%',
          end: 'bottom 10%',
          // markers: true
        },
        xPercent: -50,
      })
    },
    googleArtsAnimation() {
      gsap.to('.google-arts span', {
        scrollTrigger: {
          trigger: '.google-arts',
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top 40%',
          end: 'bottom top',
          // markers: true
        },
        xPercent: -50,
      })
    },
    heroImageAnimation() {
      gsap.to('.hero__image img', {
        scrollTrigger: {
          trigger: '.c-profile__headline',
          scroller: this.$refs.scroller.locomotive.el,
          scrub: 1,
          start: 'top bottom',
          end: 'bottom center',
        },
        scale: 1.17,
        // ease: "none"
      })
      gsap.to('.hero__image', {
        scrollTrigger: {
          trigger: '.c-profile__headline',
          scroller: this.$refs.scroller.locomotive.el,
          scrub: true,
          start: 'top bottom',
          end: 'bottom center',
        },
        y: 20,
        // ease: "none"
      })
    },
    worksAnimation(container) {
      let isScrollForward = true
      const proxy = { skew: 0, bounce: 1 },
        skewSetter = gsap.quickSetter('.skew-image', 'skewX', 'deg'),
        // scaleSetter = gsap.quickSetter(".scaleEl", "scaleY"),
        clamp = gsap.utils.clamp(-30, 30)
      // scaleClamp = gsap.utils.clamp(0.95, 1.1);
      const timeline = gsap.timeline()
      const coachellaDesc = document.querySelector('.coachella__desc')
      const ctaButton = document.querySelector('.cta-button')
      const workSection = document.querySelector('.work__companies')

      const anim = gsap.to(container, {
        x: () => {
          return -(container.scrollWidth - innerWidth)
        },
        ease: 'none',
        overwrite: 'auto',
        scrollTrigger: {
          trigger: container,
          invalidateOnRefresh: true,
          scroller: this.$refs.scroller.locomotive.el,
          pin: true,
          scrub: 1,

          end: () => '+=' + (container.offsetWidth + innerWidth),

          onUpdate(self) {
            let skew = clamp(self.getVelocity() / -230)

            const direction = self.direction
            const snapDifference =
              self.progress * self.end - (self.end - window.innerWidth)

            if (isScrollForward) {
              if (snapDifference > window.innerWidth * 0.5) {
                window.innerWidth > 768 && self.scroll(self.end)
                isScrollForward = false
              }
            }

            if (
              direction === -1 &&
              snapDifference > window.innerWidth * 0.6 &&
              snapDifference < window.innerWidth * 0.9
            ) {
              const snapProgress =
                window.innerWidth / (container.scrollWidth - window.innerWidth)
              const differenceEndStart = self.end - self.start
              const snapDeduction = snapProgress * differenceEndStart

              window.innerWidth > 768 &&
                self.scroll(self.end - (snapDeduction + 2))

              setTimeout(() => {
                isScrollForward = true
              }, 1000)
            }

            if (Math.abs(skew) > Math.abs(proxy.skew)) {
              proxy.skew = skew
              // proxy.bounce = bounce;
              gsap.to(proxy, {
                skew: 0,
                duration: 0.7,
                ease: 'power3',
                overwrite: true,
                onUpdate: () => {
                  skewSetter(proxy.skew)
                  // scaleSetter(proxy.bounce);
                },
              })
            }
          },
          // markers: true
        },
      })

      // Get the scrolltrigger instance on the scroll animation
      const self = anim.scrollTrigger
      ctaButton.addEventListener('click', () => {
        const snapProgress =
          window.innerWidth / (container.scrollWidth - window.innerWidth)
        const differenceEndStart = self.end - self.start
        const snapDeduction = snapProgress * differenceEndStart

        self.scroll(self.start + snapDeduction + 50)
      })

      // Rotate the coachella circle as it enters/exits the viewport
      timeline.to(coachellaDesc, {
        rotate: '2deg',
        overwrite: 'auto',
        scrollTrigger: {
          scrub: 1,
          // markers: true,
          invalidateOnRefresh: true,
          scroller: this.$refs.scroller.locomotive.el,
          start: () =>
            container.scrollWidth -
            coachellaDesc.parentNode.offsetLeft -
            coachellaDesc.parentNode.getBoundingClientRect().width -
            coachellaDesc.getBoundingClientRect().width +
            20,
          end: () =>
            coachellaDesc.parentNode.offsetLeft -
            coachellaDesc.parentNode.getBoundingClientRect().width,
        },
      })

      // force 3D for performance
      gsap.set('.skew-image', {
        transformOrigin: 'right center',
        force3D: true,
      })

      // Update locomotive on resize
      ScrollTrigger.addEventListener('refresh', () => {
        this.$nuxt.$emit('update-locomotive')
      })

      ScrollTrigger.refresh()
    },
  },
}
</script>

<style lang="scss" scoped></style>
