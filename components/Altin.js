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
          <Text>{props.data["GA"].degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Çeyrek Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["C"].satis}</Text>
          <Text>{props.data["C"].degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Yarım Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["Y"].satis}</Text>
          <Text>{props.data["Y"].degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Tam Altın</Text>
        <View style={styles.cardRight}>
          <Text>{props.data["T"].satis}</Text>
          <Text>{props.data["Y"].degisim}</Text>
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
