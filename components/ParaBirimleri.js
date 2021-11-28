import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import theme from '../theme'

const ParaBirimleri = (props) => {
    return (
       <>
       <View style={styles.card}>
        <Text>Amerikan Doları</Text>
        <View style={styles.cardRight}>
          <Text>{props.data.USD.satis}</Text>
          <Text>{props.data.USD.degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Euro</Text>
        <View style={styles.cardRight}>
          <Text>{props.data.EUR.satis}</Text>
          <Text>{props.data.EUR.degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Sterlin</Text>
        <View style={styles.cardRight}>
          <Text>{props.data.GBP.satis}</Text>
          <Text>{props.data.GBP.degisim}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text>Bitcoin</Text>
        <View style={styles.cardRight}>
          <Text>{props.data.BTC.satis}</Text>
          <Text>{props.data.BTC.degisim}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={()=>alert('dd')}>
          <Text>Daha fazlası</Text>
      </TouchableOpacity>
       </>
    )
}

export default ParaBirimleri

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
