import React, { useEffect, useState } from 'react';
import {
    FlatList,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { api } from '../../api';


function List(): JSX.Element {

    const [listData, setListData] = useState([]);
    const [isDataLoading, setIsDataLoading] = useState(false);

    const fetchListData = async () => {
        try {
            setIsDataLoading(true);
            const data = await api.getNames();
            setListData(data)
        } catch (error) {
            console.log(error)
        }finally{
            setIsDataLoading(false);
        }
    }

    useEffect(() => {
        fetchListData()
    }, []);


    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
            {isDataLoading ? (<Text style={{ fontSize: 32, color: 'black' }}>Loading...</Text>) : (
                <FlatList
                    contentContainerStyle={{ flex: 2, marginVertical: 10, alignItems: 'center' }}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: 300 }}>
                                <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.name}</Text>
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
            )}

        </View>
    );
}
export default List;
