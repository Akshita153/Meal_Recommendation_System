import * as React from 'react';
import Navbar from '../Navbar/Navbar'
import { Box, Grid } from '@mui/material';
import icon from '../../assets/icon.png'
import offer from '../../assets/offerr.jpg'
import './aboutUs.css'
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <div className="style">
            <div className='mission'>
                <div>
                    <Navbar />
                </div>

                <div className="">
                    <Box sx={{ flexGrow: 1, backgroundColor: 'yellow', height: '20rem' }}>
                        <Grid container >
                            <Grid item xs={3} sx={{ marginTop: '4rem', display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' }, marginLeft:'2rem' }} >
                                <img src={icon} alt="" style={{ height: '50%', }} />
                            </Grid>
                            <Grid item xs={12} md={8} sx={{ marginTop: '8rem', }}>
                                <h2 className='head1'>What is FitFuel ?</h2>
                                <p>At FitFuel, we believe that a healthy lifestyle begins with mindful eating. Our goal is to simplify the process of planning nutritious meals tailored to your unique preferences and dietary requirements. We strive to make healthy eating enjoyable and accessible to everyone.</p>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className="" sx={{ marginTop: { xs: '2rem', sm: '2rem', md: '2rem', } }}>
                        <Grid container>
                            <Grid item xs={12} sm={5} sx={{padding:'2rem'}} >
                                <h2>Our Mission</h2>
                                <p>At FitFuel, we believe that a healthy lifestyle begins with mindful eating. Our goal is to simplify the process of planning nutritious meals tailored to your unique preferences and dietary requirements. We strive to make healthy eating enjoyable and accessible to everyone.</p>
                                <p>At FitFuel, we believe that a healthy lifestyle begins with mindful eating. Our goal is to simplify the process of planning nutritious meals tailored to your unique preferences and dietary requirements. We strive to make healthy eating enjoyable and accessible to everyone.</p>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4} lg={4}>
                            </Grid>
                        </Grid>
                    </Box>
                </div>

            </div>
            <div className="offer">
                <Box className="" sx={{ marginTop: { xs: '0rem', sm: '0rem', md: '0rem', }, backgroundColor: 'yellow', height: '450px' }}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4} lg={6} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' } }} >
                            <img src={offer} alt="" style={{ padding: '2rem' }} />
                        </Grid>
                        <Grid item xs={12} sm={5} sx={{padding:'2rem', marginTop: '2rem'}}>
                            <h2>What We Offer!</h2>
                            <ul>
                                <li>Personalized Meal Plans: Our smart algorithm crafts meal plans based on your dietary preferences, calorie goals, and any restrictions you may have.</li>
                                <li>Recipe Variety: Explore a diverse range of recipes, each carefully curated to ensure a balance of flavors, nutrients, and satisfaction.</li>
                                <li>Nutritional Insights: Gain valuable insights into the nutritional content of your meals, helping you make informed choices that align with your health and wellness goals.</li>
                            </ul>
                        </Grid>

                    </Grid>
                </Box>

                <Box className="" sx={{ marginTop: { xs: '2rem', sm: '2rem', md: '2rem', } }}>
                    <Grid container>
                        <Grid item xs={12} sm={4} sx={{padding:'2rem'}} >
                            <h2>Why Choose FitFuel?</h2>
                            <ul>
                                <li>User-Centric Design: Our platform is designed with you in mind, providing an intuitive and seamless experience from meal planning to recipe execution.</li>
                                <li>Science-Backed Approach: Backed by nutritional science and Spoonacular API database, our algorithms ensure that your meal plans are both delightful and nutritionally sound</li>
                                <li>User-Friendly Interface: An intuitive platform for easy navigation and planning.</li>
                                <li>Flexibility and Variety: Enjoy the flexibility to customize your meal plans, swap recipes, and discover new culinary delights to keep your journey exciting</li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4}>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs
