
import { Text, View, Pressable } from 'react-native'
import { Icon,Divider } from 'react-native-paper';
const Options = () => {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'aqua' }}>
                <Icon source="close" color='black' size={20}></Icon>
                <Text style={{ textAlign: 'center', size: '20', marginLeft: 100, fontWeight: 'bold' }}> Options</Text>
            </View>
            <Pressable onPress={null}>
                <View style={{ flex: 0.9, backgroundColor: 'white' }}>
                    <Text style={{ textAlign: 'left', size: 60, fontWeight: 'bold' }}> Update Profile</Text><Divider/>
                    <Text style={{ textAlign: 'left', size: 60, fontWeight: 'bold' }}> Change Language</Text><Divider/>
                    <Text style={{ textAlign: 'left', size: 60, fontWeight: 'bold' }}> Sign Out</Text><Divider/>
                </View>
            </Pressable>
        </View>
    )
}

export default Options;