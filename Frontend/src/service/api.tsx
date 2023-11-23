import axios from "axios";
const url = "https://hackaty.onrender.com";
export const NearLocation = async (coordinate: string) => {
    try {

        const response = await axios.get(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinate}&key=AIzaSyC3a7wa7LnjMEnNlAdxIa3zvyUQpsy6idU`,
        );
        // Check for a successful response (status code 200)
        if (response.status === 200) {
            // console.log(response);
            return response;
        } else {
            if (response.status === 401) {
                // console.log("Token expired or Token not found or Token invalid");
            } else {
                // Handle unexpected response status codes
                console.error("Unexpected response status:", response.status);
            }
            return null;
        }
        // return response;
    } catch (e) {
        console.log(e);
        // console.log("Failed to decode token");
        return null;
    }
};

export const NisitPostReport = async (data: any) => {
    try {
        console.log("aaaaa", data)
        const res = await axios.post(`${url}/api/report/user/create`, data);
        if (res.status === 201) {
            return res;
        }
        return null;

    } catch (e) {
        console.log(e);
    }
}

export const GetTags = async () => {
    try {
        const res = await axios.get(`${url}/api/tag/all`)
        if (res.status === 200) {
            console.log(res)
            return res;
        }
        return null;

    } catch (e) {
        console.log(e);
    }

}