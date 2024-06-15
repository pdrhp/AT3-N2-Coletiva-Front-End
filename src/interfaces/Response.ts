interface Response<T>{
    status_code: number,
    message: string,
    data: T
}

export default Response;