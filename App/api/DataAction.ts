import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import * as Data from './Data'
import * as Utilities from './Utilities'

const BASE_URL = 'http://127.0.0.1:1911'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

const performApiRequest = async <T>(
  method: Method,
  route: string,
  data?: any,
  config?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  try {
    return await axiosInstance({
      method,
      url: route,
      data,
      ...config,
    })
  } catch (err) {
    console.log('API Error:', err)
    throw err
  }
}

export const addStudent = async (id: number, name: string, course: string, imgPath: string) => {
  const targetBinaryData = await Utilities.convertImgToBinary(imgPath)
  const body: Data.Student = {
    courses: [course],
    faceset_token: targetBinaryData,
    name: name,
    'student-id': id,
  }
  return performApiRequest('POST', '/student', body, {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const getStudentAttenceInfo = () => {}

export const getStudentEnrollmentInfo = () => {}

export const getStudents = async (): Promise<Array<Data.Student>> => {
  try {
    const response = await performApiRequest(
      'GET',
      '/student',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    )
    console.log('Students response:', response)
    return response.data[0].results
  } catch (error) {
    console.log(error)
    throw error
  }
}
