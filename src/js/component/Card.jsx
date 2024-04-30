import React from "react";

function CardPhoto() {
    return (
        <div className="  text-center">
            <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-2 g-lg-4">
                <div className="col">
                    <div className="card d-flex flex-column justify-content-between">
                        <img src="https://cdn.pixabay.com/photo/2012/12/21/10/07/sneakers-71623_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">NIKE 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex flex-column justify-content-between">
                        <img src="https://cdn.pixabay.com/photo/2014/04/05/11/38/nike-316449_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">NIKE 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card d-flex flex-column justify-content-between align-items-center">
                        <img src="https://cdn.pixabay.com/photo/2018/09/27/10/46/sneakers-3706741_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">NIKE 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div> </div>
                <div className="col">
                    <div className="card d-flex flex-column justify-content-between">
                        <img src="https://cdn.pixabay.com/photo/2020/05/04/07/15/nike-5128119_1280.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">NIKE 4</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div> </div>
            </div>
        </div>

    );
};

export default CardPhoto;
