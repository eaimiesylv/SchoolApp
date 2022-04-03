import axios from 'axios'
const baseurl="http://127.0.0.1:8000/api";
const urls="class"
const url = `${baseurl}/${urls}`

const actions={
   async classAction () {
  
   await axios.get(url,
      { headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
      }
    )
    .then((response)=>{
      //console.log(response.data)
    })
   

  }
 
};
const state={

}
const getters={

}
const mutations={

}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
