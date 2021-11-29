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
import { cnn } from "../api/haberler";
import RenderHtml from "react-native-render-html";
import ContentLoader, { Rect,Circle } from "react-content-loader/native";
const { width, height } = Dimensions.get("window");
const Home = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = React.useState(false);
  const [cnnB, setCnnB] = useState([]);
  useEffect(() => {
    cnn().then((res) => {
      setCnnB(res);
      setLoading(false);
    });
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
      {!loading
        ? cnnB.map((data, index) => {
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
});
