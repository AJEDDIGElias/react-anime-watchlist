import React, { useEffect, useState } from "react";
import './Components/style.css'
function App() {
  
  const [animeData,setAnimeData]=useState();
  const [search, setSearch]=useState('One Piece');

  const getData=async()=>{
    const res=await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const resData= await res.json();
    //console.log(res);
    //console.log(resData);
    setAnimeData(resData.data)
}

  
  useEffect(()=>{
    getData()
  },[search]);

  return (
    <>
    <div className="header">
      <h1>My Anime WatchList</h1>
      <div className="search-box">
        <input type="search" placeholder="Search your anime"
        onChange={(e)=>setSearch(e.target.value)}/>
      </div>
    </div>
    </>
  );
}

export default App;
