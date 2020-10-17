import axios, { AxiosResponse } from 'axios'
import * as DataAction from './DataAction'
import * as Data from './Data'
import * as Utilities from './Utilities'
import { performApiRequest} from './Utilities'

interface ImageResponseData {
    confidence: number
}

// To prevent ONCURRENCY_LIMIT_EXCEEDED:
const delayed_getImageSimilarityPercentage = async (img1Binary: string, img2Binary: string): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            try {
                resolve(getImageSimilarityPercentage(img1Binary, img2Binary))
            } catch (e) {
                reject(e)
            }
        }, 300);
    })
}

export const getImageSimilarityPercentage = async (img1Binary: string, img2Binary: string): Promise<number> => {
    var bodyFormData = new FormData();
    bodyFormData.append("api_key", "tyUFdmwtQenXzamImRrereb_nLLOIGPK");
    bodyFormData.append("api_secret", "CXRy_Zf4nT2Ji2OdnFX3ZlkL-Bt7S0nr");
    bodyFormData.append("image_base64_1", img1Binary);
    bodyFormData.append("image_base64_2", img2Binary);

    //console.log("face similarity check:")
    //console.log(bodyFormData)

    try {
        const response: Data.FaceIdentificationData = await performApiRequest(
            'POST',
            'https://api-us.faceplusplus.com/facepp/v3/compare',
            bodyFormData,
            {headers: { 'Content-Type': 'multipart/form-data' }}
        ) 
        //console.log(response)
        var confidence = 0
        if (!!response.data) {
            confidence = response.data.confidence
        }
    } catch (e) {
        console.log(e)
        return -1
    }
    return confidence;
}

interface SimilarityInfo {
    student: Data.Student,
    percentage: number
}

const acceptableConfidence: number = 85

//grabs an image in base64 format, then grabs the similarity percentage and the corresponding student
export const getMostIdeniticalStudent = async (imgBase64: string): Promise<Data.Student | null> => {
   // var imgBase64: string = await Utilities.convertImgToBinary(imgPath);
   var imgBase64: string = imgBase64;

    var students: Array<Data.Student> = await DataAction.getStudents();

    //compare with all the images to get the most similar one:
    var maxSimiliarityInfo: SimilarityInfo | null = null;
    for (var i = 0; i < students.length; i++) {
        var imgSimilarityPercentage = await delayed_getImageSimilarityPercentage(students[i].faceset_token!, imgBase64);
        console.log(`image similarity percentage: ${imgSimilarityPercentage}`)
        if (imgSimilarityPercentage != -1 
            && (maxSimiliarityInfo === null 
            || imgSimilarityPercentage > maxSimiliarityInfo.percentage)) {
            maxSimiliarityInfo = { student: students[i], percentage: imgSimilarityPercentage };
        }
    }
    if (!!maxSimiliarityInfo) {
        console.log(`Most similar student found: ID: ${maxSimiliarityInfo.student.id}, NAME: ${maxSimiliarityInfo.student.name}`)
    }else {
        console.log("Unable to find most similar student")
    }
        //console.log(maxSimiliarityInfo.student)
    return (!!maxSimiliarityInfo && maxSimiliarityInfo.percentage >= acceptableConfidence) ? maxSimiliarityInfo.student : null;
}

var sampleToken = "iVBORw0KGgoAAAANSUhEUgAAAf4AAAGQCAYAAABPkQIPAAAMSmlDQ1BJQ0MgUHJvZm"