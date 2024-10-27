export default defineNuxtPlugin(async (nuxtApp) => {
    const { weatherApiKey } = useRuntimeConfig().public

    const { getLocation } = useLocation()
    const { lat, lng } = await getLocation()

    const api = $fetch.create({
        retry: false,
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            key: weatherApiKey,
            lang: 'ru',
            q: `${lat},${lng}`
        }
    })

    // Expose to useNuxtApp().$api
    return {
        provide: {
            api
        }
    }
})
