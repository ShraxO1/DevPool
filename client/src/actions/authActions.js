import { TEST_DISPATCH } from './types';

//Register user
export const resgisteruser = userData =>{
    return {
        type: TEST_DISPATCH,
        payload: userData
    };
};