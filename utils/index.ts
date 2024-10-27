import { weatherIcons } from "~/static";

export function roundTemperature(temperature: number): number {
    const rounded = Math.round(temperature);
    if(isNaN(rounded)) return 0;
    return rounded;
}

export function getWeatherIcon(code: number, is_day?: boolean): string {
    // @ts-ignore
    let icon = weatherIcons[code] || 'not-available.svg';
    // if icon name contains night or day, we need to check if it's night or day
    if(icon.includes('night') || icon.includes('day')) {
        if(is_day) {
            icon = icon.replace('night', 'day');
        } else {
            icon = icon.replace('day', 'night');
        }
    }

    return '/weather/' + icon as string
}
