interface Coordinates {
    latitude: number;
    longitude: number;
}

export const calculateDistance = (
    from: Coordinates,
    to: Coordinates,
): number => {
    const earthRadius = 6371;

    const toRadians = (degrees: number) => (degrees * Math.PI) / 180;

    const latitudeDifference = toRadians(
        to.latitude - from.latitude,
    );

    const longitudeDifference = toRadians(
        to.longitude - from.longitude,
    );

    const a =
        Math.sin(latitudeDifference / 2) ** 2 +
        Math.cos(toRadians(from.latitude)) *
        Math.cos(toRadians(to.latitude)) *
        Math.sin(longitudeDifference / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return earthRadius * c;
};