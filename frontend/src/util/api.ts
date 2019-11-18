import instance from './axios'

export const getRequest = (url: string, params: object) => {
    return instance.get(url,params)
}

export const postRequest = (url: string, body: object) => {
    return instance.post(url,body)
}

export const putRequest = (url: string, body: object) => {
    return instance.put(url,body)
}

export const deleteRequest = (url: string, params: object) => {
    return instance.delete(url,params)
}