import axios from 'axios';
import {useState} from 'react';

type UseRequestProps = {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    // eslint-disable-next-line no-unused-vars
    onSuccess?: (response: any) => void,
    // eslint-disable-next-line no-unused-vars
    onError?: (error: any, event?: any) => void
}

const useRequest = ({url, method, body, onSuccess, onError}: UseRequestProps) => {
    const [errors, setErrors] = useState(null);
    const doRequest = async (props = {}) => {

        try {
            setErrors(null);
            // @ts-ignore
            const response = await axios[method.toLowerCase()](url, {
                ...body, ...props
            });

            if (onSuccess) {
                onSuccess(response);
            }

            return response.data;
        } catch (err: any) {
            console.log(err);
            setErrors(err);
            if (onError) {
                onError(err);
            }
        }
    };

    return {doRequest, errors};

};


export default useRequest;
