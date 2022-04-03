import axios from 'axios'
const baseurl="http://127.0.0.1:8000/api";
const urls="student"
const url = `${baseurl}/${urls}`

const actions={
   async allstudentAction ({commit}) {
  
   await axios.get(url,
      { headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
      }
    )
    .then((request)=>{
         // console.log(request.data)
          commit('setAllStudent',request.data);
        })
   

  }
 
};
const state={
  allstd:[]
}
const getters={
    allstdGetters(state)
    {
          let compound={};
          let table={};
          let klas=[]
          let stdProp=[]
          let p=state.allstd;
          for(let i=0; i< p.length; i++){
           
            let clas=p[i].clas;
            let clasid=p[i].clasid
            let regno=p[i].regno;
            let image=p[i].image;
            let userid=p[i].userid;
            let clasObj={"label":clas,"value":clasid}
            let stdObj={"fullname":p[i].surname + " " +p[i].firstname,"regno":regno,"image":image,"stidid":userid}
           if(klas.filter(item=> item.label === clasObj.label).length==0){ klas.push(clasObj);}
            let arm=p[i].armname;
            let sex=p[i].sex;
            let intval={[sex]:1};
            if(`${clas}` in table){
                  //check
                stdProp[clas][i]=stdObj
                  //check if a class has an existing arm
              if(table[clas].hasOwnProperty(arm)){
                //check if a arm has an existing sex
                if(table[clas][arm].hasOwnProperty(sex)){
                  let val=table[clas][arm][sex];
                  val++;
                  table[clas][arm][sex]=val
                }
                else{ 
                  let obj={...intval, ...table[clas][arm]};
                  table[clas][arm]=obj;
                }
              }
              else{
                let obj={...table[clas], ...{[arm]:intval}};
                table={...table,...{[clas]:obj}};
                }
            }
            else{
                  table={...table, ...{[clas]:{[arm]:intval}}};
                  stdProp={...stdProp, ...{[clas]:{'0':stdObj}}};
            }
        }
         //newval=newval.replace(/,(?=[^,]*$)/, '')
        compound={'allcla':table, ...{'klas':klas}, ...{'stds':stdProp}}
        return state=compound
    },
    alluserGetters(state){
      const key = 'clasid';
      const { [key]: _, ...newData } = state;
      const sta= JSON.parse(JSON.stringify(newData));
      return sta
    },
   


}
const mutations={
  setAllStudent(state,stds){
    (state.allstd)=stds;
  }
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}
