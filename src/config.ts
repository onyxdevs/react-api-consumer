const config = {
    APP_BASE: process.env.REACT_APP_URL || '/files/battlefield/react/react-api-consumer/',
    API_URL: process.env.REACT_APP_API_URL || 'https://api.artic.edu/api/v1/artworks',
    POSTS_LIMIT: process.env.REACT_APP_POSTS_LIMIT || 20
};

export default config;
