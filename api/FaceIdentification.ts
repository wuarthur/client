import axios, { AxiosResponse } from 'axios'
import * as DataAction from './DataAction'
import * as Data from './Data'
import * as Utilities from './Utilities'

interface ImageResponseData {
    confidence: number
}

const getImageSimilarityPercentage = (img1Binary: string, img2Binary: string): Promise<number> => {
    return new Promise((resolve, reject) => {
        var bodyFormData = new FormData();
        bodyFormData.append("api_key", "tyUFdmwtQenXzamImRrereb_nLLOIGPK");
        bodyFormData.append("api_secret", "tyUFdmwtQenXzamImRrereb_nLLOIGPK");
        bodyFormData.append("image_file1", img1Binary);
        bodyFormData.append("image_file2", img2Binary);

        axios({
            method: 'post',
            url: 'https://api-us.faceplusplus.com/facepp/v3/compare',
            data: bodyFormData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then((response: AxiosResponse<ImageResponseData>) => {
                //handle success
                console.log(response);
                resolve(response.data.confidence);
            })
            .catch((error) => {
                //handle error
                console.log(error);
                reject(error)
            });
    });
}

interface SimilarityInfo {
    student: Data.Student,
    percentage: number
}

const acceptableConfidence: number = 85

export const getMostIdeniticalStudent = async (imgPath: string): Promise<Data.Student | null> => {
    var targetBinaryData: string = await Utilities.convertImgToBinary(imgPath);

    var students: Array<Data.Student> = await DataAction.getStudents();

    //compare with all the images to get the most similar one:
    var maxSimiliarityInfo: SimilarityInfo | null = null;
    for (var i = 0; i < students.length; i++) {
        var imgSimilarityPercentage = await getImageSimilarityPercentage(students[i].faceset_token, targetBinaryData);
        if (imgSimilarityPercentage > maxSimiliarityInfo.percentage) {
            maxSimiliarityInfo = { student: students[i], percentage: imgSimilarityPercentage };
        }
    }
    return (maxSimiliarityInfo.percentage >= acceptableConfidence) ? maxSimiliarityInfo.student : null;
}

