<template>
  <loading 
  v-model:active="isLoading"
  :can-cancel="false"
  :background-color="fondobg"
  :opacity="opacidadbg"
  :color="coloricon"
  :loader="loader"
  :is-full-page="fullPage"/>
  <!-- Main content Start -->
  <div class="main-content">
    <!-- Breadcrumbs Start -->
    <div class="sc-breadcrumbs breadcrumbs-overlay">
      <div class="breadcrumbs-img-detalle">
        <img src="@/assets/images/upeabg2.jpg" alt="Breadcrumbs Image" />
      </div>
      <div class="breadcrumbs-text white-color">
        <h1 class="page-title">{{ tipo_conv.toLocaleLowerCase() }} detalle</h1>
        <ul>
          <router-link :to="{ name: 'home' }">
            <button class="btn-page mr-40">
              Home
            </button>
          </router-link> 
          <!--<li class="active tipo_text">{{ tipo_conv.toUpperCase() }}</li>-->
          <button class="btn-page">
            {{ tipo_conv.toUpperCase() }}
          </button>
        </ul>
      </div>
    </div>
    <!-- Breadcrumbs End -->

    <!-- Intro Courses -->
    <section class="sc-course-details pt-120 pb-70 md-pt-80 md-pb-40">
      <div class="container">
        <div class="row clearfix">
          <!-- Convocatorias Avisos Comunicados -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'convocatorias' ||
          tipo_conv.toLowerCase() == 'avisos' ||
          tipo_conv.toLowerCase() == 'comunicados'
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Convocatorias/' + this.Convocatoria.con_foto_portada" alt="img" />
              </div>
              <h3>{{ this.Convocatoria.con_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de inicio
                  <span>{{ dmy(this.Convocatoria.con_fecha_inicio) }}</span>
                </div>
                <!--<div class="event-time">
                  <i class="fa fa-clock-o"></i>
                  <span>12.30AM-05.30PM</span>
                </div>-->
                <div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Fecha final
                  <span>{{ dmy(this.Convocatoria.con_fecha_fin) }}</span>
                </div>
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Convocatoria.con_descripcion">                
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Cursos Seminarios -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'seminarios' ||
          tipo_conv.toLowerCase() == 'cursos' 
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Cursos/' + this.Curso.det_img_portada" alt="img" />
              </div>
              <h3>{{ this.Curso.det_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de inicio
                  <span>{{ dmy(this.Curso.det_fecha_ini) }}</span>
                </div>                
                <div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Fecha final
                  <span>{{ dmy(this.Curso.det_fecha_fin) }}</span>
                </div>
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Curso.det_descripcion">                                
              </div>
              <div class="desc mt-20 mb-30">
                <ul>
                  <li><p><b>Costo del Curso en general : </b> {{ this.Curso.det_costo }} Bs.</p></li>
                  <li><p><b>Costo del Curso para extrangeros : </b> {{ this.Curso.det_costo_ext }} Bs.</p></li>
                  <li><p><b>Costo del Curso para docentes : </b> {{ this.Curso.det_costo_profe }} Bs.</p></li>
                  <li><p><b>Cupo limitado para : </b> {{ this.Curso.det_cupo_max }} Personas</p></li>
                  <li><p><b>Cargar Horaria : </b> {{ this.Curso.det_carga_horaria }} Hrs.</p></li>
                  <li><p><b>Lugar del Curso : </b> {{ this.Curso.det_lugar_curso }}</p></li>
                  <li><p><b>Modalidad : </b> {{ this.Curso.det_modalidad }}</p></li>
                  <li><p><b>Enlace de grupo de WhatsApp : </b> <a href="{{ this.Curso.det_grupo_whatssap }}">Enlace del curso</a></p></li>                
                  <li><p><b>Costo del Curso: </b> {{ this.Curso.det_costo }} Bs.</p></li>
                </ul>
              </div>

              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>              
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Eventos -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'eventos'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img :src="url_api + '/Eventos/' + this.Evento.evento_imagen" alt="img" />
              </div>
              <h3>{{ this.Evento.evento_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de la actividad 
                  <span>{{ dmy(this.Evento.evento_fecha) }}</span>
                </div>
                <!--<div class="event-time">
                  <i class="fa fa-clock-o"></i>
                  <span>12.30AM-05.30PM</span>
                </div>-->
                <!--<div class="event-location">
                    <i class="fa fa-calendar"></i>
                  Lugar
                  <span>{{ dmy(this.Evento.evento_lugar) }}</span>
                </div>-->
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Evento.evento_descripcion">                
              </div>
              <div class="desc mt-20 mb-30">  
                <ul>
                  <li><b>Fecha del Evento</b>: {{ Evento.evento_fecha }}</li>
                  <li><b>Lugar del Evento</b>: {{ Evento.evento_lugar }}</li>
                  <li><b>Hora del Evento</b>: {{ Evento.evento_hora }}</li>
                  
                </ul>
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Videos -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'videos'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <iframe
                          :src="this.Video.video_enlace"
                          frameborder="0"
                          style="border-radius: 5px"
                />
              </div>
              <h3>{{ this.Video.video_titulo }}</h3>              
              <div class="desc mt-20 mb-30" v-html="this.Video.video_breve_descripcion">                
              </div>              
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Gacetas -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'gacetas'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div>
                <vue-pdf-embed
                          :source="url_api + '/Gaceta/' + this.Gaceta.gaceta_documento"
                          :page="1"
                />
              </div>
              <h3>{{ this.Gaceta.gaceta_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de la actividad 
                  <span>{{ dmy(this.Gaceta.gaceta_fecha) }}</span>
                </div>                
              </div>                         
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <a class="readon" :href="this.url_api+'/Gaceta/'+ this.Gaceta.gaceta_documento" target="_blank">Descargar PDF <i class="flaticon flaticon-right-arrow"></i> </a>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Publicaciones -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'publicaciones'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img
                  :src="url_api + '/Publicaciones/' + this.Publicacion.publicaciones_imagen"
                  alt="img"
                />
              </div>
              <h3>{{ this.Publicacion.publicaciones_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de la actividad 
                  <span>{{ dmy(this.Publicacion.publicaciones_fecha) }}</span>
                </div>                
              </div>              
              <div class="desc mt-20 mb-30">  
                <ul>
                  <p><b>Autor: </b>{{ this.Publicacion.publicaciones_autor }}</p>
                  <p v-html="this.Publicacion.publicaciones_descripcion"></p>
                </ul>
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Ofertas Academicas -->
          <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'ofertasacademicas'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img
                  :src="url_api + '/Carrera/OfertasAcademicas/' + this.OfertaAcademica.ofertas_imagen"
                  alt="img"
                />
              </div>
              <h3>{{ this.OfertaAcademica.ofertas_titulo }}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de Inicio 
                  <span>{{ dmy(this.OfertaAcademica.ofertas_inscripciones_ini) }}</span>                  
                </div>                
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de Final
                  <span>{{ dmy(this.OfertaAcademica.ofertas_inscripciones_fin) }}</span>                  
                </div>                
              </div>
              <div class="desc mt-20 mb-30" v-html="this.OfertaAcademica.ofertas_descripcion">                
              </div>
              <div class="desc mt-20 mb-30">  
                <ul>
                  <li><b>Fecha de Examen</b>: {{ dmy(this.OfertaAcademica.ofertas_fecha_examen) }}</li>                                    
                </ul>
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

           <!-- Servicios -->
           <div class="col-lg-8 md-mb-60" 
          v-if="
          tipo_conv.toLowerCase() == 'servicios'          
          "
          >
            <!-- Intro Info Tabs-->
            <div class="intro-info-tabs">
              <div class="post-img">
                <img
                          :src="url_api + '/Carrera/Servicios/' + this.Servicio.serv_imagen"
                          alt="img"
                        />
              </div>
              <h3>{{ this.Servicio.serv_nombre}}</h3>
              <div class="event-meta d-flex align-items-center">
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de Registro
                  <span>{{ dmy(this.Servicio.serv_registro) }}</span>                  
                </div>                
                <div class="event-date">
                  <i class="fa fa-calendar"></i>
                  Fecha de Actualizacion
                  <span>{{ dmy(this.Servicio.serv_update) }}</span>                  
                </div>
              </div>
              <div class="desc mt-20 mb-30" v-html="this.Servicio.serv_descripcion">                
              </div>
              <div class="desc mt-20 mb-30">  
                <ul>
                  <li><b>Celular</b>: {{ this.Servicio.serv_nro_celular }}</li>                                    
                </ul>
              </div>
              <h4><i class="fa fa-map-marker"></i> {{ Institucion.institucion_direccion }}</h4>
              <!--<iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>-->
              <div class="event-share d-flex align-items-center justify-content-between mt-20">
                <div
                  class="btn-part wow fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  <!--<a class="readon" href="about.html"
                    >Join Now <i class="flaticon flaticon-right-arrow"></i>
                  </a>-->
                </div>
                <!--<div class="share-icons">
                  <span>Comparte en tus redes sociales:</span>
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-google"></i></a>
                  <a href="#"><i class="fa fa-pinterest-p"></i></a>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Course Sidebar Start -->
          <div class="course-sidebar-area col-lg-4">
            <categories :tipo_cat="tipo_cat"></categories>
          </div>
          <!-- Course Sidebar End -->
        </div>
      </div>
    </section>    
  </div>
  <!-- Main content End -->
</template>
<script>
import Categories from '../../components/CategoriesComp.vue';
import Services from '@/services/Services'
import { mapState } from 'vuex'
import VuePdfEmbed from 'vue-pdf-embed'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CryptoJS from 'crypto-js'

export default {    
  name: 'ConvocatoriasDetalleView',
  data() {
    return {
      id: 0,
      tipo_conv: 'Upea',
      Convocatoria: [],
      Curso: [],
      Servicio: [],
      OfertaAcademica: [],
      Publicacion: [],
      Gaceta: [],
      Evento: [],
      Video: [],
      tipo_cat: 2,

      loader: 'bars',
      isLoading: true,
      fullPage: true,
      fondobg: '#C10202',
      opacidadbg: 1,
      coloricon: '#fff'
    }
  },
  components:{
    Categories,
    VuePdfEmbed,
    Loading
  },
  computed: {
    ...mapState(['url_api','Institucion',])
  },
  methods: {
    //optenemos los registros segun el tipo
    async getDetalleConvocatoria(id,tipo) {      
      this.tipo_conv = tipo
      this.id = id
      //console.log('parametro: ' + tipo_conv)
      //console.log('valor actual: ' + this.tipo_conv)
      try {
        if (this.tipo_conv != 'Upea') {
          switch (this.tipo_conv.toLowerCase()) {
            case 'avisos':
              await this.getConvocatoria(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'comunicados':
              await this.getConvocatoria(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'convocatorias':
              await this.getConvocatoria(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'cursos':
              await this.getCurso(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'seminarios':
              await this.getCurso(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'eventos':
              await this.getEvento(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'gacetas':
              await this.getGaceta(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'ofertasacademicas':
              await this.getOferta(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'publicaciones':
              await this.getPublicacion(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'servicios':
              await this.getServicio(id)
              setTimeout(() => {
                this.isLoading = false
              }, 1000)
              break
            case 'videos':
              await this.getVideo(id)
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
    async getConvocatoria(id) {
      try {
        const response = await Services.getConvocatoria(id)
        this.Convocatoria = response.data.Descripcion        
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las cursos de la tipo this.tipo
    async getCurso(id) {
      try {
        const response = await Services.getCurso(id)        
        this.Curso = response.data.Descripcion   
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las eventos de la tipo this.tipo
    async getEvento(id) {
      try {
        const response = await Services.getEvento(id)
        this.Evento = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las servicios de la tipo this.tipo
    async getServicio(id) {
      try {
        const response = await Services.getServicio(id)
        this.Servicio = response.data.Descripcion   
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getGaceta(id) {
      try {
        const response = await Services.getGaceta(id)
        this.Gaceta = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las gacetas de la tipo this.tipo
    async getOferta(id) {
      try {
        const response = await Services.getOferta(id)
        this.OfertaAcademica = response.data.Descripcion      
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las publicaciones de la tipo this.tipo
    async getPublicacion(id) {
      try {
        const response = await Services.getPublicacion(id)
        this.Publicacion = response.data.Descripcion
      } catch (e) {
        console.log(e)
      }
    },

    //optenemos todos los registros de las videos de la tipo this.tipo
    async getVideo(id) {
      try {
        const response = await Services.getVideo(id)
        this.Video = response.data.Descripcion
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

    decryptID(ciphertext) {
      const encryptionKey = 'UniversidadPublicaDeElAlto'; // Cambia esto por tu clave de encriptación
      const bytes = CryptoJS.AES.decrypt(ciphertext, encryptionKey);
      const decryptedID = bytes.toString(CryptoJS.enc.Utf8);
      return decryptedID;
    },
  },
  created() {    
    this.getDetalleConvocatoria(this.decryptID(this.$route.params.idconv),this.$route.params.tipo)        
  },
}
</script>
<style scoped>
@import '../css/ConvocatoriasDetalleView.css';
</style>
