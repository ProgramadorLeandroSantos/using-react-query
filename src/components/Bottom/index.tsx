import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

function Bottom(): JSX.Element {

    const [txtValue, setTextValue] = useState("");

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
                    console.log(txtValue)
                    setTextValue("")
                }}
            />
        </View>
    );
}
export default Bottom;
