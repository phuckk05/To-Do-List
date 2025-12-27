import { TextInput, View } from "react-native";
import { stylesApp } from "../styles/style";
type TextInputProps = {
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
}

export default function TextInputComponent({ placeholder, value, onChangeText }: TextInputProps) {
    return (
        <View>
            <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={stylesApp.textInput} />
        </View>
    );
}