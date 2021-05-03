import axios from 'lib/scripts/axios';
import config from './config';

export interface IresData {
    info: {
        license_text: string;
    };
    data: [];
}

const apis = {
    getPosts: async (): Promise<IresData> => {
        const response = await axios.get(`?limit=${config.POSTS_LIMIT}&fields=id,title,image_id,date_display`);
        return response.data;
    },

    getPost: async (postId: string | number): Promise<IresData> => {
        const response = await axios.get(`/${postId}`);
        return response.data;
    }
};

export default apis;
