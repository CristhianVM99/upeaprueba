<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
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
      <div class="breadcrumbs-img content-img-convocatorias">
        <img class="img-convocatorias" src="/imagenes/fondoupea5.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">
          {{ tipo_conv.toUpperCase() }} <br />
          VIGENTES <p v-if="(this.carrera_id!=0)">EN LA CARRERA</p><p v-if="(this.carrera_id==0)">DE LA UNIVERSIDAD</p>
        </h1>
        <ul>
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">Home</button>
          </router-link>
          <button class="btn-page">
            {{ tipo_conv.toUpperCase() }}
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 md-pt-80 md-pb-80 pl-40 pr-40">
      <div class="row">
        <div class="col-lg-9">
          <!-- Course Section Start -->
          <div id="sc-event-section" class="sc-event-section pb-50 md-pt-80 md-pb-70">
            <div class="box-swiper">
              <span class="span-swiper"></span>
              <div class="content-swiper">
                  <!-- Convocatorias -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="
                      tipo_conv.toLowerCase() == 'convocatorias' ||
                      tipo_conv.toLowerCase() == 'avisos' ||
                      tipo_conv.toLowerCase() == 'comunicados'
                    "
                  >
                    <swiper-slide
                      v-for="(conv, id_conv) in Convocatorias"
                      :key="id_conv"
                      :virtualIndex="id_conv"
                      class=""
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img
                              :src="url_api + '/Convocatorias/' + conv.con_foto_portada"
                              alt="img"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ conv.con_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i
                                >{{ dmy(conv.con_fecha_inicio) }}
                              </li>
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(conv.con_fecha_fin) }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: conv.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                                      idconv: encryptID(conv.idconvocatorias)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Cursos -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="
                      tipo_conv.toLowerCase() == 'seminarios' || tipo_conv.toLowerCase() == 'cursos'
                    "
                  >
                    <swiper-slide
                      v-for="(cur, id_cur) in Cursos"
                      :key="id_cur"
                      :virtualIndex="id_cur"
                      class="card-content"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img :src="url_api + '/Cursos/' + cur.det_img_portada" alt="img" />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ cur.det_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(cur.det_fecha_ini) }}
                              </li>
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(cur.det_fecha_fin) }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: cur.tipo_curso_otro.tipo_conv_curso_nombre.toLowerCase(),
                                      idconv: encryptID(cur.iddetalle_cursos_academicos)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <sin-registros></sin-registros>
                    </swiper-slide>
                  </swiper>
                  <!-- Servicios -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'servicios'"
                  >
                    <swiper-slide
                      v-for="(serv, id_serv) in Servicios"
                      :key="id_serv"
                      :virtualIndex="id_serv"
                      class="card-content"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img
                              :src="url_api + '/Carrera/Servicios/' + serv.serv_imagen"
                              alt="img"
                              width="300"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ serv.serv_nombre }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(serv.serv_registro) }}
                              </li>
                              <li class="event-date">
                                <i class="fa fa-phone"></i>{{ serv.serv_nro_celular }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(serv.serv_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Ofertas Academicas -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                   
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'ofertasacademicas'"
                  >
                    <swiper-slide
                      v-for="(ofer, id_ofer) in OfertasAcademicas"
                      :key="id_ofer"
                      :virtualIndex="id_ofer"
                      class="grid-conv-item"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img
                              :src="url_api + '/Carrera/OfertasAcademicas/' + ofer.ofertas_imagen"
                              alt="img"
                              width="200"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ ofer.ofertas_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i
                                >{{ dmy(ofer.ofertas_inscripciones_fin) }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(ofer.ofertas_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Publicaciones -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'publicaciones'"
                  >
                    <swiper-slide
                      v-for="(pub, id_pub) in Publicaciones"
                      :key="id_pub"
                      :virtualIndex="id_pub"
                      class="grid-conv-item"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img
                              :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen"
                              alt="img"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ pub.publicaciones_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i
                                >{{ dmy(pub.publicaciones_fecha) }}
                              </li>
                              <li class="event-date">Por: {{ pub.publicaciones_autor }}</li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(pub.publicaciones_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Gaceta -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'gacetas'"
                  >
                    <swiper-slide
                      v-for="(gac, id_gac) in Gacetas"
                      :key="id_gac"
                      :virtualIndex="id_gac"
                      class="grid-conv-item"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <vue-pdf-embed
                              :source="url_api + '/Gaceta/' + gac.gaceta_documento"
                              :page="1"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ gac.gaceta_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(gac.gaceta_fecha) }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(gac.gaceta_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Eventos -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="3"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'eventos'"
                  >
                    <swiper-slide
                      v-for="(ev, id_ev) in Eventos"
                      :key="id_ev"
                      :virtualIndex="id_ev"
                      class="grid-conv-item"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse">
                        <div class="events-item">
                          <div class="img-part">
                            <img :src="url_api + '/Eventos/' + ev.evento_imagen" alt="img" />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ ev.evento_titulo }}</h3>
                            <ul class="meta-part">
                              <li class="event-date">
                                <i class="fa fa-calendar-check-o"></i>{{ dmy(ev.evento_fecha) }}
                              </li>
                              <li class="event-date">
                                <i class="fa fa-map-marker"></i>{{ ev.evento_lugar }}
                              </li>
                            </ul>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(ev.evento_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <!-- Videos -->
                  <swiper
                    :modules="modules"
                    :slidesPerView="2"
                    :centeredSlides="true"
                    :spaceBetween="30"                    
                    :navigation="true"
                    :virtual="true"
                    :breakpoints="swiperOptions.breakpointsConvocatorias"
                    class="mySwiper grid-conv"
                    @swiper="setSwiperRef"
                    v-if="tipo_conv.toLowerCase() == 'videos'"
                  >
                    <swiper-slide
                      v-for="(vid, id_vid) in Videos"
                      :key="id_vid"
                      :virtualIndex="id_vid"
                      class="grid-conv-item"
                    >
                      <div class="col-lg-12 mb-30 loadcourse addcourse slide-videos">
                        <div class="events-item">
                          <div class="img-part">
                            <iframe
                              :src="vid.video_enlace"
                              frameborder="0"
                              style="border-radius: 5px"
                              class="video-slide"
                            />
                            <div class="event-price">
                              <span class="price">{{ tipo_conv }}</span>
                            </div>
                          </div>
                          <div class="content-part">
                            <h3 class="title">{{ vid.video_titulo }}</h3>
                            <div
                              class="bottom-part d-flex align-items-center justify-content-center"
                            >
                              <div class="">
                                <router-link
                                  :to="{
                                    name: 'convocatoriadetalle',
                                    params: {
                                      tipo: tipo_conv.toLowerCase(),
                                      idconv: encryptID(vid.video_id)
                                    }
                                  }"
                                  class="btn-conv"
                                >
                                  <span>Leer Mas</span>
                                </router-link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </swiper-slide>
                  </swiper>
              </div>
            </div>
          </div>

          <!-- Course Section End -->
        </div>
        <div class="col-lg-3 col-md-12 md-mt-60">
          <categories :tipo_cat="tipo_cat"></categories>
        </div>
      </div>
    </div>
    <!-- Blog Single End -->
  </div>
  <!-- Main content End -->
</template>
<script>
import Services from '@/services/Services'
import Categories from '../../components/CategoriesComp.vue'
import { mapState } from 'vuex'

import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/virtual'

import VuePdfEmbed from 'vue-pdf-embed'

// import Swiper core and required modules
import { Pagination, Navigation, Virtual } from 'swiper'
import SinRegistros from '../../pages/SinRegistros.vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CryptoJS from 'crypto-js'
export default {
  name: 'ConvocatoriasView',
  data() {
    return {
      tipo_conv: 'Upea',
      Convocatorias: [],
      Cursos: [],
      Servicios: [],
      OfertasAcademicas: [],
      Publicaciones: [],
      Gacetas: [],
      Eventos: [],
      Videos: [],
      tipo_cat: 1,

      loader: 'bars',
      isLoading: false,
      fullPage: true,
      fondobg: '#C10202',
      opacidadbg: 1,
      coloricon: '#fff',
      swiperOptions: {
          breakpointsConvocatorias: {       
            360: {       
              slidesPerView: 1,
              spaceBetween: 20,  
            },          
            770: {       
              slidesPerView: 2,       
              spaceBetween: 25,     
            },   
            1366: {       
              slidesPerView: 3,       
              spaceBetween: 30,     
            } 
          },                 
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    VuePdfEmbed,
    Categories,
    SinRegistros,
    Loading
  },
  setup() {
    // Create array with 500 slides
    const slides = ref(Array.from({ length: 500 }).map((_, index) => `Slide ${index + 1}`))
    let swiperRef = null
    let appendNumber = 500
    let prependNumber = 1

    const setSwiperRef = (swiper) => {
      swiperRef = swiper
    }
    const slideTo = (index) => {
      swiperRef.slideTo(index - 1, 0)
    }
    const append = () => {
      slides.value = [...slides.value, 'Slide ' + ++appendNumber]
    }
    const prepend = () => {
      slides.value = [`Slide ${prependNumber - 2}`, `Slide ${prependNumber - 1}`, ...slides.value]
      prependNumber -= 2
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0)
    }
    return {
      slides,
      swiperRef: null,
      appendNumber,
      prependNumber,
      setSwiperRef,
      slideTo,
      append,
      prepend,
      modules: [Pagination, Navigation, Virtual]
    }
  },
  computed: {
    ...mapState(['url_api','carrera_id'])
  },
  methods: {
    encryptID(id) {
      const encryptionKey = 'UniversidadPublicaDeElAlto'; // Cambia esto por tu clave de encriptación
      const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString();
      return ciphertext;
    },  
    //optenemos los registros segun el tipo
    async getCategoria(tipo_conv) {
      this.isLoading = true
      this.tipo_conv = tipo_conv
      try {
        if (this.tipo_conv != 'Upea') {
          switch (this.tipo_conv.toLowerCase()) {
            case 'avisos':
              await this.getConvocatoriasAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'comunicados':
              await this.getConvocatoriasAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'convocatorias':
              await this.getConvocatoriasAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'cursos':
              await this.getCursosAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'seminarios':
              await this.getCursosAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'eventos':
              await this.getEventosAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'gacetas':
              await this.getGacetasAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'ofertasacademicas':
              await this.getOfertasAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'publicaciones':
              await this.getPublicacionesAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'servicios':
              await this.getServiciosAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'videos':
              await this.getVideosAll()
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            default:
              console.log('error de carga')
          }
        }
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las convocactorias de la tipo this.tipo
    async getConvocatoriasAll() {
      try {
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = []
        response.data.forEach((conv) => {
          if (
            conv.con_estado == '1' &&
            conv.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo_conv.toUpperCase()
          ) {
            this.Convocatorias.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las cursos de la tipo this.tipo
    async getCursosAll() {
      try {
        const response = await Services.getCursosAll()
        this.Cursos = []
        //console.log('cursos')
        //console.log(response)
        response.data.forEach((conv) => {
          if (
            conv.tipo_curso_otro.tipo_conv_curso_estado == '1' &&
            conv.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo_conv.toUpperCase()
          ) {
            this.Cursos.push(conv)
          }
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las eventos de la tipo this.tipo
    async getEventosAll() {
      try {
        const response = await Services.getEventos()
        this.Eventos = []
        response.data.forEach((conv) => {
          this.Eventos.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las servicios de la tipo this.tipo
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Servicios = []
        response.data.forEach((conv) => {
          this.Servicios.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getGacetasAll() {
      try {
        const response = await Services.getGacetaAll()
        this.Gacetas = []
        response.data.forEach((conv) => {
          this.Gacetas.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.OfertasAcademicas = []
        response.data.forEach((conv) => {
          this.OfertasAcademicas.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las publicaciones de la tipo this.tipo
    async getPublicacionesAll() {
      try {
        const response = await Services.getPublicaciones()
        this.Publicaciones = []
        response.data.forEach((conv) => {
          this.Publicaciones.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    async getPublicacionesAllUPEA() {
      try {
        const response = await Services.getPublicacionesUpea()
        this.Publicaciones = []
        response.data.forEach((conv) => {
          this.Publicaciones.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las videos de la tipo this.tipo
    async getVideosAll() {
      try {
        const response = await Services.getVideos()
        this.Videos = []
        response.data.forEach((conv) => {
          this.Videos.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },

    //formateamos las fechas a la correcta para el usuario.
    dmy(fecha) {
      const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
      ]
      let fechaCadena = fecha.substr(0, 10)
      let fechaArray = fechaCadena.split('-')
      return fechaArray[2] + ' de ' + meses[fechaArray[1] - 1] + ' de ' + fechaArray[0]
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

  created() {
    this.getCategoria(this.$route.params.tipo)
  },
  updated() {
    if (this.$route.params.tipo != this.tipo_conv) {
      this.isLoading = true
      this.getCategoria(this.$route.params.tipo)
    }
  },
  mounted() {
    this.scrollToTop();
  },
}
</script>
<style scoped>
@import '../css/ConvocatoriasView.css';
</style>
