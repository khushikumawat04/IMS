import React from 'react'

const MainPage = () => {
  return (
    <div className='dashboard'>
      <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
           {/* <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" class="d-block w-100" alt="Wild Landscape" /> */}
            <img src='../images/banner3.jpg' width= "1200px" height="570px" alt="Wild Landscape" />
        </div>
        <div class="carousel-item">
        <img src='../images/banner4.jpg.png' width= "1200px" height="570px" alt="Wild Landscape"/>
           {/* <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" class="d-block w-100" alt="Camera" /> */}
        </div>
        <div class="carousel-item">
        <img src='../images/banner1.jpg' width= "1200px" height="570px" alt="Wild Landscape"/>
            {/* <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" class="d-block w-100" alt="Exotic Fruits" />*/}
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
    </div>
  )
}

export default MainPage;
