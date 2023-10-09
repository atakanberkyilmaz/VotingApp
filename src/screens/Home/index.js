import React, {useState} from 'react';
import { Modal, View, Text, } from 'react-native'
import Questions from './Questions';
import AddButton from '../../components/AddButton';
import AddNewModal from './Questions/AddNewModal';


const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <AddButton onPress = {() => setModalVisible((prev) => !prev)}/>
      ),
    });
  }, [navigation]);
    
  return (
    <View>
      <Questions></Questions>

      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle={"pageSheet"}
        onRequestClose={() => setModalVisible(false)}
        >

        <AddNewModal/>
        </Modal>
    </View>
  )
}

export default Home;