import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AppStyles } from "../../AppStyles";

const Home = () => {
    return (
        <ScrollView style={AppStyles.screenView}>
            <View style={styles.welcomeTextContainer}>
                <Text style={[styles.welcomeText, AppStyles.text]}>
                    Welcome! Get started and plan your eclispe trip!
                </Text>
                <TouchableOpacity style={styles.getStartedButton}>
                    <Text style={AppStyles.text}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    getStartedButton: {
        marginTop: 24,
        borderWidth: 2,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center',
    },
    welcomeTextContainer: {
        marginTop: 32,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default Home;
