import React, {  useState, useEffect } from "react";
import axios from "axios";

function Gallery2() {
  const [gallery, setGallery] = useState([]);
  const [page,setPage]=useState(1);
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    getData();
  },[page]);

  async function getData() {
    setLoading(true);
    try{
        const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=12`
    );
    console.log(response.data);
    setGallery(response.data);
    }
    catch(error){
        console.log(error + " error in fetching gallery images");

    }
    finally{
        setLoading(false);
    }
  }

  function Previous(){
    if(page!=1){
        setPage(page-1);
        getData();

    }
  }

  function Next(){
    setPage(page+1);
    getData();
  }

  return (
    <div className="container py-4">
      
      {/* Header Section */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Image Gallery</h2>
        <p className="text-muted">Beautiful images loaded using API</p>
        {/* <button onClick={getData} className="btn btn-primary mt-2">
          Load Images
        </button> */}
      </div>

    


      {/* Gallery Grid */}
      {/* Loader */}
      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary"></div>
          <p className="mt-2">Loading...</p>
        </div>
      )}

      {/* Gallery Grid */}
      {!loading && (
        <div className="row">
          {gallery.length === 0 ? (
            <p className="text-center text-muted">No Images Loaded</p>
          ) : (
            gallery.map((elem) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                key={elem.id}
              >
                <div className="card h-100 shadow-sm">
                  <img
                    src={elem.download_url}
                    className="card-img-top img-fluid"
                    alt={elem.author}
                    loading="lazy"
                  />
                  <div className="card-body text-center">
                    <small className="text-muted">{elem.author}</small>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}


       {/* Pagination */}
      <div className="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
          className="btn btn-outline-primary"
          onClick={Previous}
          disabled={page === 1}
        >
          Prev
        </button>

        <span className="badge bg-primary fs-6">{page}</span>

        <button className="btn btn-outline-primary" onClick={Next}>
          Next
        </button>
      </div>

    </div>
  );
}

export default Gallery2;
