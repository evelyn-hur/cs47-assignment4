import { Text, StyleSheet, Image, View, Dimensions } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils";

const windowWidth = Dimensions.get("window").width;

export default function Song({id, image, title, album, artist, duration}) {
    return (
        <View style = {styles.main}>
            <View style = {styles.rankView}>
                <Text style = {styles.textWhite}>{id}</Text>
            </View>

            <View style = {styles.generalView}>
                <Image style = {styles.image} source = {{uri: image}}></Image>
            </View>

            <View style = {styles.titleView}>
                <Text numberOfLines={1} style={styles.textWhite}>{title}</Text>
                <Text style = {styles.textGray}>{artist}</Text>
            </View>

            <View style = {styles.generalView}>
                <Text numberOfLines={1} style = {styles.textWhite}>{album}</Text>
            </View>

            <View style = {styles.generalView}>
                <Text style = {styles.textWhite}>{millisToMinutesAndSeconds(duration)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    generalView: {
        width: windowWidth * 0.25,
    },
    textWhite: {
        marginTop: 8,
        fontSize: 13,
        color: Themes.colors.white,
    },
    textGray: {
        marginTop: 8,
        fontSize: 13,
        color: Themes.colors.gray,
    },
    image: {
        width: 60,
        height: 60,
        marginBottom: 10,
        marginLeft: 10,
    },
    rankView: {
        marginLeft: 20,
        marginTop: 20,
    },
    titleView: {
        width: windowWidth * 0.25,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
  });
