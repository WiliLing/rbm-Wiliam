import { StyleSheet, Platform, StatusBar } from "react-native";

export const ScreenCont = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      },
    container: {
        flex: 1, 
        width: "100%",
    }
});