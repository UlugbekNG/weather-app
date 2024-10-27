interface Coordinates {
    lat: number;
    lng: number;
}

interface LocationError {
    code: number;
    message: string;
}

export default function useLocation() {
    const getLocation = (): Promise<Coordinates> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position: GeolocationPosition) => {
                    resolve({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error: GeolocationPositionError) => {
                    reject({
                        code: error.code,
                        message: error.message
                    } as LocationError);
                }
            );
        });
    };

    return {
        getLocation
    };
}
