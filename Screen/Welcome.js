import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';
import OptionSwitch from '../Components/OptionSwitch';
import TextButton from '../Components/TextButton';

export default function Welcome({ navigation }) {

    const [selectedOption, setSelectedOption] = React.useState("English");

    const langOption = ["English", "Hindi-हिन्दी"];

    const colors = ['rgb(254, 228, 195)', 'rgb(244, 157, 62)']

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            padding: 25,
            backgroundColor: '#fff'

        }}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                }}>Welcome</Text>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                }}>Select A Language</Text>
                <View style={{
                    marginTop: 20,
                    flexDirection: 'row',
                    width: "100%",
                    justifyContent: 'space-between',
                }}>

                    {/* Display Switch Option and set the selected option */}
                    <View style={{
                        width: "100%",
                    }}>
                        <OptionSwitch
                            data={langOption}
                            colors={colors}
                            selectedOption={selectedOption}
                            setSelectedOption={setSelectedOption}
                            customShadow={styles.shadow}
                            customTextStyle={styles.langSelect}
                        />
                    </View>

                </View>

                {/* Display Button  */}
                <TextButton
                    onPress={() => navigation.navigate('Login')}
                    customShadow={styles.shadow}
                    colors={colors}
                    label={"confirm"}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    langSelect: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
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