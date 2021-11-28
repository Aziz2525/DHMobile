import axios from "axios";
import config from "../../config";

export const cnn = () =>{
    return axios.get(config.serviceUri+"/get/haberler/cnn/tum").then((res)=>{
        return res.data.rss.channel[0].item
    }).catch((err)=>{
        return err
    })
}

