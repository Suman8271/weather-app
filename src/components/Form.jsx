import { useState } from 'react';
import { Box, InputBase, Button, styled, colors } from '@mui/material';
import { getWeather } from '../services/api';

const Container = styled(Box)({
    background: '#001C30',
    padding: 10,
    borderRadius: 10

});

const Input = styled(InputBase)({
    color: '#FFF',
    marginRight: 20,
    fontSize: 18
});

const GetButton = styled(Button)({
    background: '#6527BE'
})

const Form = ({ setResult }) => {
    const [data, setData] = useState({ city: '', country: '' })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const getWeatherInfo = async () => {
        let response = await getWeather(data.city, data.country);
        setResult(response);
    }

    return (
        <Container>
            <Input 
                placeholder="City"
                onChange={(e) => handleChange(e)}
                name="city"
            />
            <Input 
                placeholder="Country"
                onChange={(e) => handleChange(e)}
                name="country"
            />
            <GetButton
                variant="contained"
                onClick={() => getWeatherInfo()}
            >Get Weather</GetButton>
        </Container>
    )
}

export default Form;