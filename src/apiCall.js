import { CONFIG } from './config';
import axios from 'axios';

export class ApiCall{

    static getCurrentWeatherData = async(cityName) =>{
        let url = CONFIG.WEATHER_API.replace('~',cityName);
        return await axios.get(url + CONFIG.WEATHER_API_KEY);
    }

}