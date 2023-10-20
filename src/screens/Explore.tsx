import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { AppStyles } from "../../AppStyles";

const Explore = () => {
    return (
        <View style={AppStyles.screenView}>
            <MapView
                provider={PROVIDER_GOOGLE} 
                style={styles.map}
                region={{
                    latitude: 39.28825,
                    longitude: -105.624,
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                }} 
            >

            </MapView>
        </View>
    );
};

export default Explore;

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
