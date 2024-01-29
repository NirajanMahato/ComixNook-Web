import { useRef, useEffect, useState } from "react";
import "./newSlidebar.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sliderData from "./sliderData.jsx";

const NewSlidebar = () => {
    const slideRef = useRef(null);
    const [sliderItems, setSliderItems] = useState([]);

    useEffect(() => {
        // Fetch slider items from the API (you can use an HTTP request here)
        setSliderItems(sliderData);
    }, []);

    const handleNextClick = () => {
        if (slideRef.current) {
            const items = slideRef.current.querySelectorAll(".slider-item");
            slideRef.current.appendChild(items[0]);
        }
    };

    const handlePrevClick = () => {
        if (slideRef.current) {
            const items = slideRef.current.querySelectorAll(".slider-item");
            slideRef.current.prepend(items[items.length - 1]);
        }
    };

    return (
        <div className="slider-container">
            <div className="slide" ref={slideRef}>
                {sliderItems.map((item, index) => (
                    <div
                        key={index}
                        className="slider-item"
                        style={{ backgroundImage: `url(${item.imageUrl})`, borderRadius: "10px" }}
                    >
                        <div className="slider-content">
                            <div className="name">{item.name}</div>
                            <div className="des">{item.description}</div>
                            <button>See More</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slider-button">
                <button className="slider-prev" onClick={handlePrevClick}>
                    <IoIosArrowBack />
                </button>
                <button className="slider-next" onClick={handleNextClick}>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default NewSlidebar;
