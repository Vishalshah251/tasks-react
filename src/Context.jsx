import { createContext, useContext,useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const myContext = createContext();

let initalState={
  isLoading:true,
  hits:[],
  page:2,
  nbPages: 50,
  query:"css"
}
const AppProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initalState);
  async function fetchData(url){
    try {
      const res=await fetch(url);
      const data=await res.json();
      console.log(data);
      dispatch({type:"setData",payload:{hits:data.hits}})
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchData(`http://hn.algolia.com/api/v1/search?query=${state.query}&page=${state.page}`)
  },[state.page])
  return <myContext.Provider value={{...state,handlePrev,handleNext}}>{children}</myContext.Provider>;
  function handlePrev(){
    dispatch({type:"prev"})
  }
  function handleNext(){
    dispatch({type:"next"})
  }
};
// function handlePrev(){
//   dispatch({type:"prev"})
// }
// function handleNext(){
//   dispatch({type:"next"})
// }
const useGlobalContext=()=>{
    return useContext(myContext);
}

export { myContext, AppProvider ,useGlobalContext};
