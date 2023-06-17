import { createStore } from 'vuex'

export default createStore({
  //variables globales para todos los componentes.
  state: {
    url_api: import.meta.env.VITE_VUE_APP_ROOT_API,
    getter: true,
    MenuConvocatorias: [],
    MenuCursos: [],
    MenuAreasyCarreras:[],
    Links: [],
    Institucion: {},    
    Institucion_id:import.meta.env.VITE_VUE_APP_ID_INSTITUCION,
    carrera_id: import.meta.env.VITE_VUE_APP_ID_CARRERA,
  },
  getters: {
  },
  mutations: {    
  },
  actions: {
  },
  modules: {
  }
})
