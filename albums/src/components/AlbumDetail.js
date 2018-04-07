import React from "react";
import { Text, Image, View, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album;

  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainer}>
          <Image style={styles.thumbnail} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.cardHeaderTextContainer}>
          <Text style={styles.cardHeaderText}>
            {title}
          </Text>
          <Text>
            {artist}
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image source={{ uri: image }} style={styles.primaryImage} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  thumbnail: {
    width: 50,
    height: 50
  },
  thumbnailContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  cardHeaderTextContainer: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  cardHeaderText: {
    fontSize: 18
  },
  primaryImage: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
