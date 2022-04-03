import axios from 'axios'
const baseurl="http://127.0.0.1:8000/api";
const urls="session"
const url = `${baseurl}/${urls}`
export function someAction () {
  
      axios.get(url,
        { headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          }
        }
      )
      .then((response)=>console.log(response.data))
     
 
}
