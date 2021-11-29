import axios from "axios";
import config from "../../config";

export const cnn = () =>{
    return axios.get(config.serviceUri+"/get/haberler/cnn/tum").then((res)=>{
        return res.data.rss.channel[0].item
    }).catch((err)=>{
        return err
    })
}
export const haberlercom = () =>{
    return axios.get(config.serviceUri+"/get/haberler/haberlercom/tum").then((res)=>{
        return res.data.rss.channel[0].item
    }).catch((err)=>{
        return err
    })
}
export const haberturk = () =>{
    return axios.get(config.serviceUri+"/get/haberler/haberturk/tum").then((res)=>{
        return res.data.rss.channel[0].item
    }).catch((err)=>{
        return err
    })
}
export const ntv = () =>{
    return axios.get(config.serviceUri+"/get/haberler/ntv/tum").then((res)=>{
        return res.data.feed.entry
    }).catch((err)=>{
        return err
    })
}
export const aa = () =>{
    return axios.get(config.serviceUri+"/get/haberler/aa/tum").then((res)=>{
        return res.data.rss.channel[0].item
    }).catch((err)=>{
        return err
    })
}

