import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    header__title: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold"
    },
    header__title__text: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 3
    },
    header__image: {
        alignItems: "center",
        margin: 5
    },
    image: {
        height: 20,
        width: 20
    },
    imageAvatar: {
        height: 80,
        width: 80,
        borderRadius: 40
    },
    bodyContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: "rgb(221,221,221)"
    },
    bodyContainer__info: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center" 
    },
    bodyContainer__button:{
        width:100,
        height:50,
        borderRadius:20,
        backgroundColor:"rgb(187,187,253)",
        justifyContent:"center",
        alignItems:"center"
    }
})