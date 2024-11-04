// create your App component here
import React,{useState,useEffect} from "react";

 function App(){

const [images,setImages] = useState()


useEffect(()=>{
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(resp=>resp.json())
    
    .then(data=>setImages(data.message))
    
    
},[])

if (!images)return <p>Loading...</p>
return <img src={images} alt="A Random Dog"></img>
    
    



}

export default App
