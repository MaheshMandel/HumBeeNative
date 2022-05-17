import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { AntDesign } from '@expo/vector-icons';

export default function TextButton({
    onPress,
    customShadow,
    colors,
    label
}) {
    return (
        <View style={{
            marginTop: 20,

        }}>
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: colors[1],
                borderRadius: 10,
                ...customShadow,
            }}
                onPress={onPress}>
                <Text style={{
                    paddingVertical: 16,
                    fontSize: 25,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontWeight: 'bold',
                    color: '#fff',
                    marginRight: 10,
                }}>{label}</Text>
                <AntDesign name="arrowright" size={25} color="#fff" />
            </TouchableOpacity>
        </View>
    )
}