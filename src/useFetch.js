import { useEffect, useState } from "react"
// import axios from "axios";
// import api from "./api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

      useEffect (
          () =>{
              setTimeout(() =>{

                //  const fetchPosts = async () => {
                //     try {
                //         const response = await api.get('/posts')
                //         console.log(response)
                //         // setIsPending(false)
                //           setData(response.data.data) 
                //     } catch (error) {
                //         if (error.response) {
                //             setIsPending(true);
                //           setError(error.response.data)
                //     //    console.log(error.response.data) 
                //        console.log(error.response.status) 
                //        console.log(error.response.headers) 
                //     }else(
                //         setError(error.message)
                //     )
                //     }
                //  }
                //  fetchPosts();
                  fetch(`http://localhost:4000/posts`)
                  .then(
                      (res) =>{
                          console.log(res)
                          if(res.ok)
                         return res.json()
                      }
                  )
                  .then(
                      (data) =>{
                          // console.log(data);
                          setIsPending(false)
                          setData(data)
                      }
                  )
                  .catch(
                      err =>{
                          setIsPending(false);
                          setError(err.message)
                      }
                  )

              },
              3000);
          }, [url]
      )
      return {data, isPending, error}
}
export default useFetch;