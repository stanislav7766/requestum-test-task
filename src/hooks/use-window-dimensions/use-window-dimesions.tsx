import {useState, useEffect, useCallback} from 'react';
import {getWindowDimensions} from '~/utils/dimensions';
import {GetDimensionsParams} from '~/utils/dimensions/types';

export const useWindowDimensions = (): GetDimensionsParams => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleResize = useCallback(() => {
        setWindowDimensions(getWindowDimensions());
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return windowDimensions;
};
