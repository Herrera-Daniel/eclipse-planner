import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import { AppStyles } from "../../AppStyles";

const SignIn = () => {
    const [user, setUser] = useState<{ userName?: string, password?: string }>({});

    return (
        <View style={AppStyles.screenView}>
            <Text style={[AppStyles.text, styles.signInText]}>
                Sign In
            </Text>
            <View style={styles.signInContainer}>
                <TextInput
                    style={styles.signInInput}
                    placeholderTextColor="grey"
                    value={user.userName}
                    onChangeText={text => setUser({ ...user, userName: text })}
                    placeholder={'Name'}
                    secureTextEntry={false}
                />
                <TextInput
                    style={styles.signInInput}
                    placeholderTextColor="grey"
                    value={user.password}
                    onChangeText={text => setUser({ ...user, password: text })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                />
            </View>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    signInContainer: {
        gap: 4,
        marginTop: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInInput: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        width: 200,
        color: 'white',
    },
    signInText: {
        alignSelf: 'center',
        paddingTop: 140,
        fontWeight: '400',
        fontSize: 36
    }
})
