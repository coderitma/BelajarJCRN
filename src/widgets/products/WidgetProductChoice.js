import { useState } from "react";
import { Button, Modal, Portal, Provider, Text } from "react-native-paper";

const WidgetProductChoice = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={{ backgroundColor: "white", padding: 20 }}>
          <Text>Example Modal. Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 8 }} onPress={() => setVisible(true)}>
        Pilih Product
      </Button>
    </Provider>
  );
};

export default WidgetProductChoice;
