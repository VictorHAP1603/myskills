import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    FlatList
} from 'react-native'

// FlatList => Melhor usar quando tiver muitos itens, melhor perfomance
// ScrollView => usar quando tiver poucos itens na lista

// Components
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { SkillItem } from '../components/SkillItem';

type MySkillsProps = {
    id: string,
    name: string
}

export const Home = () => {
    const [mySkills, setMySkills] = useState<MySkillsProps[]>([])
    const [newSkill, setNewSkill] = useState("");
    const [greeting, setGreeting] = useState("")

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 6 || currentHour < 12) {
            setGreeting("Good Moorning!")
        } else if (currentHour >= 12 || currentHour <= 18) {
            setGreeting("Good Afternoon")
        } else {
            setGreeting("Good Night")
        }

    }, [])

    function handleAddNewSkill() {
        if (newSkill !== "") {
            const data = {
                id: String(new Date().getTime()),
                name: newSkill
            }

            setMySkills(oldSkills => [...oldSkills, data])
            setNewSkill("")
        }
    }

    function handleRemoveSkill(skillId: string) {
        setMySkills(mySkills.filter(skill => skill.id !== skillId));
    }

    return (
        <SafeAreaView style={styles.container} >

            <Text style={styles.title}>Welcome, Victor!</Text>
            <Text style={styles.greeting}>{greeting}</Text>

            <Input
                placeholder="New Skill"
                placeholderTextColor="#555"
                value={newSkill}
                onChangeText={setNewSkill}
            />

            <Button
                text="Add"
                onPress={handleAddNewSkill}
                activeOpacity={0.6}
            />

            <Text style={[styles.title, { marginTop: 50, marginBottom: 30 }]}>
                My Skills
            </Text>

            <View style={styles.mySkills}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={mySkills}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <SkillItem skill={item.name} onPress={() => handleRemoveSkill(item.id)} />
                    )}
                />
            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121015",
        paddingHorizontal: 30,
        paddingTop: 70,
        paddingBottom: 20,
    },

    greeting: {
        color: "#fff",
    },

    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold'
    },

    mySkills: {
        flex: 1,
        // backgroundColor: 'red'
    },



})