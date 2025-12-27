import { View, Text, Alert } from "react-native";
//import header from '../components/header';
import HeaderComponent from "../components/header";
import TextInputComponent from "../components/text_input";
import { stylesApp } from "../styles/style";
import ButtonComponent from "../components/buton";
import FlatListComponent from "../components/plat_list";
import { useState } from "react";
import { Job } from "../models/job";
import { List } from "react-native-paper";

export default function Home() {
    //function button
    function onPressButton() {
        if (title.trim() === '' || date.trim() === '') {
            return;
        }
        setJobs([...jobs, { id: Math.random().toString(), title, date }]);
        setTitle('');
        setDate('');
    }

    const [jobs, setJobs] = useState<Job[]>([]);
    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState<string>('');
    return (
        <>
            <HeaderComponent />
            <View style={stylesApp.container}>
                <TextInputComponent value={title} onChangeText={text => setTitle(text)} placeholder="Enter Job" />
                <TextInputComponent value={date} onChangeText={text => setDate(text)} placeholder="Enter Date" />
                <ButtonComponent title="Confirm" onPress={onPressButton} />
            </View>
            <FlatListComponent data={jobs} setData={setJobs} />

        </>
    );
}
