import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';

type Props = TouchableOpacityProps & {
    text: string;
}

export const Button = ({ text, ...rest }: Props) => {

    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: "#a370f7",
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    textButton: {
        color: "#fff",
        fontSize: 17,
        fontWeight: "bold"
    },
});