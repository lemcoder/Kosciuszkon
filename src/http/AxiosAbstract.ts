import axiosInstance from './AxiosInstance';

export abstract class AHttpClient {

    public static getEtapEdukacyjny = () =>
        axiosInstance
            .get<any>('etap_edukacyjny/')
            .then(response => response.data);

    public static getPlacowki = () =>
        axiosInstance
            .get<any>('placowki/');

    // public static getPage = (url: string, charset?: string) => {
    //     const queryString = charset
    //         ? `&fromCharset=${charset}`
    //         : '';

    //     return axiosInstance
    //         .get<string>(`proxy?q=${url}${queryString}`)
    //         .then(response => response.data);
    // };
}
