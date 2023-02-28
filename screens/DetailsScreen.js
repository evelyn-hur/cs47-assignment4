import React from "react"
import WebView from "react-native-webview"

const DetailsScreen = ({route}) => {
    const externalAddress = route.params.externalAddress;

    return (
        <WebView source={{ uri: externalAddress }} />
    );
};

export default DetailsScreen;
