import {StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Images } from "../../assets/Themes";

const windowWidth = Dimensions.get("window").width;

const Header = () => {
    return (
        <View style = {styles.header}>
            <Image source={Images.spotify} style={styles.image} />
            <Text style={styles.text}>My Top Tracks</Text>    
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: windowWidth * 0.09,
        width: windowWidth * 0.09,
        marginRight: 8,
        marginTop: 8,
    },
    text: {
        fontWeight: "bold",
        fontSize: 28,
        color: "white",
        padding: 8,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 30,
    },

});

export default Header;