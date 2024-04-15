import React, { useState } from 'react';
import './ProfilePage.css';
import Sidebar from './Sidebar'
import { Box, Grid } from '@mui/material'
import Navbar from '../Navbar/Navbar'
import chilli from '../../assets/chili.webp'

const Profile = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [totalCalories, setTotalCalories] = useState(1200);
    const calculateTotalCalories = () => {
        // Your calorie calculation logic here based on height, weight, age, gender, and activity level
        // For example:
        let calculatedCalories = 1200; // Calculate based on user input
        setTotalCalories(calculatedCalories);
    }

    return (
        <div className='bg'>
            <div className="" style={{ marginTop: '-4rem' }}><Navbar /></div>

            <Box sx={{ flexGrow: 1, marginTop: "4rem", paddingTop: '3rem' }}>
                <Grid container spacing={2}>
                    <Grid
                        position="fixed"
                        item
                        xs={2}
                        height="100vh"
                        sx={{ backgroundColor: "#fad3c8", overflow: "inherit" }}
                    >
                        <Sidebar />
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        sx={{
                            marginLeft: { xs: "1rem", sm: "2rem", md: "14.5rem" },
                            marginTop: "1rem",
                            height: "100vh",
                        }}
                    >
                        <div className="profile-container">
                            <header>
                                <h1>Profile Page</h1>
                            </header>
                            <main>
                                <Box>
                                    <Grid container>
                                        <Grid item xs={5}>

                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className="profile-image" style={{ backgroundColor: '#fce4de', borderRadius:'8rem',height:'120px'  }}>
                                                <img src={chilli} alt="Funky Food Image" style={{ height: '8rem', padding:'1rem' }} />
                                            </div>
                                        </Grid>
                                        <Grid item xs={5}>

                                        </Grid>
                                    </Grid>
                                </Box>

                                <div className="profile-form" style={{}}>
                                    <h2>Personal Information</h2>
                                    <form>
                                        <label>Name:</label>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

                                        <label>Email:</label>
                                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                        <label>Height (cm):</label>
                                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} required />

                                        <label>Weight (kg):</label>
                                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} required />

                                        <label>Age:</label>
                                        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />

                                        <label>Gender :</label>
                                        <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />

                                        <label>Activity Level :</label>
                                        <input type="text" value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} required />


                                    </form>
                                    <div className="total-calories">
                                        <p>Total Daily Calorie Intake: {totalCalories} kcal</p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Profile
