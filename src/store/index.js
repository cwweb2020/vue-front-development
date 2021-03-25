import { createStore } from 'vuex'

export default createStore({
  state: {
    datos: null,
    datostraidos:null
  },
  mutations: {
    getcursos(state){
     
              
       state.datos = state.datostraidos
           
    }
  },
  actions: {
     getCursoAction( context ){
        context.commit('getcursos')
     }
  },
  getters:{
    mostrar(state){
       return state.datos;
    }

  },
  modules: {
  }
})
