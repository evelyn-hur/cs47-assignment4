
import { FlatList, ScrollView, SafeAreaView } from "react-native";
import Song from "./Song";
import Header from "./Header";


const renderItem = ( props ) => {
    const {item, index} = props;
    return (
    <Song
    id={index+1}
    image={item.imageUrl}
    title={item.songTitle}
    album={item.albumName}
    artist={item.songArtists[0].name}
    duration={item.duration}
    externalUrl={item.externalUrl}
    previewUrl={item.previewUrl}
    />
);
}

const SongList = ({tracks}) => {
    return (
        <SafeAreaView>
            <Header>My Top Tracks</Header>
            <ScrollView>
                <FlatList
                data={tracks}
                renderItem={(item) => 
                    renderItem(item)}
                keyExtractor={(item) => item.id}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SongList;


