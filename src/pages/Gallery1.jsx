import React, { useState } from 'react'
import axios from 'axios'
function Gallery1() {

  
  const [gallery, setGallery] = useState([])

  async function getData(){
    // console.log("Bootstrap is working");
    const response=await axios.get("https://picsum.photos/v2/list?page=3&limit=30")
    console.log(response.data);
    setGallery(response.data)

  }

  let showImages="No Images"

  if(gallery.length>0){
    showImages=gallery.map(function(elem,idx){
      return <div key={idx} className='m-2 '>
        <img src={elem.download_url} alt={elem.author}/>
      </div>

    })
  }

  return (
    <div className='container-fluid'>
      
      <button onClick={getData} className="btn btn-primary m-3">Bootstrap test</button>

      <div className='d-flex flex-wrap justify-content-center accordion'>
        {showImages}
      </div>
    </div>
  )
}

export default Gallery1
