import { joinURL } from "ufo";

export default defineEventHandler(async (event): Promise<string> => {
    const { baseUrl } = useRuntimeConfig();
    const path: string = event.path.replace(/^\/api\//, '');

    const url: string = joinURL(baseUrl, path);
    return proxyRequest(event, url);
})
