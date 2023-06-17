<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :on-cancel="false"
    :background-color="fondobg"
    :opacity="opacidadbg"
    :color="coloricon"
    :loader="loader"
    :is-full-page="fullPage"
  />
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img contact-content-video-main">
        <video class="contact-content-video" autoplay muted loop id="bg-video">
           <source src="@/assets/video/upea.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="breadcrumbs-text white-color breadcrumbs-text-content">
        <h1 class="page-title">Contacto</h1>
        <ul>
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">Home</button>
          </router-link>
          <button class="btn-page">contacto</button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Contact Section Start -->
    <div class="contact-page-section pt-120 pb-120 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row contact-address-section">
          <div class="col-lg-12 lg-pl-0 md-mb-30">
            <div class="contact-info contact-address mb-20 contact-content-primero">
              <div class="icon-part sky-color">
                <i class="flaticon flaticon-call"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Celulares y Telefonos</h5>
                <ul>
                  <li>
                    <span>Celular 1: </span
                    ><span class="content-part-item">(+591) {{ Institucion.institucion_celular1 }}</span>
                  </li>
                  <li>
                    <span>Celular 2: </span
                    ><span class="content-part-item">(+591) {{ Institucion.institucion_celular2 }}</span>
                  </li>
                  <li>
                    <span>Telefono 1: </span
                    ><span class="content-part-item"> (+591) {{ Institucion.institucion_telefono1 }}</span>
                  </li>
                  <li>
                    <span>Telefono 2: </span
                    ><span class="content-part-item"> (+591) {{ Institucion.institucion_telefono2 }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 md-mb-30">
            <div class="contact-info contact-mail mb-20 contact-content-segundo">
              <div class="icon-part">
                <i class="flaticon flaticon-mail"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Correos Electronicos</h5>
                <ul>
                  <li>
                    <span>Email 1: </span>
                    <span class="content-part-item">{{ Institucion.institucion_correo1 }}</span>
                  </li>
                  <li>
                    <span>Email 2: </span>
                    <span class="content-part-item">{{ Institucion.institucion_correo2 }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-12 lg-pr-0">
            <div class="contact-info contact-phone contact-content-tercero">
              <div class="icon-part yellow-color">
                <i class="flaticon flaticon-maps-and-flags"></i>
              </div>
              <div class="content-part">
                <h5 class="info-subtitle">Redes Sociales</h5>
                <div class="address-des">
                  <ul>
                    <li>
                      <span>Facebook: </span>
                      <a :href="Institucion.institucion_facebook" target="_blank"  class="content-part-item">{{ Institucion.institucion_facebook }}</a>
                    </li>
                    <li>
                      <span>Twitter: </span>
                      <a :href="Institucion.institucion_twitter" target="_blank"  class="content-part-item">{{ Institucion.institucion_twitter }}</a>
                    </li>
                    <li>
                      <span>Youtube: </span>
                      <a :href="Institucion.institucion_youtube" target="_blank"  class="content-part-item">{{ Institucion.institucion_youtube }}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- CTA Section Start -->
      <div
        class="sc-cta-section cta-bg-image4 right-bg-image pt-110 pb-120 md-pt-75 md-pb-80 position-relative arrow-animation-1"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
              <div class="sec-title">
                <div class="sub-title position-relative">
                  upea<span class="heading-border-line"></span>
                </div>
                <h2 class="title mb-0 white-color">
                  La UPEA es una universidad que trabaja por una sociedad más justa, equitativa y
                  solidaria a través de la formación de líderes
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="../assets/images/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="../assets/images/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="../assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="../assets/images/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-6 animated-arrow left-right-new">
          <img src="../assets/images/arrow-7.png" alt="" />
        </div>
      </div>
      <!-- CTA Section End -->
      <div class="map-card">
        <div class="map-tools">
          <div class="map-circle">
            <span class="map-red map-box"></span>
          </div>
          <div class="map-circle">
            <span class="map-yellow map-box"></span>
          </div>
          <div class="map-circle">
            <span class="map-green map-box"></span>
          </div>
        </div>
        <div class="map-card__content">
          <div class="">
            <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
            <iframe
              :src="Institucion.institucion_api_google_map"
              width="100%"
              height="500px"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Section End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  name: 'ContactView',
  data() {
    return {
      loader: 'bars',
      isLoading: false,
      fullPage: true,
      fondobg: '#C10202',
      opacidadbg: 1,
      coloricon: '#fff'
    }
  },
  computed: {
    ...mapState(['url_api', 'Institucion'])
  },
  components: {
    Loading
  },
  methods: {
    async createdComponent() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  },
  created() {
    this.createdComponent()
  }
}
</script>
<style>
@import './css/ContacView.css';
</style>
