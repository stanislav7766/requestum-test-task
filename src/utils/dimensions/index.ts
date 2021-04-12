import {GetDimensionsParams} from './types';

export const getWindowDimensions = (): GetDimensionsParams => {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height,
    };
};
