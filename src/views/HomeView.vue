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
    <!--========================= PARA LA UNIVERSIDAD PUBLICA DE EL ALTO ================-->
    <div class="bg-principal-slide-content-main" v-if="this.carrera_id == 0">
      <!-- Banner Section Start -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 12000,
          disableOnInteraction: false
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        class="mySwiper bg-principal-slide-content-upea"
        v-if="this.carrera_id == 0"
      >
        <swiper-slide class="bg-principal-slide">
          <div class="bg-principal-content-upea">
            <video autoplay muted loop id="bg-video" class="bg-principal-video-upea">
              <source src="@/assets/video/upea.mp4" type="video/mp4" />
            </video>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <img src="@/assets/images/upeabg3.jpg" alt="" class="bg-principal-img-upea" />
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <div class="bg-principal-content-upea">
            <video autoplay muted loop id="bg-video" class="bg-principal-video-upea">
              <source src="@/assets/video/videoplayback.mp4" type="video/mp4" />
            </video>
          </div>
        </swiper-slide>
        <swiper-slide class="bg-principal-slide">
          <img src="@/assets/images/upeabg3.jpg" alt="" class="bg-principal-img-upea" />
        </swiper-slide>
      </swiper>

      <!-- Banner Section End -->
      <div
        id="sc-banner"
        class="upposition-relative bg-principal-view-upea"
        v-if="this.carrera_id == 0"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="red-social">
                <ul class="wrapper-social">
                  <li class="icon-social facebook-social">
                    <span class="tooltip-social">Facebook</span>
                    <a :href="Institucion.institucion_facebook" target="_blank">
                      <span><i class="fa fa-facebook"></i></span>
                    </a>
                  </li>
                  <li class="icon-social twitter-social">
                    <span class="tooltip-social">Twitter</span>
                    <a :href="Institucion.institucion_twitter" target="_blank">
                      <span><i class="fa fa-twitter"></i></span>
                    </a>
                  </li>
                  <li class="icon-social instagram-social">
                    <span class="tooltip-social">Youtube</span>
                    <a :href="Institucion.institucion_youtube" target="_blank">
                      <span><i class="fa fa-youtube"></i></span>
                    </a>
                  </li>
                </ul>
              </div>
              <img src="@/assets/images/upea.png" class="content-card-inner-logo" />
              <div class="container-principa-upea">
                <div class="box-upea">
                  <span></span>
                  <div class="content-upea">
                    <div
                      class="sub-title wow position-relative mb-8 fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="2000ms"
                    >
                      {{ Institucion.institucion_iniciales }}
                      <span class="heading-border-line"></span>
                    </div>

                    <h1
                      class="banner-title mb-15 wow fadeInUp inst-nombre"
                      data-wow-delay="300ms"
                      data-wow-duration="2500ms"
                    >
                      {{ Institucion.institucion_nombre }}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 hidden-md">
              <div class="banner-img hidden-sm img-principal-upea-rector">
                <!--<img
                  class="wow fadeInRight logo-animacion"
                  src="/src/assets/images/fondologoupea.png"
                  alt="Banner Image"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                />-->
              </div>
              <img src="/src/assets/images/fondologoupea.png" class="logo-animacion" />
              <!--<div
              class="view-students-img wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
            >
              <img src="src/assets/images/banner/view-students.png" alt="Banner Image" />
            </div>
            -->
              <div class="animate-circle"></div>
            </div>
          </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div class="animated-arrow-5 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-5.png" alt="" />
        </div>
        <div class="animated-arrow-7 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-6.png" alt="" />
        </div>
        <div class="animated-arrow-8 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-7.png" alt="" />
        </div>
        <div class="animated-arrow-9 animated-arHistoria administracion de empresasrow up-down-new">
          <img src="@/assets/images/banner/arrow-8.png" alt="" />
        </div>
        <div class="animated-arrow-10 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
        <div class="animated-arrow-11 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
      </div>
    </div>

    <div class="bg-principal-slide-content-second"
    v-if="(this.carrera_id!=0)"
    >
      <!-- ======================== PARA LAS CARRERAS =================-->
      <!-- Banner Section Start -->
      <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :modules="modules"
        class="mySwiper bg-principal-slide-content"
        v-if="this.carrera_id != 0"
      >
        <swiper-slide
          v-for="(portada, id_img) in Institucion.portada"
          :key="id_img"
          class="bg-principal-slide"
        >
          <div class="bg-principal-content">
            <img
              class="bg-img bg-principal-img"
              :src="this.url_api + '/InstitucionUpea/Portada/' + portada.portada_imagen"
              alt="{{ id_img }}"
            />
          </div>
        </swiper-slide>
      </swiper>
      <!-- Banner Section End -->
      <!--<div
        id="sc-banner"
        class="sc-banner banner-style3 bg-principal-view"
        v-if="this.carrera_id != 0"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-6 box-p">
              <span></span>
              <div class="banner-content content-p">
                <div
                  class="sub-title wow position-relative mb-8 fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                >
                  {{ Institucion.institucion_iniciales }}
                  <span class="heading-border-line"></span>
                </div>

                <h1
                  class="banner-title mb-15 wow fadeInUp inst-nombre"
                  data-wow-delay="300ms"
                  data-wow-duration="2500ms"
                >
                  {{ Institucion.institucion_nombre }}
                </h1>                
              </div>
            </div>
            <div class="col-lg-6 hidden-md">
              <div class="banner-img hidden-sm">
                <img
                  class="wow fadeInRight"
                  src="@/assets/images/banner/banner-image3.png"
                  alt="Banner Image"
                  data-wow-delay="300ms"
                  data-wow-duration="2000ms"
                />
              </div>
              <div class="animate-circle"></div>
            </div>
          </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div class="animated-arrow-5 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-5.png" alt="" />
        </div>
        <div class="animated-arrow-7 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-6.png" alt="" />
        </div>
        <div class="animated-arrow-8 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-7.png" alt="" />
        </div>
        <div class="animated-arrow-9 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-8.png" alt="" />
        </div>
        <div class="animated-arrow-10 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
        <div class="animated-arrow-11 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
      </div>-->

      <!-- Banner Section Start -->
      <div id="sc-banner" class="sc-banner banner-bg3 position-relative principal-carreras-banner">
        <div class="container">
          <div class="row">
            <div class="box-carreras-banner">
              <span class="span-carreras-banner"></span>
              <div class="content-carreras-banner">
                <div class="col-lg-6">
                  <div class="banner-content-carreras">
                    <div
                      class="sub-title wow position-relative mb-8 fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="2000ms"
                    >
                      {{ Institucion.institucion_iniciales }}
                      <span class="heading-border-line"></span>
                    </div>
                    <h1
                      class="banner-title mb-15 wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="2500ms"
                    >
                      {{ Institucion.institucion_nombre }}
                    </h1>
                  </div>
                </div>                
              </div>              
            </div>
            <div class="col-lg-6 hidden-md">
                  <div class="banner-img hidden-sm">
                    <img
                      class="wow fadeInRight"
                      src="@/assets/images/banner/banner-image3.png"
                      alt="Banner Image"
                      data-wow-delay="300ms"
                      data-wow-duration="2000ms"
                    />
                  </div>
                  <div class="animate-circle"></div>
                </div>
          </div>
        </div>
        <div class="animated-arrow-1 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-1.png" alt="" />
        </div>
        <div class="animated-arrow-2 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-2.png" alt="" />
        </div>

        <div class="animated-arrow-3 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-3.png" alt="" />
        </div>
        <div class="animated-arrow-4 animated-arrow left-right-new">
          <img src="@/assets/images/banner/arrow-4.png" alt="" />
        </div>
        <div class="animated-arrow-5 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-5.png" alt="" />
        </div>
        <div class="animated-arrow-7 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-6.png" alt="" />
        </div>
        <div class="animated-arrow-8 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-7.png" alt="" />
        </div>
        <div class="animated-arrow-9 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-8.png" alt="" />
        </div>
        <div class="animated-arrow-10 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
        <div class="animated-arrow-11 animated-arrow up-down-new">
          <img src="@/assets/images/banner/arrow-9.png" alt="" />
        </div>
      </div>
      <!-- Banner Section End -->
    </div>

    <!-- ===================== CARRERAS ==============-->
    <swiper
      :spaceBetween="30"
      :freeMode="true"
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpointsCarrera"
      class="mySwiper swiper-carreras"
      v-if="this.carrera_id == 0"
      ref="swiper"
      name="swiperCarreras"
    >
      <swiper-slide v-for="(carrera, id_carrera) in this.Carreras" :key="id_carrera">
        <div class="box-carreras">
          <span></span>
          <div class="content-carreras">
            <a
              :href="`http://${carrera.nombre_simple.toLowerCase()}.upea.edu.bo/`"
              target="_blank"
              v-for="(logo, logo_id) in carrera.logos"
              :key="logo_id"
            >
              <img
                :src="url_api + '/Carrera/Logos/' + logo.logos_carrera"
                alt="img"
                class="carrera_logos"
              />
            </a>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Blog Single Start -->
    <div class="sc-blog-single pt-120 pb-120 md-pt-80 md-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="blog-deatails">
              <div class="post-img">
                <iframe
                  :src="Institucion.institucion_link_video_vision"
                  frameborder="0"
                  style="width: 100%; min-height: 400px"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>
              <div class="blog-full">
                <div class="blog-desc">
                  <h4 class="title_home">{{ Institucion.institucion_nombre }}</h4>
                  <p
                    id="content_home"
                    :class="{
                      'texto-limitado': !mostrarCompleto,
                      'texto-completo': mostrarCompleto
                    }"
                    v-html="Institucion.institucion_sobre_ins"
                  ></p>
                  <span class="readon" @click="cambiarTamanoTexto"
                    >{{ mostrarCompleto ? 'Disminuir texto' : 'Expandir texto' }}
                    <i class="flaticon flaticon-right-arrow"></i>
                  </span>
                </div>
                <blockquote>
                  <p>
                    La Universidad Pública de El Alto no solo forma profesionales altamente
                    capacitados en diversas áreas del conocimiento, sino que también es un espacio
                    de encuentro y diálogo intercultural, donde se fomenta el respeto y la
                    valoración de la diversidad de saberes y culturas
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12 md-mt-60">
            <div class="widget-area">
              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">MISIÓN</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_mision"></p>
                  </div>
                </div>
              </div>

              <div class="recent-posts-widget mb-50">
                <h3 class="widget-title">VISIÓN</h3>
                <div class="show-featured">
                  <div class="post-desc">
                    <p v-html="Institucion.institucion_vision"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Single End -->

    <!-- Categories Section Start -->
    <div
      id="sc-categories"
      class="sc-categories style1 pt-0 pb-110 md-pt-75 md-pb-50"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="sec-title mb-30 md-mb-10">
          <div class="sub-title position-relative">
            links de la carrera <span class="heading-border-line"></span>
          </div>
          <h2 class="title mb-0">Links Externos</h2>
        </div>
        <swiper
          :slidesPerView="4"
          :spaceBetween="30"
          :breakpoints="swiperOptions.breakpointsComunicados"
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide v-for="(link, id_link) of Links" :key="id_link">
            <div class="widget-archives mb-50">
              <ul>
                <li class="links_externos">
                  <img
                    :src="url_api + '/InstitucionUpea/LinksExternos/' + link.ei_imagen"
                    alt=""
                    class="links_externos_img"
                  />
                  <a :href="link.ei_link" target="_blank" class="links_externos_link">{{
                    link.ei_nombre
                  }}</a>
                </li>
              </ul>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Categories Section End -->

    <!-- Blog Section Start -->
    <div
      id="sc-blog"
      class="sc-blog comunicados-bg main-home pb-110 pt-120 md-pb-70 md-pt-80"
      v-if="this.carrera_id == 0"
    >
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary">UPEA</div>
          <h2 class="title mb-0 title-comunicados-upea">Comunicados Universitarios...</h2>
        </div>
        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          :breakpoints="swiperOptions.breakpointsComunicados"
        >
          <swiper-slide
            v-for="(pub, id_pub) in PublicacionesCarreras"
            :key="id_pub"
            class="swiper-comunicados-carreras"
          >
            <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="blog-item">
                <div class="image-part content-carreras_publicaciones_img">
                  <img
                    :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen"
                    alt="img"
                    class="carreras_publicaciones_img"
                  />
                </div>
                <div class="blog-content">
                  <ul class="blog-meta">
                    <li><i class="fa fa-user-o"></i> {{ pub.publicaciones_tipo }}</li>
                    <li><i class="fa fa-calendar"></i>{{ dmy(pub.publicaciones_fecha) }}</li>
                  </ul>
                  <h3 class="title">{{ pub.publicaciones_titulo }}</h3>
                  <div class="btn-btm">
                    <div class="rs-view-btn">
                      <router-link
                        :to="{
                          name: 'convocatoriadetalle',
                          params: {
                            tipo: 'publicaciones',
                            idconv: encryptID(pub.publicaciones_id)
                          }
                        }"
                        >Leer Mas</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- About Section Start -->
    <div
      id="sc-about"
      class="sc-about about-style2 pt-120 pb-120 md-pt-80 md-pb-70"
      v-if="this.carrera_id == 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <div class="img-part position-relative img-historia-upea">
              <img class="" src="@/assets/images/about/upea.jpg" alt="About Image" />
              <a class="popup-videos-button" href="https://youtu.be/mnER0a9GbSQ" target="_blank">
                <i class="fa fa-play"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-7 md-mt-50 pl-45 md-pl-15">
            <div class="sec-title mb-35">
              <div class="sub-title position-relative">
                Historia <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20">
                Desafiando Barreras<br />"La Lucha Imparable de la Universidad Pública de El Alto"
              </h2>
              <div class="des mb-20">
                La UPEA es conocida por ser una universidad pública que brinda educación superior a
                estudiantes de diversas áreas académicas. Las protestas que se han llevado a cabo en
                esta universidad suelen estar relacionadas con demandas estudiantiles, como mejoras
                en la infraestructura, aumento del presupuesto destinado a la educación, incremento
                de becas y apoyos estudiantiles, entre otros temas.
                <br />
                En varias ocasiones, las manifestaciones han escalado en intensidad, dando lugar a
                enfrentamientos entre los estudiantes y las fuerzas de seguridad. Estas situaciones
                han generado momentos de tensión y, en algunos casos, han resultado en heridos y
                detenciones.
                <br />
                La lucha de la Universidad Pública de El Alto ha sido un reflejo de la búsqueda de
                mejoras y condiciones adecuadas para la educación superior en Bolivia, así como de
                la defensa de los derechos estudiantiles.
              </div>
            </div>
            <div
              class="btn-part wow fadeInUp"
              data-wow-delay="300ms"
              data-wow-duration="2000ms"
              v-if="this.carrera_id == 0"
            >
              <router-link :to="{ name: 'about' }" class="readon"
                >Leer mas <i class="flaticon flaticon-right-arrow"></i
              ></router-link>
            </div>
          </div>
        </div>
        <img class="up-down-new" src="@/assets/images/about/shap_image.png" alt="" />
      </div>
    </div>
    <!-- About Section End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image4 cta md-pt-75 md-pb-80 position-relative arrow-animation-1"
      v-if="this.carrera_id == 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="sc-gallery-section pt-120 pb-60 md-pt-80 md-pb-80">
            <div class="container">
              <div class="row">
                <div class="col-lg-3 col-md-6 loadcourse addcourse mb-30">
                  <div class="gallery-item">
                    <img
                      class="medios-img-png"
                      src="@/assets/images/testimonial/investigacionlogo.jpg"
                      alt=""
                    />
                    <img
                      class="medios-img"
                      src="@/assets/images/testimonial/invetigacionfondo.jpg"
                      alt="Gallery Image"
                    />
                  </div>
                  <div id="loadmore" class="text-center mt-10">
                    <a class="readon" href="https://dicyt.upea.bo/" target="_blank"
                      >Ver mas <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 loadcourse addcourse mb-30">
                  <div class="gallery-item">
                    <img
                      class="medios-img"
                      src="@/assets/images/testimonial/upeatelevisio3.jpg"
                      alt="Gallery Image"
                    />
                  </div>
                  <div id="loadmore" class="text-center mt-10">
                    <a class="readon" href="https://videoteka.upea.bo/" target="_blank"
                      >Ver mas <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 loadcourse addcourse mb-30">
                  <div class="gallery-item">
                    <img
                      class="medios-img"
                      src="@/assets/images/testimonial/upearadio.jpg"
                      alt="Gallery Image"
                    />
                  </div>
                  <div id="loadmore" class="text-center mt-10">
                    <a class="readon" href="http://fm100.upea.bo/l" target="_blank"
                      >Ver mas <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6 addcourse mb-30">
                  <div class="gallery-item">
                    <img class="medios-img-png" src="@/assets/images/fondologoupea.png" alt="" />
                    <img
                      class="medios-img"
                      src="@/assets/images/testimonial/upeabiblioteca.jpg"
                      alt="Gallery Image"
                    />
                  </div>
                  <div id="loadmore" class="text-center mt-10">
                    <a class="readon" href="https://biblioteca.upea.bo/" target="_blank"
                      >Ver mas <i class="flaticon flaticon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image3 cta md-pt-75 md-pb-80 position-relative arrow-animation-1 content-cta"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative cta-span">
                Frases <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color cta-text">
                "En la Universidad Pública de El Alto formamos profesionales con un compromiso ético
                y social para transformar nuestra sociedad."
              </h2>
            </div>
          </div>
          <div class="col-lg-6 hidden-md">
            <div class="img-part cta-img">
              <img src="/bgPerson.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- Counter Section Start -->
    <div
      class="sc-counter categoria-content pt-120 pb-120 md-pt-80 md-pb-50 sc-counter-bg position-relative arrow-animation-1"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              v-for="(conv, id_conv) of this.MenuConvocatorias"
              :key="id_conv"
              :to="{
                name: 'convocatorias',
                params: {
                  tipo: conv.tipo_conv_comun_titulo.toLowerCase()
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-study"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ contarConv(conv.tipo_conv_comun_titulo) }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">{{ conv.tipo_conv_comun_titulo }}</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              v-for="(cur, id_cur) of MenuCursos"
              :key="id_cur"
              :to="{
                name: 'cursos',
                params: {
                  tipo: cur.tipo_conv_curso_nombre.toLowerCase()
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-teacher"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ contarCur(cur.tipo_conv_curso_nombre) }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">{{ cur.tipo_conv_curso_nombre }}</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'eventos',
                params: {
                  tipo: 'eventos'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-apartment"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Eventos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">EVENTOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              :to="{
                name: 'servicios',
                params: {
                  tipo: 'servicios'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-computer"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Servicios.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">SERVICIOS</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'ofertasacademicas',
                params: {
                  tipo: 'ofertasacademicas'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-book"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Gacetas.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">GACETA</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'videos',
                params: {
                  tipo: 'videos'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-play"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Videos.length }} </span><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">VIDEOS</h5>
              </div>
            </router-link>
          </div>
          <div class="col-lg-3 col-md-6 md-mb-30">
            <router-link
              :to="{
                name: 'ofertasacademicas',
                params: {
                  tipo: 'ofertasacademicas'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-shopping-bag"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Ofertas.length }}</span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">OFERTAS ACADEMICAS</h5>
              </div>
            </router-link>
            <router-link
              :to="{
                name: 'publicaciones',
                params: {
                  tipo: 'publicaciones'
                }
              }"
            >
              <div class="counter-item text-center cat">
                <div class="icon-part">
                  <i class="flaticon flaticon-monitor"></i>
                </div>
                <h2 class="counter-title">
                  <span class="sc-count">{{ Publicaciones.length }} </span
                  ><span class="text">+</span>
                </h2>
                <h5 class="title mb-0">PUBLICACIONES</h5>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-5.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-4.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- Counter Section End -->

    <!-- Team Section Start -->
    <div
      class="sc-team team-style-1 gray-bg arrow-animation-1 position-relative pt-110 pb-90 md-pt-70 md-pb-50 content-autoridades-upea"
    >
      <div class="">
        <div class="sec-title mb-30 text-center md-mb-10">
          <div class="sub-title primary">Autoridades<span class="heading-border-line"></span></div>
          <h2 class="title mb-0">Nuestras Autoridades</h2>
        </div>
        <swiper
          :slidesPerView="2"
          :spaceBetween="30"
          :pagination="{
            clickable: true
          }"
          :modules="modules"
          :breakpoints="swiperOptions.breakpointsAutoridades"
          class="mySwiper swiper-autoridades"
        >
          <swiper-slide v-for="(autoridad, id_aut) of Institucion.autoridad" :key="id_aut">
            <div class="col-lg-12 team-inner-item autoridades-target">
              <div class="team-wrap">
                <div class="team-img">
                  <img
                    :src="url_api + '/InstitucionUpea/Autoridad/' + autoridad.foto_autoridad"
                    alt="img"
                    class="img_swiper"
                  />
                  <ul class="team-social wrapper">
                    <li class="icon facebook">
                      <a :href="autoridad.facebook_autoridad" target="_blank" class="social-icon">
                        <span class="tooltip">Facebook</span>
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li class="icon whatsapp">
                      <a
                        :href="'https://wa.me/+' + autoridad.celular_autoridad"
                        target="_blank"
                        class="social-icon"
                      >
                        <span class="tooltip">WhatsApp</span>
                        <i class="fa fa-whatsapp"></i>
                      </a>
                    </li>
                    <li class="icon twitter">
                      <a :href="autoridad.twiter_autoridad" target="_blank" class="social-icon">
                        <span class="tooltip">Twitter</span>
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="team-item-text">
                  <div class="team-details">
                    <h3 class="team-name">
                      <h4>{{ autoridad.nombre_autoridad }}</h4>
                    </h3>
                    <span class="team-title">{{ autoridad.cargo_autoridad }}</span>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-5.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-4.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
    </div>
    <!-- Team Section End -->

    <!-- About Instructor Section Start -->
    <div
      id="sc-about-instructor"
      class="sc-about-instructor pt-80 pb-90 md-pt-50 md-pb-70 organigrama organigrama-2"
      v-if="carrera_id != 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 md-mb-45">
            <div class="img-part position-relative organigrama-pdf">
              <a
                :href="url_api + '/InstitucionUpea/' + Institucion.institucion_organigrama"
                target="_blank"
              >
                <vue-pdf-embed
                  :source="url_api + '/InstitucionUpea/' + Institucion.institucion_organigrama"
                  :page="1"
                  height="410"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-7 pl-85 md-pl-15 organigrama-carreras">
            <div class="sec-title mb-20">
              <div class="sub-title position-relative">
                institucion <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20 organigrama-text">Organigrama</h2>
              <h3 class="des mb-40 organigrama-text">
                Organización y estructura administrativa de la carrera.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="sc-about-instructor"
      class="sc-about-instructor pt-80 pb-90 md-pt-50 md-pb-70 organigrama-2"
      v-if="carrera_id == 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5 md-mb-45">
            <div class="img-part position-relative organigrama-pdf">
              <a :href="url_api + '/Gaceta/' + this.Gaceta.gaceta_documento" target="_blank">
                <vue-pdf-embed
                  :source="url_api + '/Gaceta/' + this.Gaceta.gaceta_documento"
                  :page="1"
                />
              </a>
            </div>
          </div>
          <div class="col-lg-7 pl-85 md-pl-15">
            <div class="sec-title mb-20 organigrama-2-text">
              <div class="sub-title position-relative">
                institucion <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-20 organigrama-text">Reglamento Interno</h2>
              <h3 class="des mb-40 organigrama-text">
                Reglamento interno de investigacion de la univesidad pública de el alto.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About Instructor Section End -->

    <!-- Course Section Start -->
    <div
      id="sc-event-section"
      class="sc-event-section pt-120 pb-110 md-pt-80 md-pb-70 eventos-container"
      v-if="this.carrera_id == 0"
    >
      <div class="container">
        <div class="row">
          <div class="sec-title mb-60 text-center md-mb-30">
            <div class="sub-title primary txt-reciente">lo más reciente de</div>
            <h2 class="title mb-0">Eventos</h2>
          </div>
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :modules="modules"
            class="mySwiper"
            :breakpoints="swiperOptions.breakpointsComunicados"
          >
            <swiper-slide v-for="(ev, id_ev) in Eventos" :key="id_ev">
              <div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                <div class="events-item">
                  <div class="img-part">
                    <a href="#"
                      ><img :src="url_api + '/Eventos/' + ev.evento_imagen" alt="img"
                    /></a>
                    <div class="event-price">
                      <span class="price">{{ ev.evento_tipo }}</span>
                    </div>
                  </div>
                  <div class="content-part">
                    <h3 class="title">
                      <a href="course-single.html">{{ ev.evento_titulo }}</a>
                    </h3>
                    <ul class="meta-part">
                      <li class="event-date">
                        <i class="fa fa-calendar-check-o"></i>{{ dmy(ev.evento_fecha) }}
                      </li>
                    </ul>
                    <div class="bottom-part d-flex align-items-center justify-content-between">
                      <div class="address"><i class="fa fa-map-o"></i>{{ ev.evento_lugar }}</div>
                      <div class="event-join">
                        <router-link
                          :to="{
                            name: 'convocatoriadetalle',
                            params: {
                              tipo: 'eventos',
                              idconv: encryptID(ev.evento_id)
                            }
                          }"
                        >
                          <i>Leer Mas</i>
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="row">
          <div class="sec-title mb-60 text-center md-mb-30">
            <div class="sub-title primary txt-reciente">lo más reciente de</div>
            <h2 class="title mb-0">Publicaciones</h2>
          </div>
          <swiper
            :slidesPerView="3"
            :spaceBetween="30"
            :pagination="{
              clickable: true
            }"
            :modules="modules"
            class="mySwiper"
            :breakpoints="swiperOptions.breakpointsComunicados"
          >
            <swiper-slide v-for="(pub, id_pub) in Publicaciones" :key="id_pub"
              ><div class="col-lg-12 col-md-6 mb-30 loadcourse addcourse">
                <div class="events-item">
                  <div class="img-part">
                    <a href="#"
                      ><img
                        class=""
                        :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen"
                        alt="img"
                    /></a>
                    <div class="event-price">
                      <span class="price">{{ pub.publicaciones_tipo }}</span>
                    </div>
                  </div>
                  <div class="content-part">
                    <h3 class="title">
                      <a href="course-single.html">{{ pub.publicaciones_titulo }}</a>
                    </h3>
                    <ul class="meta-part">
                      <li class="event-date">
                        <i class="fa fa-calendar-check-o"></i>{{ dmy(pub.publicaciones_fecha) }}
                      </li>
                    </ul>
                    <div class="bottom-part d-flex align-items-center justify-content-between">
                      <div class="address"><i class="fa fa-map-o"></i>El Alto</div>
                      <div class="event-join">
                        <router-link
                          :to="{
                            name: 'convocatoriadetalle',
                            params: {
                              tipo: 'publicaciones',
                              idconv: encryptID(pub.publicaciones_id)
                            }
                          }"
                        >
                          <i>Leer Mas</i>
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

    <!-- Blog Section Start -->
    <div
      id="sc-blog"
      class="sc-blog main-home pb-200 pt-110 md-pt-70 md-pb-160"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente</div>
          <h2 class="title mb-0">Convocatorias, Comunicados y Avisos Recientes</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          :breakpoints="swiperOptions.breakpointsComunicados"
          :pagination="{
            clickable: true
          }"
          v-if="
            Object.keys(latestConvocatoria).length +
              Object.keys(latestComunicado).length +
              Object.keys(latestAviso).length >
            0
          "
        >
          <!-- CONVOCATORIAS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestConvocatoria).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestConvocatoria.con_foto_portada"
                  alt="img"
                />
                <span>{{
                  latestConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase()
                }}</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestConvocatoria.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i
                    >{{ dmy(latestConvocatoria.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestConvocatoria.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: encryptID(latestConvocatoria.idconvocatorias)
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- COMUNICADOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestComunicado).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestComunicado.con_foto_portada"
                  alt="img"
                />
                <span>Comunicados</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestComunicado.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i
                    >{{ dmy(latestComunicado.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestComunicado.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: encryptID(latestComunicado.idconvocatorias)
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!--  AVISOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestAviso).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Convocatorias/' + latestAviso.con_foto_portada"
                  alt="img"
                />
                <span>Avisos</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestAviso.con_titulo.toUpperCase() }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestAviso.con_fecha_inicio) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestAviso.tipo_conv_comun.tipo_conv_comun_titulo.toLowerCase(),
                          idconv: encryptID(latestAviso.idconvocatorias)
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->

    <!-- Blog Section Start -->
    <div
      id="sc-blog"
      class="sc-blog main-home pb-200 pt-120 md-pt-70 md-pb-160 eventos-container"
      v-if="this.carrera_id == 3"
    >
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente de</div>
          <h2 class="title mb-0">Eventos</h2>
        </div>
        <swiper
          :space-between="50"
          :navigation="true"
          :modules="modules"
          :breakpoints="swiperOptions.breakpointsComunicados"
        >
          <!-- CURSOS -->
          <swiper-slide class="card-content" v-for="(ev, id_ev) in Eventos" :key="id_ev">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img class="img_swiper" :src="url_api + '/Eventos/' + ev.evento_imagen" alt="img" />
                <span>Eventos</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ ev.evento_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(ev.evento_fecha) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      class="btn-conv"
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: 'eventos',
                          idconv: encryptID(ev.evento_id)
                        }
                      }"
                    >
                      <span>Leer Mas</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image3 cta md-pt-75 md-pb-80 position-relative arrow-animation-1 content-cta"
      v-if="this.carrera_id == 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative cta-span">
                Frases <span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color cta-text">
                "En la Universidad Pública de El Alto formamos profesionales con un compromiso ético
                y social para transformar nuestra sociedad."
              </h2>
            </div>
          </div>
          <div class="col-lg-6 hidden-md">
            <div class="img-part cta-img">
              <img src="/bgPerson.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- CTA Section Start -->
    <div
      class="sc-cta-section cta-bg-image5 cta pt-40 pb-30 right-bg-image2 md-pt-75 md-pb-80 position-relative arrow-animation-1"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="2000ms">
            <div class="sec-title">
              <div class="sub-title position-relative cta-span">
                Frases<span class="heading-border-line"></span>
              </div>
              <h2 class="title mb-0 white-color cta-text">
                "La educación es el camino para construir una sociedad más equitativa y la
                Universidad Pública de El Alto es la institución que lidera este proceso en Bolivia"
                <span>Upea</span>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div class="animated-arrow-1 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-1.png" alt="" />
      </div>
      <div class="animated-arrow-2 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-2.png" alt="" />
      </div>

      <div class="animated-arrow-3 animated-arrow up-down-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-4 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-3.png" alt="" />
      </div>
      <div class="animated-arrow-6 animated-arrow left-right-new">
        <img src="@/assets/images/arrow-7.png" alt="" />
      </div>
    </div>
    <!-- CTA Section End -->

    <!-- Blog Section Start -->
    <div
      id="sc-blog"
      class="sc-blog main-home pb-200 pt-120 md-pt-70 md-pb-160"
      v-if="this.carrera_id != 0"
    >
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente</div>
          <h2 class="title mb-0">Cursos y Seminarios</h2>
        </div>
        <swiper
          :slides-per-view="3"
          :space-between="50"
          :breakpoints="swiperOptions.breakpointsComunicados"
          :pagination="{
            clickable: true
          }"
          v-if="Object.keys(latestCurso).length + Object.keys(latestSeminario).length > 0"
        >
          <!-- CURSOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestCurso).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Cursos/' + latestCurso.det_img_portada"
                  alt="img"
                />
                <span>Cursos</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestCurso.det_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestCurso.det_fecha_ini) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      class="btn-conv"
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestCurso.tipo_curso_otro.tipo_conv_curso_nombre.toLowerCase(),
                          idconv: encryptID(latestCurso.iddetalle_cursos_academicos)
                        }
                      }"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <!-- SEMINARIOS -->
          <swiper-slide class="card-content" v-if="Object.keys(latestSeminario).length > 0">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class="img_swiper"
                  :src="url_api + '/Cursos/' + latestSeminario.det_img_portada"
                  alt="img"
                />
                <span>Seminarios</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ latestSeminario.det_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(latestSeminario.det_fecha_ini) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: latestSeminario.tipo_curso_otro.tipo_conv_curso_nombre.toLowerCase(),
                          idconv: encryptID(latestSeminario.iddetalle_cursos_academicos)
                        }
                      }"
                      class="btn-conv"
                      >Leer Mas</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->

    <!-- Blog Section Start -->
    <div
      id="sc-blog"
      class="sc-blog main-home pb-200 pt-120 md-pt-70 md-pb-160 publicaciones-content"
      v-if="this.carrera_id == 3"
    >
      <div class="container">
        <div class="sec-title mb-60 text-center md-mb-30">
          <div class="sub-title primary txt-reciente">lo más reciente de</div>
          <h2 class="title mb-0">Publicaciones</h2>
        </div>
        <swiper
          :space-between="50"
          :navigation="true"
          :modules="modules"
          :breakpoints="swiperOptions.breakpointsComunicados"
        >
          <!-- CURSOS -->
          <swiper-slide class="card-content" v-for="(pub, id_pub) in Publicaciones" :key="id_pub">
            <div class="card col-lg-12 col-md-6 mb-30 loadcourse addcourse">
              <div class="card-image">
                <img
                  class=""
                  :src="url_api + '/Publicaciones/' + pub.publicaciones_imagen"
                  alt="img"
                />
                <span>Publicaciones</span>
              </div>
              <div class="card-description">
                <h3 class="title">
                  {{ pub.publicaciones_titulo }}
                </h3>
                <ul class="meta-part">
                  <li class="event-date">
                    <i class="fa fa-calendar-check-o"></i>{{ dmy(pub.publicaciones_fecha) }}
                  </li>
                </ul>
                <div class="bottom-part d-flex align-items-center justify-content-between">
                  <div class="event-join">
                    <router-link
                      class="btn-conv"
                      :to="{
                        name: 'convocatoriadetalle',
                        params: {
                          tipo: 'publicaciones',
                          idconv: encryptID(pub.publicaciones_id)
                        }
                      }"
                    >
                      <span>Leer Mas</span>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!-- Blog Section End -->
  </div>
  <!-- Map Start -->

  <!-- Blog Section Start -->
  <div
    id="sc-blog"
    class="sc-blog main-home pb-60 pt-110 md-pt-70 md-pb-160"
    v-if="this.carrera_id == 0"
  >
    <div class="container">
      <div class="sec-title mb-60 text-center md-mb-30">
        <div class="sub-title primary">UPEA</div>
        <h2 class="title mb-0">Servicios...</h2>
      </div>
      <swiper
        :slidesPerView="3"
        :spaceBetween="30"
        :pagination="{
          clickable: true
        }"
        :modules="modules"
        :breakpoints="swiperOptions.breakpointsComunicados"
        class="swiper-services"
      >
        <swiper-slide>
          <div class="blog-item">
            <div class="image-part img-part-services">
              <img src="@/assets/images/servicios/serv01.jpg" alt="" />
            </div>
            <div class="blog-content">
              <ul class="blog-meta">
                <li><i class="fa fa-user-o"></i> Upea</li>
                <li><i class="fa fa-calendar"></i>Marzo 8, 2021</li>
              </ul>
              <h3 class="title">Radio Upea</h3>
              <div class="desc">Escuchalos todos los sabados de 15:00 a 16:00 por la 100 FM</div>
              <!--<div class="btn-btm">
                <div class="rs-view-btn">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>-->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-item">
            <div class="image-part img-part-services">
              <img src="@/assets/images/servicios/serv02.jpg" alt="" />
            </div>
            <div class="blog-content">
              <ul class="blog-meta">
                <li><i class="fa fa-user-o"></i> Upea</li>
                <li><i class="fa fa-calendar"></i>Diciembre 6, 2020</li>
              </ul>
              <h3 class="title">Veterinaria</h3>
              <div class="desc">
                La Clinica Veterinaria Upea Difunde sus Servicios a la Poblacion.
              </div>
              <!--<div class="btn-btm">
                <div class="rs-view-btn">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>-->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          ><div class="blog-item">
            <div class="image-part img-part-services">
              <img src="@/assets/images/servicios/serv03.jpeg" alt="" />
            </div>
            <div class="blog-content">
              <ul class="blog-meta">
                <li><i class="fa fa-user-o"></i> Upea</li>
                <li><i class="fa fa-calendar"></i>Noviembre 28, 2019</li>
              </ul>
              <h3 class="title"><a href="blog-single.html">Odontologia</a></h3>
              <div class="desc">
                Clinica Odonotologica de la Upea ofrece sus Servicios a la Poblcación
              </div>
              <!--<div class="btn-btm">
                <div class="rs-view-btn">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>-->
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="blog-item">
            <div class="image-part img-part-services">
              <img src="@/assets/images/servicios/serv04.jpg" alt="" />
            </div>
            <div class="blog-content">
              <ul class="blog-meta">
                <li><i class="fa fa-user-o"></i> Upea</li>
                <li><i class="fa fa-calendar"></i>Marzo 4, 2019</li>
              </ul>
              <h3 class="title">Jisk'a Wawa</h3>
              <div class="desc">
                Centro de Desarrollo Infantil, reanuda sus servicios con la Upea.
              </div>
              <!--<div class="btn-btm">
                <div class="rs-view-btn">
                  <a href="blog-single.html">Read More</a>
                </div>
              </div>-->
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <!-- Blog Section End -->

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
        <iframe :src="Institucion.institucion_api_google_map" width="100%" height="500px"></iframe>
      </div>
    </div>
  </div>
  <!-- Map End -->
  <!-- Main content End -->
</template>
<script>
import { mapState } from 'vuex'
import Services from '@/services/Services'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VuePdfEmbed from 'vue-pdf-embed'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

import { Autoplay, FreeMode, Pagination, Navigation, Scrollbar } from 'swiper'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import CryptoJS from 'crypto-js'

export default {
  name: 'HomeView',
  data() {
    return {
      Carreras: [],
      Convocatorias: 0,
      latestConvocatoria: {},
      latestComunicado: {},
      latestAviso: {},
      mostrarCompleto: false,

      swiperOptions: {
        breakpointsCarrera: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          770: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 6,
            spaceBetween: 20
          }
        },
        breakpointsComunicados: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        },
        breakpointsAutoridades: {
          360: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          770: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1366: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      },

      Cursos: 0,
      latestCurso: {},
      latestSeminario: {},

      Servicios: [],
      Ofertas: [],
      Publicaciones: [],
      PublicacionesCarreras: [],
      Gacetas: [],
      Gaceta: [],
      Eventos: [],
      Videos: [],
      ObjetivosCarrera: [],

      NUM_RESULTS: 3,
      pag: 1,
      pager: 0,

      loader: 'bars',
      isLoading: false,
      fullPage: true,
      fondobg: '#C10202',
      opacidadbg: 1,
      coloricon: '#fff',
      iframeHtml:
        '<iframe frameborder="0" src="//www.youtube.com/embed/RcsOSIghvRk" width="640" height="360" class="note-video-clip"></iframe>'
    }
  },
  computed: {
    ...mapState([
      'url_api',
      'Institucion',
      'MenuConvocatorias',
      'MenuCursos',
      'Links',
      'carrera_id'
    ])
  },
  components: {
    Swiper,
    SwiperSlide,
    VuePdfEmbed,
    Loading
  },
  setup() {
    return {
      modules: [Autoplay, FreeMode, Pagination, Navigation, Scrollbar]
    }
  },
  methods: {
    encryptID(id) {
      const encryptionKey = 'UniversidadPublicaDeElAlto' // Cambia esto por tu clave de encriptación
      const ciphertext = CryptoJS.AES.encrypt(id.toString(), encryptionKey).toString()
      return ciphertext
    },

    cambiarTamanoTexto() {
      this.mostrarCompleto = !this.mostrarCompleto
      if (!this.mostrarCompleto) {
        const appElement = document.getElementById('content_home')
        appElement.scrollIntoView()
      }
    },

    async getCarreras() {
      try {
        const response = await Services.getCarreras()
        this.Carreras = response.data
      } catch (e) {
        console.log(e)
      }
    },

    async getConvocatoriasAll() {
      try {
        //optenemos todas la convocatoarias de la api
        const response = await Services.getConvocatoriasAll()
        this.Convocatorias = response.data

        //obtenemos los ultimos comunicados de convocatorias, comunicados y avisos
        if (response != null) {
          this.Convocatorias.forEach((conv) => {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'CONVOCATORIAS' &&
              conv.con_estado == '1'
            ) {
              this.latestConvocatoria = conv
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'COMUNICADOS' &&
                conv.con_estado == '1'
              ) {
                this.latestComunicado = conv
              } else {
                if (
                  conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'AVISOS' &&
                  conv.con_estado == '1'
                ) {
                  this.latestAviso = conv
                }
              }
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },

    async getConvocatoriasAllUPEA() {
      try {
        //optenemos todas la convocatoarias de la api
        const response = await Services.getConvocatoriasAllUPEA()
        this.Convocatorias = response.data

        //obtenemos los ultimos comunicados de convocatorias, comunicados y avisos
        if (response != null) {
          this.Convocatorias.forEach((conv) => {
            if (
              conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'CONVOCATORIAS' &&
              conv.con_estado == '1'
            ) {
              this.latestConvocatoria = conv
            } else {
              if (
                conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'COMUNICADOS' &&
                conv.con_estado == '1'
              ) {
                this.latestComunicado = conv
              } else {
                if (
                  conv.tipo_conv_comun.tipo_conv_comun_titulo.toUpperCase() == 'AVISOS' &&
                  conv.con_estado == '1'
                ) {
                  this.latestAviso = conv
                }
              }
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },

    async getCursosAll() {
      try {
        //optenemos todos los registros de cursos de la api
        const response = await Services.getCursosAll()
        this.Cursos = response.data

        //obtenemos los ultimos cursos y seminarios
        this.Cursos.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == 'CURSOS' && cur.det_estado == '1') {
            this.latestCurso = cur
          } else {
            if (
              cur.tipo_curso_otro.tipo_conv_curso_nombre == 'SEMINARIOS' &&
              cur.det_estado == '1'
            ) {
              this.latestSeminario = cur
            }
          }
        })
      } catch (e) {
        console.log(e)
      }
    },
    //optencion de todos los servicios, ofertas, publicaciones, gacetas, eventos y videos.
    async getServiciosAll() {
      try {
        const response = await Services.getServiciosAll()
        this.Servicios = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getOfertasAll() {
      try {
        const response = await Services.getOfertasAll()
        this.Ofertas = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getPublicaciones() {
      try {
        const response = await Services.getPublicaciones()
        response.data.forEach((conv) => {
          this.Publicaciones.push(conv)
        })
      } catch (e) {
        console.log(e)
      }
    },
    async getCarreraPublicaciones(id) {
      const response = await Services.getPublicacionesCarreras(id)
      response.data.forEach((conv) => {
        if (response.data.length > 0) {
          this.PublicacionesCarreras.push(conv)
        }
      })
    },
    async getPublicacionesCarreraAll() {
      try {
        this.Carreras.forEach((carrera) => {
          this.getCarreraPublicaciones(carrera.carrera_id)
        })
      } catch (e) {
        console.log(e)
      }
    },
    async getGacetaAll() {
      try {
        const response = await Services.getGacetaAll()
        this.Gacetas = response.data
        this.Gacetas.forEach((gaceta) => {
          this.Gaceta = gaceta
        })
      } catch (e) {
        console.log(e)
      }
    },
    async getEventos() {
      try {
        const response = await Services.getEventos()
        this.Eventos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    async getVideos() {
      try {
        const response = await Services.getVideos()
        this.Videos = response.data
      } catch (e) {
        console.log(e)
      }
    },
    contarConv(tipo) {
      if (tipo && this.Convocatorias) {
        let count = 0
        this.Convocatorias.forEach((conv) => {
          if (conv.tipo_conv_comun.tipo_conv_comun_titulo == tipo) {
            count++
          }
        })
        return count
      }
    },
    contarCur(tipo) {
      if (tipo && this.Cursos) {
        let count = 0
        this.Cursos.forEach((cur) => {
          if (cur.tipo_curso_otro.tipo_conv_curso_nombre == tipo) {
            count++
          }
        })
        return count
      }
    },
    dmy(fecha) {
      if (fecha != undefined) {
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
      }
    },
    async createdComponent() {
      this.isLoading = true
      if (this.carrera_id == 0) {
        await this.getCarreras()
        await this.getConvocatoriasAllUPEA()
        await this.getPublicaciones()
        await this.getGacetaAll()
        await this.getEventos()
        await this.getPublicacionesCarreraAll()
      }
      if (this.carrera_id != 0) {
        await this.getConvocatoriasAll()
        await this.getCursosAll()
        await this.getServiciosAll()
        await this.getOfertasAll()
        await this.getVideos()
        await this.getPublicaciones()
        await this.getGacetaAll()
        await this.getEventos()
      }
      this.isLoading = false
    },
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  },
  created() {
    this.createdComponent()
  },
  mounted() {
    this.scrollToTop()
  }
}
</script>
<style scoped>
@import './css/HomeView.css';
</style>
