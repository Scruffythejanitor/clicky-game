import React from "react";

function CardDisplay(props) {

    return (
        <div className="container">
            <div className="img-container row">
                {props.cast.map(item => (
                    <div key={item.id} className="col-md-3 pb-4">
                        <div className="card shadow ">
                            <div clasName="card-body">

                                <img onClick={() => {
                                    props.onClick(item.id)
                                }
                                } className="img-fluid" alt={item.name} src={item.image} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardDisplay;