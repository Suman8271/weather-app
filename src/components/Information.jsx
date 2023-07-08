
import { Box, Typography, styled } from '@mui/material';
import { LocationOn, SettingsBrightness, Opacity, Brightness5, Brightness6, Dehaze, Cloud } from '@mui/icons-material'

const Row = styled(Typography)({
    padding: 10,
    fontSize: 20,
    letterSpacing: 2,
    '& > svg': {
        marginRight: 10
    }
});

const Error = styled(Typography)({
    color: '#FF0000',
    margin: 150,
    padding: 20,
    
})

const Information = ({ result }) => {

    return (
        result && Object.keys(result).length > 0 ?
        <Box style={{margin: '30px 60px'}}>
            <Row style={{backgroundColor: '#E893CF' }}><LocationOn />Location: {result.name}, {result.sys.country}</Row>
            <Row style={{backgroundColor: '#DF2E38'}}><SettingsBrightness />Temperature: {result.main.temp}°</Row>
            <Row style={{backgroundColor: '#9AC5F4'}}><Opacity />Humidity: {result.main.humidity}%</Row>
            <Row style={{backgroundColor: '#FF6666'}}><Brightness5 />Sun Rise: {new Date(result.sys.sunrise * 1000).toLocaleTimeString()}</Row>
            <Row style={{backgroundColor: '#F7DB6A'}}><Brightness6 />Sun Set: {new Date(result.sys.sunset * 1000).toLocaleTimeString()}</Row>
            <Row style={{backgroundColor: '#FF7B54'}}><Dehaze />Weather: {result.weather[0].main}</Row>
            <Row style={{backgroundColor: '#99A98F'}}><Cloud />Clouds: {result.clouds.all}%</Row>
        </Box>
        : <Error>Please enter the values to check weather</Error>
    )
}

export default Information;