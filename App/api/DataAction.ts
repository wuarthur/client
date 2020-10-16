import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios'
import {Student, FetchedStudent, FetchedResult} from './Data'
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
      method: method,
      url: route,
      ...(method !== "GET" && {data: data}),
      ...config
    })
  } catch (err) {
    console.log('API Error:', err)
    throw err
  }
}

export const addStudent = async (id: number, name: string, course: string, imgPath: string) => {
  const targetBinaryData = await Utilities.convertImgToBinary(imgPath)
  const body: FetchedStudent = {
    courses: [course],
    faceset_token: targetBinaryData,
    name: name,
    'student-id': id.toString(),
  }
  return performApiRequest('POST', '/student', body, {
    headers: { 'Content-Type': 'application/json' },
  })
}

export const getStudentAttenceInfo = () => {}

export const getStudentEnrollmentInfo = () => {}

export const getStudents = async (): Promise<Array<Student>> => {
  try {
    const response: AxiosResponse<Array<FetchedResult>> = await performApiRequest(
      'GET',
      '/student',
      {},
      { headers: { 'Content-Type': 'application/json' } },
    )

    console.log("student response");
    console.log(response.data[0].results);
    var students: Array<Student> = [];

    if (!!response.data && response.data.length > 0 && !!response.data[0].results) {
        students = response.data[0].results.map((fetchedStudent: FetchedStudent) => {
            return {
                id: parseInt(fetchedStudent["student-id"]),
                name: fetchedStudent.name,
                faceset_token: fetchedStudent.faceset_token
            }
        });
        console.log(students);
    }

    return students;

    
  } catch (error) {
    console.log(error)
    throw error
  }
}
