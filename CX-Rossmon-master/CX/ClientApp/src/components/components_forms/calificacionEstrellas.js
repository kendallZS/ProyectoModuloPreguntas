import React, { useState } from "react";
import "../mantenimientos_forms/css/formPasos.css";
import { Form } from "react-bootstrap";


const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (

        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                     <button style={{ background: "transparent", border: "none", outline: "none", cursor: "pointer", fontSize: 45 }}
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                        </button>
                );
            })}
        </div>
    );
};
export default StarRating;