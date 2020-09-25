import axios from 'axios'

export const fetchFaceSimilarityPercentage = () => {
    var image1BinaryData = "";
    var image2BinaryData = "";

    var bodyFormData = new FormData();
    bodyFormData.append("api_key", "tyUFdmwtQenXzamImRrereb_nLLOIGPK");
    bodyFormData.append("api_secret", "tyUFdmwtQenXzamImRrereb_nLLOIGPK");
    bodyFormData.append("image_file1", image1BinaryData);
    bodyFormData.append("image_file2", image2BinaryData);

    axios({
        method: 'post',
        url: 'https://api-us.faceplusplus.com/facepp/v3/compare',
        data: bodyFormData,
        headers: {'Content-Type': 'multipart/form-data' }
        })
        .then((response) => {
            //handle success
            console.log(response);
        })
        .catch((response) => {
            //handle error
            console.log(response);
        });
}
