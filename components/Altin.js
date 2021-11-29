import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import theme from "../theme";

const Altin = (props) => {
  return (
    <>
      <View style={styles.card}>
        <Text>Gram Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["GA"].satis}</Text>
          <Text style={{color:parseFloat(props.data.GA.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.GA.degisim.replace(',','.'))}</Text>

        </View>
      </View>
      <View style={styles.card}>
        <Text>Çeyrek Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["C"].satis}</Text>
          <Text style={{color:parseFloat(props.data.C.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.C.degisim.replace(',','.'))}</Text>

        </View>
      </View>
      <View style={styles.card}>
        <Text>Yarım Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["Y"].satis}</Text>
          <Text style={{color:parseFloat(props.data.Y.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.Y.degisim.replace(',','.'))}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Tam Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["T"].satis}</Text>
          <Text style={{color:parseFloat(props.data.T.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.T.degisim.replace(',','.'))}</Text>

        </View>
      </View>
      
      <TouchableOpacity style={styles.btn} onPress={() => alert("dd")}>
        <Text>Daha fazlası</Text>
      </TouchableOpacity>
    </>
  );
};

export default Altin;

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
      },
      cardRight: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
      },
    
      btn:{
          backgroundColor:theme.style.bgGray,
          padding:10,
          justifyContent:'center',
          alignItems:'center',
      }
});
