import axios from 'axios'
let type='';
let iconMessage='';
let msg=""

    export  function axiosPost(urls, obj){
      let res="";
      const baseurl="http://127.0.0.1:8000/api";
      const url = `${baseurl}/${urls}`
              axios
                .post(url,obj, {
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json;charset=UTF-8",
                  },
                })
                .then((response) => 
                {
                   
                    if(response.data ==='201'){
                      type='positive';
                      iconMessage='done';
                      msg="Submission Successful"
                      res=response.data;
                      return res;
                      //console.log(response.data) 
                    }
                    else{
                      type='negative';
                      iconMessage='warning';
                      msg=`${response}`
                      res=response.data;
                      //console.log(response.data)
                    }
                   
                })
                .catch(function (response) {
                  if (!response.data) {
                      type='negative';
                      iconMessage='warning';
                      msg="Error: Network Error"
                      res=response.data;
                  }
                 
                });
             
               
    }
export function quasarNotify(){
  return {
    message: `${msg}`,
    type: `${type}`,
    position:'top',
    multiLine: true,
    icon: `${iconMessage}`,
  }
}
