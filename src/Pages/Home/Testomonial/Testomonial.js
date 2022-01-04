import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Fade from 'react-reveal/Fade';

import useAuth from '../../../hooks/useAuth';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
    Autoplay,
    Navigation,
    EffectCoverflow,
    Pagination,
} from "swiper/core";
import { Card } from 'react-bootstrap';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Testomonial = () => {
    const [allReviews, setAllReviews] = useState([]);
    const { setLoading } = useAuth();
    SwiperCore.use([EffectCoverflow, Autoplay, Navigation, Pagination]);




    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data);
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                    footer: '<a href="">Why do I have this issue?</a>'
                })

            })
            .finally(() => setLoading(false))
    }, [setLoading]);

    return (
        <div id="review" className="py-5 bg-light reviews-section" style={{ minHeight: '500px' }}>
            <div style={{ width: '98%', margin: '0 auto' }}>
                <Fade bottom duration={3000} distance="50px">
                    <h2 className="pb-5 fw-bold">CLIENT REVIEWS</h2>
                </Fade>
                <Fade bottom duration={3000} distance="50px">
                    <Swiper
                        loop={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 60,
                            stretch: 5,
                            depth: 100,
                            modifier: 2,
                            // slideShadows: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                    >
                        {allReviews.map((review) => {
                            return (
                                <SwiperSlide className="swiper-slide"
                                    key={review._id}>
                                    <div>
                                        {console.log(review)}
                                        <Card className='h-100 border-0 shadow-sm p-3' style={{ borderRadius: '10px' }}>
                                            <Card.Img variant="top" src={review.img} />
                                            <Card.Body>
                                                <Card.Title>{review.name}</Card.Title>
                                                <p className='m-0 p-0 text-start'>{review.email}</p>
                                                <Box
                                                    sx={{
                                                        width: 200,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        marginTop: '0px'
                                                    }}
                                                >
                                                    <Rating className="mt-0"
                                                        name="text-feedback"
                                                        value={review.ratings}
                                                        readOnly
                                                        precision={0.5}
                                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                                    />
                                                    <Box sx={{ ml: 2 }}>{labels[review.ratings]}</Box>
                                                </Box>
                                                <Card.Text className='text-start border' style={{ fontSize: '14px' }}>
                                                    <i>{review.description}</i>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </Fade>

            </div>

        </div>
    );
};

export default Testomonial;