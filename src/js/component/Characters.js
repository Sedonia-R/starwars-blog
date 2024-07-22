import React from 'react';
import { useNavigate } from "react-router-dom";

export const Characters = () => {
    const navigate = useNavigate();

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><strong>Luke Skywalker</strong></h5>
                        <p className="card-text">
                            <pre>
                                Birth Year: 19BBY{"\n"}
                                Species: Unknown{"\n"}
                                Homeworld: Tatooine{"\n"}
                            </pre>
                        </p>
                        <div className="row">
                            <button 
                                className='btn btn-primary col-5 m-auto'
                                onClick={
                                    () => navigate("/single/:1")
                                }
                            >
                                Learn more!
                            </button>
                            {/* <div className='col-2'></div> */}
                            <button className='btn btn-black col-2 m-auto p-auto border border-warning'>💛</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a short card.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div> */}
        </div>
    );
};