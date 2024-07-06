import { myAxios } from "./Helper";


export const loadAllPosts = (categoryId , blockId)=>{
    return myAxios.get(`/category/${categoryId}/block/${blockId}/get`).then((response)=>{
        return response.data;
    })
}

export const deletePosts = (pid)=>{
      return myAxios.delete(`/post/${pid}`).then((response)=>{
        return response.data;
      })
}