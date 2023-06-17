<template>
  <header-comp-vue/>
  <router-view/>
  <footer-comp-vue/>
</template>
<script>
import FooterCompVue from '@/components/FooterComp.vue'
import HeaderCompVue from '@/components/HeaderComp.vue'
import { mapState } from 'vuex'
import Services from '@/services/Services'

export default {
  name: 'AppLayout',
  components: {
    HeaderCompVue,
    FooterCompVue
  },
  computed: {
    ...mapState([
      'url_api',
      'Institucion',
      'MenuConvocatorias',
      'MenuCursos',
      'MenuAreasyCarreras',
      'carrera_id',
      'institucion_id'
    ])
  },
  methods: {
    async getMenuConvocatorias() {
      try {
        //optencion de menu de convocatorias.
        const response = await Services.getMenuConvocatorias()

        //filtramos aquellos que siguen vigentes
        const filterConvocatorias = []
        response.data.forEach((data) => {
          if (data.tipo_conv_comun_estado == '1') {
            filterConvocatorias.push(data)
          }
        })
        this.$store.state.MenuConvocatorias = filterConvocatorias
      } catch (e) {
        console.log(e)
      }
    },

    async getMenuAreasyCarreras() {
      try {
        //optencion de menu de areas y carreras.
        const response = await Services.getMenuAreasyCarreras()        
        this.$store.state.MenuAreasyCarreras = response.data
      } catch (e) {
        console.log(e)
      }
    },

    async getMenuCursos() {
      try {
        //optencion del menu de los cursos.
        const response = await Services.getMenuCursos()

        //filtramos aquellos que siguen vigentes
        const filterCursos = []
        response.data.forEach((data) => {
          if (data.tipo_conv_curso_estado == '1') {
            filterCursos.push(data)
          }
        })
        this.$store.state.MenuCursos = filterCursos
      } catch (e) {
        console.log(e)
      }
    },

    async getLinks() {
      try {
        //optencion de menu de links.
        const response = await Services.getLinks()

        //filtramos aquellos que siguen vigentes
        let filterLinks = []
        response.data.forEach((data) => {
          if (data.ei_estado == '1') {
            filterLinks.push(data)
          }
        })
        this.$store.state.Links = filterLinks
      } catch (e) {
        console.log(e)
      }
    },

    async getInstitucion() {
      try {
        //optencion de los datos de la Institucion
        let response = await Services.getInstitucion()
        this.$store.state.Institucion = response.data.Descripcion        
        
        //asignacion de icon segun Institucion.
        this.setIconInstitucion()
        
        //asginacion de colores segun Institucion.
        this.setColorsInstitucion()

        /*this.setImages(response.data.Descripcion.portada); ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/        
      } catch (e) {
        console.log(e)
        if (e.code == 'ERR_NETWORK') {
          this.$router.push('/error_network')
        }
      }
    },

    setIconInstitucion(){
      document
          .querySelector('#icon')
          .setAttribute(
            'href',
            this.url_api + '/InstitucionUpea/' + this.Institucion.institucion_logo
          )  
      document.querySelector("#title-page").innerHTML =
          this.Institucion.institucion_nombre.toUpperCase();
    },

    setColorsInstitucion(){
      if (this.Institucion.colorinstitucion.length > 0) {
          document.documentElement.style.setProperty(
            '--main-color',
            this.Institucion.colorinstitucion[0].color_primario
            
          )
          document.documentElement.style.setProperty(
            '--main-color-2',
            this.Institucion.colorinstitucion[0].color_secundario
          )
          document.documentElement.style.setProperty(
            '--main-color-3',
            this.Institucion.colorinstitucion[0].color_terciario
          )
        }
    },

    //metodo que ejecuta todos los demas
    createdComponent() {      
      if(this.carrera_id == 0){
        this.getInstitucion()
        this.getMenuAreasyCarreras()
      }

      if(this.carrera_id !=0 ){
        this.getInstitucion()
        this.getMenuConvocatorias()
        this.getMenuCursos()
        this.getLinks()
      }
    },

  },
  created() {
    //creamos el componente    
    this.createdComponent()
  },      
}
</script>
