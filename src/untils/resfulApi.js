import axios from 'axios'
import configApp from '../config'
import router from '@/router'
import constants from '@/constants'

const config = configApp(import.meta.env.MODE)
const backEndURL = `${config.SERVER.DOMAIN}`

axios.interceptors.response.use(
    async (response) => {
        console.log(response.data)
        return response.data
    },
    async (error) => {
        if (error?.data?.errorCode === 401) {
            // something
        }
        return Promise.reject(error)
    }
)

/**
 * Method Get
 * @param fullUrl
 * @param headers
 * @param endPoint
 * @param params
 */
const get = async ({ fullUrl = null, headers = null, endPoint = null, params = {} }) => {
    try {
        return await axios({
            url: fullUrl || backEndURL + endPoint,
            method: 'GET',
            headers: headers || {
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'

            },
            data: {},
            params
        })
    } catch (e) {
        throw e
    }
}

/**
 * Method Post
 * @param fullUrl
 * @param headers
 * @param endPoint
 * @param params
 */

const post = async ({ fullUrl = null, headers = null, endPoint = null, params = {} }) => {
    try {
        return await axios({
            url: fullUrl || backEndURL + endPoint,
            method: 'POST',
            headers: headers || {
                'accept': '*/*',
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'

            },
            data: {},
            params
        })
    } catch (e) {
        throw e
    }
}

export default {
    get,
    post
}
