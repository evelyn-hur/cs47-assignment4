import React from "react"
import WebView from "react-native-webview"

const PreviewScreen = ({route}) => {
    const previewAddress = route.params.previewAddress;
    if (previewAddress === "undefined") {
        return;
    } else {
        return (
            <WebView source={{ uri: previewAddress }} />
        );
    }
};

export default PreviewScreen;

