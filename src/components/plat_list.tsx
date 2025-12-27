import React from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { Job } from "../models/job";
import { stylesApp } from "../styles/style";
import { MaterialIcons } from '@expo/vector-icons';

type PlatListProps = {
    data: Job[];
    setData?: React.Dispatch<React.SetStateAction<Job[]>>;
};

export default function FlatListComponent(props: PlatListProps) {
    function ItemJob(item: Job): void {
        alert('Item Job title : ' + item.title + ' date : ' + item.date);
    }

    function deleteJob(item: Job, Jobs: Job[]): void {
        Alert.alert('Delete Job', `Are you sure you want to delete the job: ${item.title}?`, [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'OK', onPress: () => {
                    if (props.setData) {
                        const newJobs = Jobs.filter(job => job.id !== item.id);
                        props.setData(newJobs);
                    }
                }
            },
        ]);
    }

    //component 
    const showAlert = (item: Job) => {
        Alert.alert('Job Details', `Title: ${item.title}\nDate: ${item.date}`, [{ text: 'OK' }]);
    }
    //UI 
    const renderItem = (item: Job, Jobs: Job[]) => {
        return <TouchableOpacity onPress={() => ItemJob(item)}>
            <View style={stylesApp.FlatListStyle}>
                <View>
                    <Text style={stylesApp.title}>{item.title}</Text>
                    <Text>{item.date}</Text>
                </View>
                <View style={stylesApp.buttonItem}>
                    <MaterialIcons onPress={() => deleteJob(item, Jobs)} style={stylesApp.buttonDelete} name="delete" size={30} color="#1909f6" />
                </View>
            </View>
        </TouchableOpacity >;
    }

    return <View style={stylesApp.FlatListcontainer}>
        <FlatList data={props.data} renderItem={({ item }) => renderItem(item, props.data)} keyExtractor={item => item.id} />
    </View>;
}