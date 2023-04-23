import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { api } from '../../api';
import { useQuery } from 'react-query';

function List(): JSX.Element {

    const { data, isLoading } = useQuery('get-list-data', api.getNames)

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
            {isLoading ? (<Text style={{ fontSize: 32, color: 'black' }}>Loading...</Text>) : (
                <FlatList
                    contentContainerStyle={{ flex: 2, marginVertical: 10, alignItems: 'center' }}
                    renderItem={({ item }) => <Text style={{ fontSize: 20, textAlign: 'center' }}>{item.name}</Text>}
                    data={data}
                />
            )}

        </View>
    );
}
export default List;
