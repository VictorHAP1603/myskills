import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet, View } from 'react-native';
import React from 'react';

type Props = {
    skill: string,
    onPress: () => void
}

export const SkillItem = ({ skill, onPress }: Props) => {


    return (
        <View
            style={styles.buttonSkill}
        >
            <View style={styles.textSkillContainer}>
                <Text style={styles.textSkill}>
                    {skill}
                </Text>
            </View>

            <TouchableOpacity
                onPress={onPress}
                style={styles.buttonRemove}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonRemoveText}>X</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: "#1f1e25",
        borderRadius: 50,
        marginVertical: 10,
        flexDirection: 'row'
    },

    textSkillContainer: {
        flex: 0.75,
        alignItems: 'center',
        padding: 15,
    },

    textSkill: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
    },

    buttonRemove: {
        flex: 0.25,
        color: "#fff",
        backgroundColor: "#a370f7",
        borderBottomRightRadius: 50,
        borderTopRightRadius: 50,

        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonRemoveText: {
        color: "#7032d3",
        fontSize: 22,
        fontWeight: "bold",
    }
})