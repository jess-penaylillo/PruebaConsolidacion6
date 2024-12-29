// src/services/api.js
import axios from 'axios';

// URL base de la API (usa tu clave de API)
const API_KEY = 'c7c2df23bc554ecf9caea20fea804fb7';  // Reemplaza esto con tu clave API real
const BASE_URL = 'https://api.rawg.io/api/';

const api = axios.create({
    baseURL: BASE_URL,
    params: {
        key: API_KEY,
    },
});

// Realizar una solicitud para obtener los juegos
export const fetchGames = async () => {
    try {
        const response = await api.get('games');  // Ejemplo de endpoint para obtener juegos
        return response.data;
    } catch (error) {
        console.error('Error al obtener juegos:', error);
        throw error;
    }
};

export default api;