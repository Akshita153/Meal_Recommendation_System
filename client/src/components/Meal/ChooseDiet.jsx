import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import veg from '../../assets/vegg.png'
import nonveg from '../../assets/non.png'
import egg from '../../assets/egg.png'
import vegan from '../../assets/vegan.png'
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer'

const ChooseDiet = () => {
    return (
        <div>
            <Box>
            <div style={{ background:'linear-gradient(to right, #4be643, #f6fc3a, #c46f6a, #f72d2d)', marginBottom:'-0.5rem', padding:'1rem'}}>
                    <h1 style={{textAlign:'center', color:'black'}}>Get Your Meal Now!</h1>
                </div>
                <Grid container>
                
                    <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '2rem', background: 'linear-gradient(to bottom, #4be643, white)' }}>
                        <Link style={{textDecoration:'none'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={veg} style={{ height: '15rem' }} alt="" />
                                <button type="button" className="btn btn-success">Vegetarian</button>
                            </Box>
                        </Link>

                    </Grid>



                    <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '2rem', background: 'linear-gradient(to bottom, #f6fc3a, white)' }}>
                        <Link to='/' style={{textDecoration:'none'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={egg} style={{ height: '15rem' }} alt="" />
                                <button type="button" className="btn btn-warning" style={{color:'white'}}>Egg</button>
                            </Box>
                        </Link>
                    </Grid>

                    <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '2rem', background: 'linear-gradient(to bottom, #c46f6a, white)' }}>
                        <Link  style={{textDecoration:'none'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={vegan} style={{ height: '15rem' }} alt="" />
                                <button type="button" className="btn " style={{ backgroundColor: '#c46f6a', color:'white' }}>Vegan</button>
                            </Box>
                        </Link>

                    </Grid>
                    <Grid item xs={6} md={3} sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '2rem', background: 'linear-gradient(to bottom, #f72d2d, white)' }}>
                        <Link style={{textDecoration:'none'}}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                                <img src={nonveg} style={{ height: '13.5rem' }} alt="" />
                                <br />
                                <button type="button" className="btn btn-danger">Non Veg</button>
                            </Box>
                        </Link>

                    </Grid>

                </Grid>
            </Box>
            <Footer/>
        </div>
    )
}

export default ChooseDiet
