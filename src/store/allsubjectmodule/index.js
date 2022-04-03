import axios from 'axios'
const baseurl="http://127.0.0.1:8000/api";
const urls="subject"
const url = `${baseurl}/${urls}`

const actions={
   async allsubjectAction ({commit}) {
  
   await axios.get(url,
      { headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
      }
    )
    .then((request)=>{
         // console.log(request.data)
          commit('setAllSubject',request.data);
        })
   

  }
 
};
const state={
  allsubject:[]
}
const getters={
  allsubjectGetters(state){
    //console.log(state);
    //const sta= JSON.parse(JSON.stringify(state));
    return state
  },


}
const mutations={
  setAllSubject(state,response){
    (state.allsubject)=response;
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
