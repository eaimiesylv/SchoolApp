import {baseurl,axios} from './Axios'
//const baseurl="http://127.0.0.1:8000/api";
export const axiosPost = async (urls,config) => {
  let response;
  let error=""
 
  const url = `${baseurl}/${urls}`
  try {
      response =await axios.post(url, config,
      { headers: {
         Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
      }
    )
  } catch (e) {
   error='set'
  }
  return ( error==='set') ?"Service Unavialable":response.data
 
}

export const axiosGetid = async (id,urls) => {
  const url = `${baseurl}/${urls}/${id}`
  let response;
  let error
  try {
      response =await axios.get(url,
      { headers: {
         Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        }
      }
    )
  } catch (e) {
     error='set'
  }
  return ( error==='set') ?"Service Unavialable":response.data
  
 
}

