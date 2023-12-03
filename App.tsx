import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { notificationListner, requestUserPermission } from "./src/utils/NotificationService";

const App = () => {

  useEffect(()=>{
    requestUserPermission();
    notificationListner();
  },[]);

  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Push Notification</Text>
    </View>
  );
};

export default App;