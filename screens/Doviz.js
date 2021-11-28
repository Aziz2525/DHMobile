import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { parabirimleri,altin ,borsa} from "../api/doviz";
import Altin from "../components/Altin";
import Borsa from "../components/Borsa";
import ParaBirimleri from "../components/ParaBirimleri";
import theme from "../theme";
const Doviz = () => {
  const [paraB, setParaB] = useState(null);
  const [altinB, setAltinB] = useState(null);
  const [borsaB, setBorsaB] = useState(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    Promise.all([parabirimleri(),altin(),borsa()]).then((res)=>{
        setParaB(res[0]);
        setAltinB(res[1]);
        setBorsaB(res[2]);
        setLoading(false)
    })

 
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle} style={styles.container}>
        {!loading ? <>
            <ParaBirimleri data={paraB} />
            <Altin data={altinB} />
            <Borsa data={borsaB} />
      </>: null}
      
    </ScrollView>
  );
};

export default Doviz;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
      },    
      contentContainerStyle:{
          backgroundColor:theme.style.bgColor
      },
});
