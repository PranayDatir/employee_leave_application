export interface IApiresponse<T>{
    message: string,
    result: boolean,
    data?: T
}