import { Text, StyleSheet, Image, View, Dimensions, Pressable } from "react-native";
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from "../../utils";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;

export default function Song({ image, title, album, artist, duration, previewUrl, externalUrl}) {
    const navigation = useNavigation()
    return (
        <View style = {styles.main}>
            <View style = {styles.rankView}>
                <Pressable onPress={() => navigation.navigate('PreviewScreen', {previewAddress: previewUrl})}>
                    <Ionicons name="play-circle" size={23} style={styles.playButton}/>
                </Pressable>
            </View>
            
            <View style = {styles.generalView}>
                <Pressable onPress={() => navigation.navigate('DetailsScreen', {externalAddress: externalUrl})}>
                    <Image style = {styles.image} source = {{uri: image}}></Image>
                </Pressable>
            </View>

            <View style = {styles.titleView}>
                <Pressable onPress={() => navigation.navigate('DetailsScreen', {externalAddress: externalUrl})}>
                    <Text numberOfLines={1} style={styles.textWhite}>{title}</Text>
                    <Text style = {styles.textGray}>{artist}</Text>
                </Pressable>
            </View>

            <View style = {styles.generalView}>
                <Pressable onPress={() => navigation.navigate('DetailsScreen', {externalAddress: externalUrl})}>
                    <Text numberOfLines={1} style = {styles.textWhite}>{album}</Text>
                </Pressable>
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
    playButton: {
        color: Themes.colors.spotify,
    },
    titleView: {
        width: windowWidth * 0.25,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
  });
