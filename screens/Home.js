import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import theme from "../theme";
import { cnn, haberlercom, haberturk, ntv,aa } from "../api/haberler";
import RenderHtml from "react-native-render-html";
import ContentLoader, { Rect,Circle } from "react-content-loader/native";
const { width, height } = Dimensions.get("window");
const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [cnnB, setCnnB] = useState([]);
  const [haberlercomB, setHaberlercomB] = useState([]);
  const [haberturkB, setHaberturkB] = useState([]);
  const [ntvB, setNtvB] = useState([]);
  const [aaB, setAaB] = useState([]);
  const [activeTab,setActiveTab] = useState('CNN')
  useEffect(() => {
    Promise.all([cnn(),haberlercom(),haberturk(),ntv(),aa()]).then((res)=>{
      setLoading(false);
      setCnnB(res[0]);
      setHaberlercomB(res[1])
      setHaberturkB(res[2])
      setNtvB(res[3])
      setAaB(res[4])
    })
  }, []);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);
    cnn().then((res) => {
      setCnnB(res);
      setLoading(false);
      setRefreshing(false)
    });
  }, []);

  const Loading = () => {
    return (
      <>
<ContentLoader 
    speed={2}
    width={width-30}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
     <Rect x="0" y="0" rx="2" ry="2" width="460" height="168" /> 
    <Rect x="0" y="179" rx="0" ry="0" width="398" height="15" />
  </ContentLoader>
  <ContentLoader 
    speed={2}
    width={width-30}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
     <Rect x="0" y="0" rx="2" ry="2" width="460" height="168" /> 
    <Rect x="0" y="179" rx="0" ry="0" width="398" height="15" />
  </ContentLoader>
  <ContentLoader 
    speed={2}
    width={width-30}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
     <Rect x="0" y="0" rx="2" ry="2" width="460" height="168" /> 
    <Rect x="0" y="179" rx="0" ry="0" width="398" height="15" />
  </ContentLoader>
  <ContentLoader 
    speed={2}
    width={width-30}
    height={200}
    viewBox="0 0 400 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
     <Rect x="0" y="0" rx="2" ry="2" width="460" height="168" /> 
    <Rect x="0" y="179" rx="0" ry="0" width="398" height="15" />
  </ContentLoader>
  
  
  </>
    );
  };
  const CNNHaber = () =>{
     return cnnB.map((data, index) => {
        const source = {
          html: data.title[0],
        };
        return (
          <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.push('HaberDetay',{data:data})}>
            <View style={styles.imageCard}>
              <Image
                source={{ uri: data.image[0] }}
                style={[styles.cardImage]}
              />
            </View>
            <RenderHtml contentWidth={width} source={source} baseStyle={{fontSize:18}}/>
          </TouchableOpacity>
        );
      })
  }
  const HaberlerComHaber = () =>{
    return haberlercomB.map((data, index) => {
       const source = {
         html: data.title[0],
       };
       return (
         <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.push('HaberDetay',{data:data})}>
           <View style={styles.imageCard}>
             <Image
               source={{ uri: data["media:content"][0].$.url }}
               style={[styles.cardImage]}
             />
           </View>
           <RenderHtml contentWidth={width} source={source} baseStyle={{fontSize:18}}/>
         </TouchableOpacity>
       );
     })
 }
 const HaberturkHaber = () =>{
  return haberturkB.map((data, index) => {
     const source = {
       html: data.title[0],
     };
     return (
       <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.push('HaberDetay',{data:data})}>
         <View style={styles.imageCard}>
           <Image
             source={{ uri: data["media:content"][0].$.url }}
             style={[styles.cardImage]}
           />
         </View>
         <RenderHtml contentWidth={width} source={source} baseStyle={{fontSize:18}}/>
       </TouchableOpacity>
     );
   })
}
const NTVHaber = () =>{
  return ntvB.map((data, index) => {
     const source = {
       html: data.title[0]._
     };
     return (
       <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.push('HaberDetay',{data:data})}>
         <View style={styles.imageCard}>
           <Image
             source={{ uri: "https://i.ytimg.com/vi/XEJM4Hcgd3M/maxresdefault.jpg" }}
             style={[styles.cardImage]}
           />
         </View>
         <RenderHtml contentWidth={width} source={source} baseStyle={{fontSize:18}}/>
       </TouchableOpacity>
     );
   })
}
const AAHaber = () =>{
  return aaB.map((data, index) => {
     const source = {
       html: data.title[0],
     };
     return (
       <TouchableOpacity style={styles.card} key={index} onPress={()=>navigation.push('HaberDetay',{data:data})}>
         <View style={styles.imageCard}>
           <Image
             source={{ uri: data.image[0] }}
             style={[styles.cardImage]}
           />
         </View>
         <RenderHtml contentWidth={width} source={source} baseStyle={{fontSize:18}}/>
       </TouchableOpacity>
     );
   })
}
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <ScrollView horizontal style={{marginBottom:20}} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity style={activeTab === 'CNN'?styles.viewActiveItem:styles.viewItem} onPress={()=>setActiveTab('CNN')}>
          <Text style={{color:activeTab === 'CNN'?'white':'black',fontWeight:activeTab === 'CNN'?'700':'400'}}>CNN</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={activeTab === 'HABERLERCOM'?styles.viewActiveItem:styles.viewItem} onPress={()=>setActiveTab('HABERLERCOM')}>
          <Text style={{color:activeTab === 'HABERLERCOM'?'white':'black',fontWeight:activeTab === 'HABERLERCOM'?'700':'400'}}>Haberler.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewItem} style={activeTab === 'HABERTURK'?styles.viewActiveItem:styles.viewItem} onPress={()=>setActiveTab('HABERTURK')}>
          <Text style={{color:activeTab === 'HABERTURK'?'white':'black',fontWeight:activeTab === 'HABERTURK'?'700':'400'}}>Habertürk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewItem} style={activeTab === 'NTV'?styles.viewActiveItem:styles.viewItem} onPress={()=>setActiveTab('NTV')}>
          <Text style={{color:activeTab === 'NTV'?'white':'black',fontWeight:activeTab === 'NTV'?'700':'400'}}>NTV</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewItem} style={activeTab === 'AA'?styles.viewActiveItem:styles.viewItem} onPress={()=>setActiveTab('AA')}>
          <Text style={{color:activeTab === 'AA'?'white':'black',fontWeight:activeTab === 'AA'?'700':'400'}}>AA</Text>
        </TouchableOpacity>
      </ScrollView>
      {!loading
        ? 
          activeTab === "CNN"?CNNHaber():activeTab === "HABERLERCOM" ? HaberlerComHaber(): activeTab === "HABERTURK" ?HaberturkHaber(): activeTab === 'NTV' ? NTVHaber(): activeTab === 'AA' ?AAHaber():null
        : <>{Loading()}</>}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: theme.style.bgColor,
    padding: 15,
    marginTop:100
  },
  container: {
    backgroundColor: theme.style.bgColor,
  },
  card: {
    marginBottom: 30,
 
  },
  cardImage: {
    width: width - 30,
    height: 200,
    overflow: "hidden",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  imageCard: {
    width,
    marginBottom: 10,
  },
  viewItem:{
    height:25,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:theme.style.bgGray,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginRight:20
  },
  viewActiveItem:{
    height:25,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:theme.style.tabNavActiveColor,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    marginRight:20
  }
});
