import React, { useState } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';


function List(): JSX.Element {

    const [listData, setListData] = useState([]);


    return (
        <FlatList
            contentContainerStyle={{ flex: 2, marginVertical: 10, alignItems:'center' }}
            renderItem={({ item }) => {
                return (
                    <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row', width:300}}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>{item}</Text>
                        <TouchableOpacity
                            onPress={() => console.log(item)}
                        >
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>x</Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
            data={listData}
        />
    );
}
export default List;
