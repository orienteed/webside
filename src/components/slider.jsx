import React from 'react'
import Slider from "react-slick"


export default props => {

    const settings = {
        autoplay: true,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [ 
            {
                breakpoint: 890,
                settings: {
                     slidesToShow : 2
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow : 1
                }
            }
        ]
    }
    const images = props.content.media
    
    return (
        < >
            <Slider {...settings}>
                {
                    images.map(({ description, file }) =>
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