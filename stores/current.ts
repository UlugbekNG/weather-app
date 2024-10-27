import { defineStore } from "pinia";
import type { Ref } from "vue";
import type {ILocation, ICurrentWeather, IForecast} from "~/types/current";


export const useCurrentStore = defineStore("current", () => {
    // const { weatherApiKey } = useRuntimeConfig().public
    const currentWeather: Ref<ICurrentWeather | null> = ref(null)
    const currentLocation: Ref<ILocation | any> = ref({
        name: "",
        region: "",
        country: "",
        lat: 0,
        lon: 0,
        tz_id: "",
        localtime_epoch: 0,
        localtime: "",
    })
    const forecastDays: Ref<IForecast | null> = ref(null)

    const { $api } = useNuxtApp()
    const getWeatherData = async () => {
        const response: { current: ICurrentWeather, location: ILocation, forecast: IForecast } = await $api(`/api/forecast.json`, {
            method: 'GET',
            params: {
                days: 10
            }
        })
        const { current, forecast, location } = response
        currentWeather.value = current
        currentLocation.value = location
        forecastDays.value = forecast
    }

    const todayForecastHours = computed(() => {
        let hours = forecastDays.value?.forecastday[0].hour
        if(!hours) return []
        const sunRise: string = forecastDays.value?.forecastday[0].astro.sunrise as string
        const sunSet: string = forecastDays.value?.forecastday[0].astro.sunset as string
        const currentHour = new Date().getHours()
        return hours.map((hour: any) => {
            return {
                time: hour.time,
                temperature: roundTemperature(hour.temp_c),
                time_epoch: hour.time_epoch,
                code: hour.condition.code,
                isDay: hour.is_day === 1,
                isNow: currentHour === new Date(hour.time).getHours(),
            }
        })
    })

    return {
        currentWeather,
        currentLocation,
        forecastDays,
        todayForecastHours,
        getWeatherData
    }
})
