import RNFS from 'react-native-fs'
import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'

export const convertImgToBinary = async (imgPath: string): Promise<string> => {
  try {
    const imgData = RNFS.readFile(RNFS.DocumentDirectoryPath + '/images/' + imgPath, 'base64')
    console.log(`'Path': ${RNFS.DocumentDirectoryPath}`)
    console.log(`Binary data from img is:`, imgData)
    return imgData
  } catch (err) {
    console.log('ImgToBinaryConversion Error:', err)
    throw err
  }
}

const BASE_URL = 'http://127.0.0.1:1911'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const performApiRequest = async <T>(
  method: Method,
  route: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    return await axios({
      method: method,
      url: route.includes('http') ? route : BASE_URL + route,
      ...(method !== 'GET' && { data: data }),
      ...config,
    })
  } catch (err) {
    console.log('API Error:', err)
    throw err
  }
}
