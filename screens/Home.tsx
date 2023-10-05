import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Home = () => {
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.welcomeTextContainer}>
                <Text style={styles.welcomeText}>
                    Welcome! Get started and plan your eclispe trip!
                </Text>
                <TouchableOpacity>

                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%'
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center'
    },
    welcomeTextContainer: {
        marginTop: 32,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});
