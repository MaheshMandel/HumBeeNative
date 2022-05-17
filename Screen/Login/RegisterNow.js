import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

//Styles
const colors = ['rgb(254, 228, 195)', 'rgb(244, 157, 62)']

import { TextInput, Checkbox, Snackbar, Button } from 'react-native-paper'

export default function RegisterNow() {

    const [password, setPassword] = React.useState();
    const [reEnterPassword, setReEnterPassword] = React.useState();
    const [mobileNumber, setMobileNumber] = React.useState();
    const [checked, setChecked] = React.useState(false);
    const [visible, setVisible] = React.useState(false);

    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const matchPassword = () => {
        if (password === reEnterPassword) {
            console.log("Password Matched");
        }
        else {
            return (
                <View style={styles.containers}>
                    <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'Undo',
                            onPress: () => {
                                // Do something
                            },
                        }}>
                        Hey there! I'm a Snackbar.
                    </Snackbar>
                </View>
            )
        }
    }

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: 25,
            backgroundColor: '#fff'

        }}>
            <View>
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: 'bold',
                    }}>
                    New User
                </Text>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                    }}>
                    Register Here!
                </Text>

                <View
                    style={{
                        marginTop: 30,
                    }}>
                    {/* <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "red" }}>*</Text>
                        <Text>Mobile</Text>
                    </View> */}

                    <TextInput
                        left={<TextInput.Icon name="account" color="black" />}
                        mode='outlined'
                        label="Mobile Number"
                        activeOutlineColor={colors[1]}
                        outlineColor={colors[1]}
                        onChangeText={(text) => setMobileNumber(text)}
                        keyboardType="phone-pad"
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </View>

                {/* PASSWORD  */}
                <View
                    style={{
                        marginTop: 20,
                    }}>
                    {/* <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "red" }}>*</Text>
                        <Text>{selectedOption}</Text>
                    </View> */}
                    <TextInput
                        mode='outlined'
                        label={"Create Password"}
                        secureTextEntry={!checked}
                        onChangeText={(text) => setPassword(text)}
                        left={<TextInput.Icon name="lock-outline" color="black" />}
                        onPress={() => console.log("pressed")}
                        outlineColor={colors[1]}
                        activeOutlineColor={colors[1]}
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </View>

                <View
                    style={{
                        marginTop: 20,
                    }}>
                    {/* <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "red" }}>*</Text>
                        <Text>{selectedOption}</Text>
                    </View> */}
                    <TextInput
                        mode='outlined'
                        label={"Confirm Password"}
                        secureTextEntry={!checked}
                        onChangeText={(text) => setReEnterPassword(text)}
                        left={<TextInput.Icon name="lock-outline" color="black" />}
                        onPress={() => console.log("pressed")}
                        outlineColor={colors[1]}
                        activeOutlineColor={colors[1]}
                        style={{
                            backgroundColor: '#fff',
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}>
                    <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        uncheckedColor={colors[1]}
                        color={colors[1]}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text>Show Password</Text>
                </View>

                <View
                    style={{
                        marginTop: 20,

                    }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors[1],
                        borderRadius: 10,
                        ...styles.shadow,
                    }}
                        onPress={() => { matchPassword() }}
                    >
                        <Text style={{
                            paddingVertical: 16,
                            fontSize: 25,
                            textTransform: 'uppercase',
                            letterSpacing: 1,
                            fontWeight: 'bold',
                            color: '#fff',
                            marginRight: 10,
                        }}>Sign Up</Text>
                        <AntDesign name="arrowright" size={25} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containers}>
                    <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
                    <Snackbar
                        visible={visible}
                        onDismiss={onDismissSnackBar}
                        action={{
                            label: 'Undo',
                            onPress: () => {
                                // Do something
                            },
                        }}>
                        Hey there! I'm a Snackbar.
                    </Snackbar>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    langSelect: {
        fontSize: 14,
        textAlign: 'center',
    },
    container: {
        width: 70,
        paddingVertical: 5,
        borderRadius: 0,
    },
    containers: {
        flex: 1,
        justifyContent: 'space-between',
        position: "absolute",
        top: "20%",
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
