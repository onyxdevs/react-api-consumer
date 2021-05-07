import axios from 'lib/scripts/axios';
import config from './config';

type resDataType = {
    info: {
        license_text: string;
    };
    data: [];
};

const apis = {
    getPosts: async (): Promise<resDataType> => {
        const response = await axios.get(`?limit=${config.POSTS_LIMIT}&fields=id,title,image_id,date_display`);
        return response.data;
    },

    getPost: async (postId: string | number): Promise<resDataType> => {
        const response = await axios.get(`/${postId}`);
        return response.data;
    }
};

export default apis;
