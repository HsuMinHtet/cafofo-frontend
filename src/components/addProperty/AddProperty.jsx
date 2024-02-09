import React, { useState } from 'react';
import { Grid, TextField, Select, MenuItem, Button, InputLabel, Typography } from '@mui/material';

const YourFormComponent = () => {
    const [propertyName, setPropertyName] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [zip, setZip] = useState('');
    const [price, setPrice] = useState('');
    const [numberOfBed, setNumberOfBed] = useState('');
    const [numberOfBathRoom, setNumberOfBathRoom] = useState('');
    const [factAndFeatures, setFactAndFeatures] = useState('');
    const [homeType, setHomeType] = useState('');
    const [dealType, setDealType] = useState('');
    const [area, setArea] = useState('');
    const [image, setImage] = useState('');

    const handleUpload = () => {
        // Add your logic for handling form submission
        //upload: 
        //save it
    };

    const handleCreate = () => {
        // Add your logic for handling form submission
        //upload: 
        //save it
    };

    return (
        
        <Grid container justifyContent="center" alignItems="center" spacing={2} marginTop={1}>
            <Typography variant="h3" align="center">
                    CREATE PROPERTY
                </Typography>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Property Name" id="propertyName" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                        <TextField label="Number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <TextField label="State" id="state" value={state} onChange={(e) => setState(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Street" id="street" value={street} onChange={(e) => setStreet(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="ZIP" id="zip" value={zip} onChange={(e) => setZip(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="City" id="city" value={city} onChange={(e) => setCity(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField label="Country" id="country" value={country} onChange={(e) => setCountry(e.target.value)} sx={{ width: '100%' }} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Number of Bedrooms" id="numberOfBed" value={numberOfBed} onChange={(e) => setNumberOfBed(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Number of Bathrooms" id="numberOfBathRoom" value={numberOfBathRoom} onChange={(e) => setNumberOfBathRoom(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Facts and Features" id="factAndFeatures" value={factAndFeatures} onChange={(e) => setFactAndFeatures(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Grid item xs={12} marginLeft={2} justifyContent="center" alignItems="center">
                    <InputLabel htmlFor="homeType">Home Type</InputLabel>
                </Grid>
                <Select id="homeType" value={homeType} onChange={(e) => setHomeType(e.target.value)} fullWidth fullWidth>
                    <MenuItem value="APARTMENT">APARTMENT</MenuItem>
                    <MenuItem value="HOUSE">HOUSE</MenuItem>
                    <MenuItem value="CONDO">CONDO</MenuItem>
                    {/* Add other options for home type */}
                </Select>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
            <Grid item xs={12} marginLeft={2} justifyContent="center" alignItems="center">            
                <InputLabel htmlFor="dealType">Deal Type</InputLabel>
            </Grid>
                <Select id="dealType" value={dealType} onChange={(e) => setDealType(e.target.value)} fullWidth>
                    <MenuItem value="FOR_SALE">FOR SALE</MenuItem>
                    <MenuItem value="FOR_RENT">FOR RENT</MenuItem>
                </Select>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <TextField label="Area" id="area" value={area} onChange={(e) => setArea(e.target.value)} fullWidth />
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <div>
                    <InputLabel htmlFor="image">Images</InputLabel>
                    <input type="file" id="image" accept="image/*" multiple  onChange={(event) => {
                                                                                            setImage(event.target.files)}}/>
                    <Grid item marginTop={1} xs={12} container justifyContent="center" alignItems="center">
                        <Button variant="contained" color='success' onClick={handleUpload} sx={{ width: '30%' }}>Upload</Button>
                    </Grid>

                </div>
            </Grid>
            <Grid item xs={12} container justifyContent="center" alignItems="center">
                <Button variant="contained" onClick={handleCreate} sx={{ width: '40%' }}>Add Property</Button>
            </Grid>
        </Grid>
    );
};

export default YourFormComponent;
