import { View, Text, StyleSheet } from "react-native";

function List({data}) {
    return data.map((dataPoint,index) => (
        <View key={index} style={styles.listItem}>
            <Text style={styles.listText}>{dataPoint}</Text>
        </View>
    ))

}

export default List;

const styles = StyleSheet.create({
    listItem:{
        borderRadius:6,
        paddingHorizontal:8,
        paddingVertical:4,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    listText:{
        color:'#351401',
        textAlign: 'center'
    }
});