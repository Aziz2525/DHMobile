import axios from "axios";
import config from "../../config";

export const parabirimleri = () =>{
    return axios.get(config.serviceUri+"/get/doviz/parabirimleri").then((res)=>{
        return res.data
    }).catch((err)=>{
        return err
    })
}
export const altin = () =>{
    return axios.get(config.serviceUri+"/get/doviz/altin").then((res)=>{
        return res.data
    }).catch((err)=>{
        return err
    })
}
export const borsa = () =>{
    return axios.get(config.serviceUri+"/get/doviz/borsa").then((res)=>{
        return res.data
    }).catch((err)=>{
        return err
    })
}

