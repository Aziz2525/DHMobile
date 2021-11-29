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
 
          <Text style={{color:parseFloat(props.data.ALGYO.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.ALGYO.degisim.replace(',','.'))}</Text>

          </View>
        </View>
        <View style={styles.card}>
          <Text>ARZUM</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ARZUM"].satis}</Text>
          <Text style={{color:parseFloat(props.data.ARZUM.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.ARZUM.degisim.replace(',','.'))}</Text>

          </View>
        </View>
        <View style={styles.card}>
          <Text>ACSEL</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ACSEL"].satis}</Text>
          <Text style={{color:parseFloat(props.data.ACSEL.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.ACSEL.degisim.replace(',','.'))}</Text>

          </View>
        </View>
        <View style={styles.card}>
          <Text>ADANA</Text>
          <View style={styles.cardRight}>
            <Text>{props.data["ADANA"].satis}</Text>
            <Text style={{color:parseFloat(props.data.ADANA.degisim.replace(',','.'))>=0?'green':'red'}}>{parseFloat(props.data.ADANA.degisim.replace(',','.'))}</Text>
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
