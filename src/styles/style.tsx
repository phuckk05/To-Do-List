//Đây là nơi đặt syle chung cho toàn bộ ứng dụng
import { StyleSheet } from 'react-native';
export const stylesApp = StyleSheet.create({
    buttonDelete: {
        color: '#ff0000',
        fontSize: 24,
        padding: 5,
    },
    buttonItem: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 2,
    },
    FlatListcontainer: {
        width: '100%',
        height: '60%',
        marginBottom: 30,
    },
    FlatListStyle: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        marginHorizontal: 10,
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        padding: 10,
        borderRadius: 8,
    },
    textButon: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#1909f698',
        padding: 10,
        borderRadius: 12,

    },
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'flex-start',
        width: '100%',
    },
    header: {
        marginTop: 40,
        fontWeight: 'bold',
        padding: 14,
        backgroundColor: '#09f64c98',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    textInput: {
        borderColor: 'gray',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        paddingLeft: 10,
        alignSelf: 'center',
        borderRadius: 12,
    }

});