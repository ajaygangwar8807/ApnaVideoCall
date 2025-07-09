let IS_PROD = true;
const server = IS_PROD ?
    "https://apnavideocallbackend-o481.onrender.com" :

    "http://localhost:8000"


export default server;