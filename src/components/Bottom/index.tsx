import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { api } from '../../api';

function Bottom(): JSX.Element {
    const queryClient =  useQueryClient();
    const [txtValue, setTextValue] = useState("");
    
    const { mutate } = useMutation(()=> api.addName(txtValue),{
        onSuccess: () =>  queryClient.invalidateQueries('get-list-data')
    })
    

    return (
        <View style={{
            alignItems: 'center',
            marginBottom: 20
        }}>
            <TextInput style={{
                borderColor: 'black',
                borderRadius: 5,
                borderWidth: 1,
                width: '90%',
                height: 30,
                fontSize: 15,
                justifyContent: 'center',
                paddingVertical: 0,
                paddingHorizontal: 10,
            }}
                value={txtValue}
                onChangeText={setTextValue}
                placeholder='Adicionar Pessoa'
                onEndEditing={() => setTextValue("")}
                onSubmitEditing={() => {
                    mutate();
                    setTextValue("");
                }}
            />
        </View>
    );
}
export default Bottom;
