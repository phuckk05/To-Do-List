import { View, Text } from "react-native";
import { stylesApp } from "../styles/style";

export default function HeaderComponent() {
    return (
        <View style={stylesApp.header} >
            <Text style={stylesApp.title}>To Do List</Text>
        </View >
    );
}