import React from 'react'
import Slider from "react-slick";


export default props => {

    const settings = {
        autoplay: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        < >
            <Slider {...settings}>
                {
                    props.content.media.map(({ description, file }) =>
                        <div key={file.url} className="slide">
                            <img src={file.url} alt=""/>
                            <span>{description}</span>
                        </div>
                    )
                }
            </Slider>
        </>
    )
}