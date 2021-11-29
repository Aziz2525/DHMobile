import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import RenderHtml from "react-native-render-html";
const {width,height} = Dimensions.get('window')
import { BlurView } from 'expo-blur';
const HaberDetay = ({route}) => {
    const [haberDetay,setHaberDetay] = useState(route.params.data)
    console.log(haberDetay)
    return (
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <Image source={{uri:haberDetay.image[0]}} style={styles.image} />
            <View style={styles.description}>
                <RenderHtml contentWidth={width} source={{html:haberDetay.title[0]}} baseStyle={{fontSize:20,textAlign:'left',fontWeight:'700'}} />
                <RenderHtml contentWidth={width} source={{html:haberDetay.description[0]}} baseStyle={{fontSize:18,marginTop:20,textAlign:'left',fontWeight:'400'}} />
            </View>
        </ScrollView>
    )
}

export default HaberDetay

const styles = StyleSheet.create({
    image:{
        width,
        height:300,
        resizeMode:'stretch'
    },
    description:{
        padding:10
    },
    contentContainerStyle:{
        marginTop:90
    }
})
