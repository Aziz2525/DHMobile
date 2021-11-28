import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import theme from "../theme";
import { cnn } from "../api/haberler";
import RenderHtml from "react-native-render-html";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
const { width, height } = Dimensions.get("window");
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cnnB, setCnnB] = useState([]);
  useEffect(() => {
    cnn().then((res) => {
      setCnnB(res);
      setLoading(false);
    });
  }, []);
  const Loading = () =>{
      return(
        <ContentLoader 
        speed={2}
        width={width}
        height={250}
        viewBox="0 0 400 160"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <Rect x="48" y="8" rx="3" ry="3" width="88" height="6" /> 
        <Rect x="48" y="26" rx="3" ry="3" width="52" height="6" /> 
        <Rect x="0" y="56" rx="3" ry="3" width="410" height="6" /> 
        <Rect x="0" y="72" rx="3" ry="3" width="380" height="6" /> 
        <Rect x="0" y="88" rx="3" ry="3" width="178" height="6" /> 
        <Circle cx="20" cy="20" r="20" />
      </ContentLoader>
      )
  }
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      {!loading
        ? cnnB.map((data, index) => {
            const source = {
              html: data.title[0],
            };
            return (
              <View style={styles.card} key={index}>
                <View style={styles.imageCard}>
                  <Image
                    source={{ uri: data.image[0] }}
                    style={[styles.cardImage]}
                  />
                </View>
                <RenderHtml contentWidth={width} source={source} />
              </View>
            );
          })
        : Loading()}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: theme.style.bgColor,
    padding: 15,
  },
  container: {
    backgroundColor: theme.style.bgColor,
  },
  card: {
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
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
