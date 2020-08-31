import * as React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SectionListItem = (props) => {
    const onPress = () => {
        if(props.onPress){
            props.onPress();
        }
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        minHeight: 60,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 16,
    },
    text: {
        flex: 1,
        color: 'black',
        fontSize: 17,
        paddingVertical: 15,

    },
});

export default SectionListItem;