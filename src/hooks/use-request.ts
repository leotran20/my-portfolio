import axios from 'axios';
import {useAppDispatch, useAppSelector} from '../app/hooks';
import {setMiddlewareError} from '../features/slices/globalSlice';
import {CustomError} from '../types/custom-error';

type UseRequestProps = {
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    body?: any,
    // eslint-disable-next-line no-unused-vars
    onSuccess?: (response: any) => void
}

const useRequest = ({url, method, body, onSuccess}: UseRequestProps) => {
    const dispatch = useAppDispatch();
    const errors = useAppSelector(state => state.global.middlewareError);
    const doRequest = async (props = {}) => {

        try {
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
            dispatch(setMiddlewareError(new CustomError(err.message)));
        }
    };

    return {doRequest, errors};

};


export default useRequest;
