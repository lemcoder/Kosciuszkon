import axiosInstance from './AxiosInstance';

export abstract class AHttpClient {

    public static getEtapEdukacyjny = () =>
        axiosInstance
            .get<any>('etap_edukacyjny/')
            .then(response => response.data);

    public static getPlacowki = (query: { [key: string]: any } = {}) => {
        const queryParamArray = Object.keys(query)
            .map((key) => [ `${key}=${query[key]}` ])
            .join('&');

        const queryParam = queryParamArray.length ? `?${queryParamArray}` : '';

        return axiosInstance
            .get<any>(`placowki/${queryParam}`)
            .then(response => response.data);
    };

    // public static getPage = (url: string, charset?: string) => {
    //     const queryString = charset
    //         ? `&fromCharset=${charset}`
    //         : '';

    //     return axiosInstance
    //         .get<string>(`proxy?q=${url}${queryString}`)
    //         .then(response => response.data);
    // };
}
