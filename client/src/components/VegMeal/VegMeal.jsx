import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import {
    Box,
    TextField,
    Button,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    FormLabel, FormHelperText,
} from "@mui/material";
import Grid from '@mui/material/Grid';
import './veg.css'
import { useState } from 'react'
import milk from '../../assets/milk.gif'
import carrot from '../../assets/carrot.gif'
import tom from '../../assets/vegie.gif'
import tree from '../../assets/tree.gif'


const VegMeal = () => {
    var randomNumber = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;

    var v = randomNumber;
    var breakfastcal = v * 30 / 100;
    var breakfast_juice_cal = breakfastcal * 40 / 100;
    var juiceglass = Math.floor(breakfast_juice_cal / 141);
    //console.log(juiceglass);
    var maincourse = 0;
    
    //use states
    const [generatedBreakfast, setgeneratedBreakfast] = useState('');
    const [generatedLunch, setgeneratedLunch] = useState('');
    const [generatedDinner, SetGeneratedDinner] = useState('')

    const [goal, setGoal] = useState('2');
    const [meal, setMeal] = useState('1');
    const [mainCal, setMainCal] = useState('');
    const [rotiType, setRotiType] = useState('');
    const [rotiCal, setRotiCal] = useState('');
    const [riceType, setRiceType] = useState('');
    const [riceCal, setRiceCal] = useState('');
    const [dinnermain, setdinnermain] = useState('');

    const juice = [
        'Milk',
        'Orange juice',
        'Beetroot Juice',
        'Milk',
        'Pomegranate (Fruit of you choice)',
    ];
    const randomJuice = juice[Math.floor(Math.random() * juice.length)];



    const mealgeneration = () => {
        var randomNumber = Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;

        var tcal = randomNumber;
        var bf_cal;
        var l_cal;
        var d_cal;
        var randomJuice;
        var juiceglass;
        var maincourse;


        switch (goal) {
            case '1':
                tcal = tcal - (tcal * 9 / 100);
                bf_cal = tcal * 25 / 100;
                l_cal = tcal * 40 / 100;
                d_cal = tcal * 35 / 100;
                break;
            case '2':
                bf_cal = tcal * 25 / 100;
                l_cal = tcal * 40 / 100;
                d_cal = tcal * 35 / 100;
                break;
            case '3':
                tcal = tcal + (tcal * 10 / 100);
                bf_cal = tcal * 25 / 100;
                l_cal = tcal * 40 / 100;
                d_cal = tcal * 35 / 100;
                break;
        }

        switch (meal) {
            case '1':
                SetGeneratedDinner('');
                setgeneratedLunch('');

                var breakfast_juice_cal = bf_cal * 40 / 100;
                juiceglass = Math.floor(breakfast_juice_cal / 141);
                const juice = [
                    'Milk',
                    'Orange juice',
                    'Beetroot Juice',
                    'Milk',
                    'Pomegranate (Fruit of you choice)',
                ];
                randomJuice = juice[Math.floor(Math.random() * juice.length)];

                const meals = [
                    'Sprouts Salad',
                    'Vegetable Poha',
                    'Idli Sambhar',
                    'Vegetable salad & apple',
                    'Upma',
                    'Adai Dosa & Ragi Rava Idli',
                    'Sabudana Khichdi',
                    'Dal Paratha',
                ];


                const randomMeal = meals[Math.floor(Math.random() * meals.length)];
                setgeneratedBreakfast(randomMeal);

                break;

            case '2':
                setgeneratedBreakfast('');
                SetGeneratedDinner('');
                maincourse = Math.floor(l_cal * 37 / 100);
                setMainCal(maincourse);
                setRotiCal(l_cal * 28 / 100);
                setRiceCal(l_cal * 35 / 100);

                const main_dishes = [
                    'Paneer Bhurji',
                    'Mutter Paneer',
                    'LadyFinger',
                    'Bean',
                    'Soyabean',
                    'Brinjal',
                    'Mashed Potato'
                ];

                const random_dish = main_dishes[Math.floor(Math.random() * main_dishes.length)];
                setgeneratedLunch(random_dish);

                const roti_type = [
                    'Chapati',
                    'Bhakri',
                ]

                setRotiType(roti_type[Math.floor(Math.random() * roti_type.length)]);

                const rice_type = [
                    'Daal & Rice',
                    'Veg Pulao'
                ]
                setRiceType(rice_type[Math.floor(Math.random() * rice_type.length)])
                break;

            case '3':
                setgeneratedLunch('');
                setgeneratedBreakfast('');
                setdinnermain(Math.floor(d_cal * 37 / 100));
                setRotiCal(d_cal * 28 / 100);
                setRiceCal(d_cal * 35 / 100);

                const dinner_dishes = [
                    'Paneer Bhurji',
                    'Mutter Paneer',
                    'LadyFinger',
                    'Bean',
                    'Soyabean',
                    'Brinjal',
                    'Mashed Potato'
                ];

                SetGeneratedDinner(dinner_dishes[Math.floor(Math.random() * dinner_dishes.length)])
                
                const roti__type = [
                    'Chapati',
                    'Bhakri',
                ]

                setRotiType(roti__type[Math.floor(Math.random() * roti__type.length)]);

                const rice__type = [
                    'Daal & Rice',
                    'Veg Pulao'
                ]
                setRiceType(rice__type[Math.floor(Math.random() * rice__type.length)])

        }

    };


    return (
        <div>
            <Navbar />
            <div style={{ background: 'linear-gradient(to bottom, #4be643, white)' }}>
                <Grid container spacing={0}>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <img
                                src={milk}
                                alt="Your Gif"
                                style={{ width: '100%', height: 'auto', marginTop: '3rem' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ marginTop: '4rem', padding: '3rem' }}>
                        <Box sx={{ backgroundColor: '#c0cfbe', padding: '1rem', borderRadius: '20px' }}>
                            <FormControl fullWidth>
                                <FormLabel sx={{ color: 'green', fontFamily: 'fantasy', fontSize: '1.5rem', textAlign: 'center' }} >Set Your Goal</FormLabel>

                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Goal</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        sx={{ margin: '0.7rem 0.5rem', backgroundColor: '#d3f7cd' }}
                                        label="Goal"
                                        value={goal}
                                        onChange={(e) => setGoal(e.target.value)}
                                    >
                                        <MenuItem value={'1'}>Loose Weight</MenuItem>
                                        <MenuItem value={'2'}>Maintain Weight</MenuItem>
                                        <MenuItem value={'3'}>Gain Weight</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormLabel sx={{ color: 'green', fontFamily: 'fantasy', fontSize: '1.5rem', textAlign: 'center' }} >Type of Meal</FormLabel>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Meal</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        sx={{ margin: '0.5rem 0.5rem', backgroundColor: '#d3f7cd', }}
                                        label="Meal"
                                        value={meal}
                                        onChange={(e) => setMeal(e.target.value)}
                                    >
                                        <MenuItem value={'1'}>Breakfast</MenuItem>
                                        <MenuItem value={'2'}>Lunch</MenuItem>
                                        <MenuItem value={'3'}>Dinner</MenuItem>
                                    </Select>
                                </FormControl>
                            </FormControl>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant="contained" color="success" onClick={mealgeneration}>Generate Meal</Button>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <img

                                src={carrot}
                                alt="Your Gif"
                                style={{ width: '100%', height: 'auto', marginTop: '3rem' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <img

                                src={tom}
                                alt="Your Gif"
                                style={{ width: '100%', height: 'auto', marginTop: '3rem' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} sx={{ marginTop: '0rem', padding: '3rem' }}>
                        {generatedBreakfast && (
                            <div style={{ textAlign: 'center' }} className="result-container">
                                <h2>Generated Breakfast:</h2>

                                <table className="table table-success table-striped table-hover">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th scope="col">Sr.no</th>
                                            <th scope="col">Dish</th>
                                            <th scope="col">Calorie</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{generatedBreakfast}</td>
                                            <td>{breakfastcal - breakfast_juice_cal}</td>
                                            <td>1 Plate</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{randomJuice}</td>
                                            <td>{breakfast_juice_cal}</td>
                                            <td> {juiceglass} glass</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {generatedLunch && (
                            <div style={{ textAlign: 'center' }} className="result-container">
                                <h2>Generated Lunch:</h2>

                                <table className="table table-success table-striped table-hover">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th scope="col">Sr.no</th>
                                            <th scope="col">Dish</th>
                                            <th scope="col">Calorie</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{generatedLunch}</td>
                                            <td>{mainCal}</td>
                                            <td>1 Bowl</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{rotiType}</td>
                                            <td>{rotiCal}</td>
                                            <td>{Math.floor(rotiCal/100)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>{riceType}</td>
                                            <td>{riceCal}</td>
                                            <td>1 Bowl</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}
                        {generatedDinner && (
                            <div style={{ textAlign: 'center' }} className="result-container">
                                <h2>Generated Dinner:</h2>

                                <table className="table table-success table-striped table-hover">
                                    <thead className='table-dark'>
                                        <tr>
                                            <th scope="col">Sr.no</th>
                                            <th scope="col">Dish</th>
                                            <th scope="col">Calorie</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{generatedDinner}</td>
                                            <td>{dinnermain}</td>
                                            <td>1 Bowl</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>{rotiType}</td>
                                            <td>{rotiCal}</td>
                                            <td>{Math.floor(rotiCal/100)}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>{riceType}</td>
                                            <td>{riceCal}</td>
                                            <td>1 Bowl</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        
                    </Grid>
                    <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box>
                            <img

                                src={tree}
                                alt="Your Gif"
                                style={{ width: '100%', height: 'auto', marginTop: '1rem' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </div>

            {/* 
            <div className="meal-generator-container">
                <h1>Veg Meal Generator</h1>
                <div className="input-container">
                    <label htmlFor="caloriesInput">Enter Calories:</label>

                </div>
                <button onClick={generateMeal}>Generate Meal</button>
                {generatedBreakfast && (
                    <div className="result-container">
                        <h2>Generated Meal:</h2>
                        <p>{generatedBreakfast} cal: {breakfastcal - breakfast_juice_cal}</p>
                        <p>{randomJuice} <br />cal: {breakfast_juice_cal} Glass: {juiceglass}</p>
                    </div>
                )}
            </div> */}

            {/* <Footer /> */}
        </div>
    )
}

export default VegMeal
