import React from "react";

const Testimonials = () => {
    return (

        <div className="parent" style={{ background: "orange", padding: '5%' }}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                    <h1 className="mb-4" style={{ fontFamily: "Lato", color: 'green' }}>Testimonials</h1>
                    <p className="mb-4 pb-2 mb-md-5 pb-md-0">
                        Hear what some of our customers have to say about our exeptional service and wide range of products
                        You can also let us know what u think by filling in the review <a href="https://www.google.com" style={{ textDecoration: 'none', color: 'green' }}>here</a>
                    </p>
                </div>
            </div>

            <div className="row text-center d-flex align-items-stretch">
                <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                        <div className="card-up" style={{ backgroundColor: 'warning' }}></div>
                        <div className="avatar mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="Testimonial1"
                                className="rounded-circle img-fluid" style={{ width: '100px', paddingTop: '50px' }} />
                        </div>
                        <div className="card-body">
                            <h4 className="mb-4" style={{ color: "green", fontStyle: "bold", fontWeight: "bold", fontFamily: "Roboto" }}>Michael Kamau</h4>
                            <hr />
                            <p className="dark-grey-text mt-4">
                                <i className="fas fa-quote-left pe-2"></i>My favourite online store, the goods always arrive on time
                                and in prestine condition.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5 mb-md-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                        <div className="card-up" style={{ backgroundColor: 'warning' }}></div>
                        <div className="avatar mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" alt="Testimonial2"
                                className="rounded-circle img-fluid" style={{ width: '100px', paddingTop: '50px' }} />
                        </div>
                        <div className="card-body">
                            <h4 className="mb-4" style={{ color: "green", fontStyle: "bold", fontWeight: "bold", fontFamily: "Helvetica" }}>Jame Onyango</h4>
                            <hr />
                            <p className="dark-grey-text mt-4">
                                <i className="fas fa-quote-left pe-2"></i>I shop with easymarkert all the time, very simple clicks and "Knock!, knock!" the delivery
                                man is already at my door.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-0 d-flex align-items-stretch">
                    <div className="card testimonial-card">
                        <div className="card-up" style={{ backgroundColor: 'orange' }}></div>
                        <div className="avatar mx-auto bg-white">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" alt="Testimonial3"
                                className="rounded-circle img-fluid" style={{ width: '100px', paddingTop: '50px' }} />
                        </div>
                        <div className="card-body">
                            <h4 className="mb-4" style={{ color: "green", fontStyle: "bold", fontWeight: "bold", fontFamily: "Helvetica" }}>Ojoo Hamilton</h4>
                            <hr />
                            <p className="dark-grey-text mt-4" style={{ colour: '' }}>
                                <i className="fas fa-quote-left pe-2"></i>As an expat living in a new city, easymarkert has saved me the hustle of moving around
                                places i don't know. its just like shopping in a mall without all the walking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Testimonials;