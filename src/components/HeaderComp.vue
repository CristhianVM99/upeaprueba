<template>
  <!--Preloader area start here-->
  <!--<section class="loader_first">
    <div class="circular-spinner"></div>
  </section>-->
  <!--Preloader area End here-->

  <!--Full width header Start-->
  <div class="sc-header-section">
    <!--Header Start-->
    <header id="sc-header" class="sc-header">
      <!-- Topbar Area Start -->
      <div class="topbar-area">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-7">
              <ul class="topbar-contact">
                <li>
                  <i class="flaticon flaticon-call"></i>
                  <a href="tel:+(111)256352">+591 {{ Institucion.institucion_telefono1 }} </a>
                </li>
                <li>
                  <i class="flaticon flaticon-mail"></i>
                  <a href="mailto:support@rstheme.com">{{ Institucion.institucion_correo1 }} </a>
                </li>
              </ul>
            </div>
            <div class="col-md-5 text-end">
              <ul class="topbar-right">
                <li class="login-register">
                  <i class="fa fa-sign-in"></i>
                  <a href="http://administracionpaginas.upea.edu.bo/login" target="_blank">Ingresar</a>
                  <!--<router-link :to="{ name: 'register' }">Register</router-link>-->
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- Topbar Area End -->

      <!-- Menu Start -->
      <div class="menu-area menu-sticky">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3">
              <div class="logo-cat-wrap">
                <div class="logo-part">
                  <router-link
                    :to="{ name: 'home' }"
                    v-if="this.carrera_id == 0"
                    class="logo-content"
                  >
                    <img src="../assets/images/logoupeanuevo.png" alt="logo" />
                  </router-link>
                  <router-link
                    :to="{ name: 'home' }"
                    class="logo-content-2"
                    v-if="this.carrera_id != 0"
                  >
                    <img
                      :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                      alt=""
                      class="logo_carreras-menu"
                    />
                    <span class="logo_carreras-menu-text-submenu">{{
                      Institucion.institucion_nombre
                    }}</span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="col-lg-9 align-items-center d-flex text-end justify-content-end">
              <div class="sc-menu-area">
                <div class="main-menu">
                  <div class="mobile-menu">
                    <a class="sc-menu-toggle">
                      <i class="fa fa-bars" id="menu-desplegar" @click="MostrarMenu"></i>
                    </a>
                  </div>
                  <nav class="sc-menu">
                    <ul class="nav-menu">
                      <li class="menu-item-has-children">
                        <router-link to="/" href="#">Inicio</router-link>
                        <ul class="sub-menu">
                          <li>
                            <router-link :to="{ name: 'about' }">Sobre Nosotros</router-link>
                          </li>
                          <li v-if="this.carrera_id == 0">
                            <router-link :to="{ name: 'contacto' }">Contacto</router-link>
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children"
                        id="menu_convocatorias"
                        v-if="this.carrera_id == 0"
                      >
                        <a href="#">Areas y Carreras </a>
                        <ul class="sub-menu">
                          <li v-for="(area, id_area) in this.MenuAreasyCarreras" :key="id_area">
                            <a href="#">{{ area.area.toLowerCase() }}</a>
                            <ul class="sub-menu">
                              <li v-for="(carrera, id_carrera) in area.carreras" :key="id_carrera">
                                <a
                                  :href="`http://${carrera.nombre_simple.toLowerCase()}.upea.edu.bo/`"
                                  target="_blank"
                                  >{{ carrera.carrera }}</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children"
                        id="menu_convocatorias"
                        v-if="this.carrera_id == 0"
                      >
                        <a href="#">Unidades Administrativas</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="#">Rectorado</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="https://titulos.upea.bo/" target="_blank"
                                  >Unidad de Titulos y Diplomas</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Vicerrectorado</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="https://vicerrectorado.upea.bo/l" target="_blank"
                                  >Vicerrectorado</a
                                >
                              </li>
                              <li>
                                <a href="https://www.sie.upea.bo/l" target="_blank"
                                  >Unidad de Sistemas de Informacion y Estadistica</a
                                >
                              </li>
                              <li>
                                <a href="https://registrosadmisiones.upea.bo/" target="_blank"
                                  >Registros y Admiciones</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Extencion Universitaria (Bienestar Estudiantil)</a>
                            <ul class="sub-menu">
                              <li>
                                <a href="https://solid.upea.bo/" target="_blank"
                                  >Direccion de Interaccion Social y Cultural</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children"
                        id="menu_convocatorias"
                        v-if="this.carrera_id != 0"
                      >
                        <a href="#">Convocatorias </a>
                        <ul class="sub-menu">
                          <li v-for="(link, id_conv) in MenuConvocatorias" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'convocatorias',
                                params: {
                                  tipo: link.tipo_conv_comun_titulo.toLowerCase()
                                }
                              }"
                              >{{ link.tipo_conv_comun_titulo.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children" v-if="this.carrera_id != 0">
                        <a href="#">Cursos</a>
                        <ul class="sub-menu">
                          <li v-for="(link, id_conv) in MenuCursos" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'cursos',
                                params: {
                                  tipo: link.tipo_conv_curso_nombre.toLowerCase()
                                }
                              }"
                              >{{ link.tipo_conv_curso_nombre.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children" v-if="this.carrera_id == 0">
                        <a href="#">Articulos</a>
                        <ul class="sub-menu">
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'servicios',
                                params: {
                                  tipo: 'servicios'
                                }
                              }"
                              >Servicios</router-link
                            >
                          </li>
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'ofertasacademicas',
                                params: {
                                  tipo: 'ofertasacademicas'
                                }
                              }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'publicaciones',
                                params: {
                                  tipo: 'publicaciones'
                                }
                              }"
                              >Publicaciones</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'gacetas',
                                params: {
                                  tipo: 'gacetas'
                                }
                              }"
                              >Gaceta</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'eventos',
                                params: {
                                  tipo: 'eventos'
                                }
                              }"
                              >Eventos</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'videos',
                                params: {
                                  tipo: 'videos'
                                }
                              }"
                              >Videos</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children" v-if="this.carrera_id != 0">
                        <a href="#">Mas</a>
                        <ul class="sub-menu">
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'servicios',
                                params: {
                                  tipo: 'servicios'
                                }
                              }"
                              >Servicios</router-link
                            >
                          </li>
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'ofertasacademicas',
                                params: {
                                  tipo: 'ofertasacademicas'
                                }
                              }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'publicaciones',
                                params: {
                                  tipo: 'publicaciones'
                                }
                              }"
                              >Publicaciones</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'gacetas',
                                params: {
                                  tipo: 'gacetas'
                                }
                              }"
                              >Gaceta</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'eventos',
                                params: {
                                  tipo: 'eventos'
                                }
                              }"
                              >Eventos</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'videos',
                                params: {
                                  tipo: 'videos'
                                }
                              }"
                              >Videos</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children"
                        id="menu_convocatorias"
                        v-if="this.carrera_id == 0"
                      >
                        <a href="#">Mas</a>
                        <ul class="sub-menu">
                          <li>
                            <a href="http://repositorio.upea.bo/" target="_blank"
                              >Repositorio Institucional</a
                            >
                          </li>
                          <li>
                            <a href="https://disbedc.upea.bo/" target="_blank">Disbedc</a>
                          </li>
                          <li>
                            <a href="http://mibiblioteca.upea.bo/" target="_blank"
                              >Mi Biblioteca Upea</a
                            >
                          </li>
                          <li>
                            <a href="https://fm100.upea.bo/" target="_blank">Radio Upea</a>
                          </li>
                          <li>
                            <a href="https://tv.upea.bo/" target="_blank">Tv Upea </a>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children" v-if="this.carrera_id != 0">
                        <a href="#">Links</a>
                        <ul class="sub-menu">
                          <li v-for="(link, id_link) of Links" :key="id_link">
                            <a :href="link.ei_link" target="_blank">{{ link.ei_nombre }}</a>
                          </li>
                        </ul>
                      </li>

                      <li v-if="this.carrera_id != 0">
                        <router-link :to="{ name: 'contacto' }">Contacto</router-link>
                      </li>
                    </ul>
                    <!-- //.nav-menu -->
                  </nav>
                </div>
                <!-- //.main-menu -->
              </div>
              <div class="expand-btn-inner text-end">
                <ul>
                  <!--<li>
                    <a
                      class="hidden-xs sc-search"
                      data-bs-target="#search-modal"
                      data-bs-toggle="modal"
                      href="#"
                    >
                      <i class="flaticon flaticon-magnifying-glass"></i>
                    </a>
                  </li>-->
                </ul>
                <span>
                  <a id="nav-expander" class="nav-expander">
                    <span class="dot1"></span>
                    <span class="dot2"></span>
                    <span class="dot3"></span>
                  </a>
                </span>
              </div>
            </div>

            <!-- Canvas Menu start -->
            <div
              class="navbar fixed-top vw-100 vh-100 top-0 left-0"
              style="z-index: 100"
              id="navbar-menu"
              v-show="menu_responsive"
            >
              <nav class="navbar-content">
                <div class="close-btn">
                  <div id="nav-close" @click="MostrarMenu">
                    <div class="line">
                      <span class="line1"></span>
                      <span class="line2"></span>
                    </div>
                  </div>
                </div>
                <div class="canvas-logo-right">
                  <router-link
                    :to="{ name: 'home' }"
                    v-if="this.carrera_id == 0"
                    class="logo-content-right"
                  >
                    <img src="../assets/images/logoupeanuevo.png" alt="logo" />
                  </router-link>
                  <router-link
                    :to="{ name: 'home' }"
                    class="logo-content-2-right"
                    v-if="this.carrera_id != 0"
                  >
                    <img
                      :src="url_api + '/InstitucionUpea/' + Institucion.institucion_logo"
                      alt=""
                      class="logo_carreras-menu"
                    />
                    <span class="logo_carreras-menu-text-rigth">{{
                      Institucion.institucion_nombre
                    }}</span>
                  </router-link>
                </div>
                <div class="offcanvas-text">
                  <nav class="sc-menu-right">
                    <ul class="nav-menu-right">
                      <li class="menu-item-has-children-right">
                        <a href="#" class="primer-menu" @click="submenuOpen1 = !submenuOpen1"
                          >Inicio</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen1 }">
                          <li>
                            <router-link :to="{ name: 'about' }">Sobre Nosotros</router-link>
                          </li>
                          <li v-if="this.carrera_id == 0">
                            <router-link :to="{ name: 'contacto' }">Contacto</router-link>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id == 0">
                        <a href="#" class="primer-menu" @click="submenuOpen2 = !submenuOpen2"
                          >Areas y Carreras
                        </a>
                        <ul class="sub-menu-right" :class="{ open: submenuOpen2 }">
                          <li v-for="(area, id_area) in this.MenuAreasyCarreras" :key="id_area">
                            <a href="#" @click="toggleSubMenu(area)">{{
                              area.area.toLowerCase()
                            }}</a>
                            <ul class="sub-menu-sub-right" v-show="subMenuVisible == area">
                              <li v-for="(carrera, id_carrera) in area.carreras" :key="id_carrera">
                                <a
                                  :href="`http://${carrera.nombre_simple.toLowerCase()}.upea.edu.bo/`"
                                  target="_blank"
                                  >{{ carrera.carrera }}</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children-right"
                        id="menu_convocatorias"
                        v-if="this.carrera_id == 0"
                      >
                        <a href="#" class="primer-menu" @click="submenuOpen3 = !submenuOpen3"
                          >Unidades Administrativas</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen3 }">
                          <li>
                            <a href="#" @click="toggleSubMenu(1)">Rectorado</a>
                            <ul class="sub-menu-sub-right" v-show="subMenuVisible == 1">
                              <li>
                                <a href="https://titulos.upea.bo/" target="_blank"
                                  >Unidad de Titulos y Diplomas</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" @click="toggleSubMenu(2)">Vicerrectorado</a>
                            <ul class="sub-menu-sub-right" v-show="subMenuVisible == 2">
                              <li>
                                <a href="https://vicerrectorado.upea.bo/l" target="_blank"
                                  >Vicerrectorado</a
                                >
                              </li>
                              <li>
                                <a href="https://www.sie.upea.bo/l" target="_blank"
                                  >Unidad de Sistemas de Informacion y Estadistica</a
                                >
                              </li>
                              <li>
                                <a href="https://registrosadmisiones.upea.bo/" target="_blank"
                                  >Registros y Admiciones</a
                                >
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#" @click="toggleSubMenu(3)"
                              >Extencion Universitaria (Bienestar Estudiantil)</a
                            >
                            <ul class="sub-menu-sub-right" v-show="subMenuVisible == 3">
                              <li>
                                <a href="https://solid.upea.bo/" target="_blank"
                                  >Direccion de Interaccion Social y Cultural</a
                                >
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children-right"
                        id="menu_convocatorias"
                        v-if="this.carrera_id != 0"
                      >
                        <a href="#" class="primer-menu" @click="submenuOpen4 = !submenuOpen4"
                          >Convocatorias
                        </a>
                        <ul class="sub-menu-right" :class="{ open: submenuOpen4 }">
                          <li v-for="(link, id_conv) in MenuConvocatorias" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'convocatorias',
                                params: {
                                  tipo: link.tipo_conv_comun_titulo.toLowerCase()
                                }
                              }"
                              >{{ link.tipo_conv_comun_titulo.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id != 0">
                        <a href="#" class="primer-menu" @click="submenuOpen5 = !submenuOpen5"
                          >Cursos</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen5 }">
                          <li v-for="(link, id_conv) in MenuCursos" :key="id_conv">
                            <router-link
                              :to="{
                                name: 'cursos',
                                params: {
                                  tipo: link.tipo_conv_curso_nombre.toLowerCase()
                                }
                              }"
                              >{{ link.tipo_conv_curso_nombre.toLowerCase() }}</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id == 0">
                        <a href="#" class="primer-menu" @click="submenuOpen6 = !submenuOpen6"
                          >Comunicados</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen6 }">
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'servicios',
                                params: {
                                  tipo: 'servicios'
                                }
                              }"
                              >Servicios</router-link
                            >
                          </li>
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'ofertasacademicas',
                                params: {
                                  tipo: 'ofertasacademicas'
                                }
                              }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'publicaciones',
                                params: {
                                  tipo: 'publicaciones'
                                }
                              }"
                              >Publicaciones</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'gacetas',
                                params: {
                                  tipo: 'gacetas'
                                }
                              }"
                              >Gaceta</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'eventos',
                                params: {
                                  tipo: 'eventos'
                                }
                              }"
                              >Eventos</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'videos',
                                params: {
                                  tipo: 'videos'
                                }
                              }"
                              >Videos</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id != 0">
                        <a href="#" class="primer-menu" @click="submenuOpen7 = !submenuOpen7"
                          >Mas</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen7 }">
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'servicios',
                                params: {
                                  tipo: 'servicios'
                                }
                              }"
                              >Servicios</router-link
                            >
                          </li>
                          <li v-if="this.carrera_id != 0">
                            <router-link
                              :to="{
                                name: 'ofertasacademicas',
                                params: {
                                  tipo: 'ofertasacademicas'
                                }
                              }"
                              >Ofertas Academicas</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'publicaciones',
                                params: {
                                  tipo: 'publicaciones'
                                }
                              }"
                              >Publicaciones</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'gacetas',
                                params: {
                                  tipo: 'gacetas'
                                }
                              }"
                              >Gaceta</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'eventos',
                                params: {
                                  tipo: 'eventos'
                                }
                              }"
                              >Eventos</router-link
                            >
                          </li>
                          <li>
                            <router-link
                              :to="{
                                name: 'videos',
                                params: {
                                  tipo: 'videos'
                                }
                              }"
                              >Videos</router-link
                            >
                          </li>
                        </ul>
                      </li>

                      <li
                        class="menu-item-has-children-right"
                        id="menu_convocatorias"
                        v-if="this.carrera_id == 0"
                      >
                        <a href="#" class="primer-menu" @click="submenuOpen8 = !submenuOpen8"
                          >Mas</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen8 }">
                          <li>
                            <a href="http://repositorio.upea.bo/" target="_blank"
                              >Repositorio Institucional</a
                            >
                          </li>
                          <li>
                            <a href="https://disbedc.upea.bo/" target="_blank">Disbedc</a>
                          </li>
                          <li>
                            <a href="http://mibiblioteca.upea.bo/" target="_blank"
                              >Mi Biblioteca Upea</a
                            >
                          </li>
                          <li>
                            <a href="https://fm100.upea.bo/" target="_blank">Radio Upea</a>
                          </li>
                          <li>
                            <a href="https://tv.upea.bo/" target="_blank">Tv Upea </a>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id != 0">
                        <a href="#" class="primer-menu" @click="submenuOpen9 = !submenuOpen9"
                          >Links</a
                        >
                        <ul class="sub-menu-right" :class="{ open: submenuOpen9 }">
                          <li v-for="(link, id_link) of Links" :key="id_link">
                            <a :href="link.ei_link" target="_blank">{{ link.ei_nombre }}</a>
                          </li>
                        </ul>
                      </li>

                      <li class="menu-item-has-children-right" v-if="this.carrera_id != 0">
                        <router-link :to="{ name: 'contacto' }">Contacto</router-link>
                      </li>
                    </ul>
                    <!-- //.nav-menu -->
                  </nav>
                </div>
                <ul class="address-widget-right">
                  <li>
                <i class="flaticon flaticon-call"></i>
                <a href="#">{{ Institucion.institucion_celular1 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-mail"></i>
                <a href="#">{{ Institucion.institucion_correo1 }}</a>
              </li>
              <li>
                <i class="flaticon flaticon-maps-and-flags"></i>
                <a href="#">{{ Institucion.institucion_direccion }}</a>
              </li>
                </ul>
                <div class="canvas-contact">
                  <ul class="wrapper">
                    <li class="icon facebook">
                      <span class="tooltip">Facebook</span>
                      <a :href="Institucion.institucion_facebook" target="_blank">
                        <span><i class="fa fa-facebook"></i></span>
                      </a>
                    </li>
                    <li class="icon twitter">
                      <span class="tooltip">Twitter</span>
                      <a :href="Institucion.institucion_twitter" target="_blank">
                        <span><i class="fa fa-twitter"></i></span>
                      </a>
                    </li>
                    <li class="icon instagram">
                      <span class="tooltip">Instagram</span>
                      <a :href="Institucion.institucion_youtube" target="_blank">
                        <span><i class="fa fa-youtube"></i></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <!-- Canvas Menu end -->
          </div>
        </div>
      </div>
      <!-- Menu End -->
    </header>
    <!--Header End-->
  </div>
  <!--Full width header End-->
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'HeaderComp',

  data() {
    return {
      isOpen: false,
      menuHeight: 0,
      submenuOpen: false,
      submenuOpen1: false,
      submenuOpen2: false,
      submenuOpen3: false,
      submenuOpen4: false,
      submenuOpen5: false,
      submenuOpen6: false,
      submenuOpen7: false,
      submenuOpen8: false,
      submenuOpen9: false,
      menu_responsive: false,
      subMenuVisible: null,
      indice_menu: 0
    }
  },
  computed: {
    ...mapState([
      'url_api',
      'MenuConvocatorias',
      'MenuCursos',
      'Institucion',
      'Links',
      'carrera_id',
      'MenuAreasyCarreras'
    ])
  },
  methods: {
    MostrarMenu() {
      this.menu_responsive = !this.menu_responsive
    },
    toggleSubMenu(index) {
      if (this.subMenuVisible == index) {
        this.subMenuVisible = null
      } else {
        this.subMenuVisible = index
      }
    }
  },
  created() {},
  mounted() {}
}
</script>
<style scoped>
@import './css/HeaderComp.css';
</style>
