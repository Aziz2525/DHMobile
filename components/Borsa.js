import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import theme from '../theme'

const Borsa = (props) => {
    return (
        <>
        <View style={styles.card}>
          <Text>ALGYO</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ALGYO"].satis}</Text>
            <Text>{props.data["ALGYO"].degisim}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>ARZUM</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ARZUM"].satis}</Text>
            <Text>{props.data["ARZUM"].degisim}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>ACSEL</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ACSEL"].satis}</Text>
            <Text>{props.data["ACSEL"].degisim}</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Text>ADANA</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ADANA"].satis}</Text>
            <Text>{props.data["ADANA"].degisim}</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={() => alert("dd")}>
          <Text>Daha fazlası</Text>
        </TouchableOpacity>
      </>
    )
}

export default Borsa

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
          alignItems:'center'
      }
})
