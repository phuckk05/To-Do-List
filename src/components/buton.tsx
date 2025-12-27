import { Button, TouchableOpacity, View, Text } from "react-native";
import { stylesApp } from "../styles/style";

type ButtonProps = {
    title: string;
    onPress: () => void;
}
export default function ButtonComponent({ title, onPress }: ButtonProps) {
    return <TouchableOpacity style={stylesApp.button} onPress={onPress} >
        <Text style={stylesApp.textButon}>{title}</Text>
    </TouchableOpacity>
}