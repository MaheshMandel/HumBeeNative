import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function OptionSwitch({
    colors,
    selectedOption,
    setSelectedOption,
    customShadow,
    customTextStyle,
    customStyle,
    data,
}) {
    return (
        <View style={{
            justifyContent: "space-between",
            // width: "100%",
            flexDirection: "row",
        }}>
            {
                data.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: "48%",
                                paddingVertical: 20,
                                alignItems: 'center',
                                textAlign: 'center',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: selectedOption === item ? colors[0] : colors[1],
                                backgroundColor: selectedOption === item ? colors[0] : "#fff",
                                ...customShadow,
                                ...customStyle,
                            }}
                        >
                            <TouchableOpacity
                                onPress={() => setSelectedOption(item)}>
                                <Text style={{ ...customTextStyle, color: selectedOption === item ? colors[1] : "black", }} >{item}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </View>

    )
}