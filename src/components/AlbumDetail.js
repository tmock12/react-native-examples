import React from "react";
import { Text, Image, View } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image } = album;

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
  }
};

export default AlbumDetail;
