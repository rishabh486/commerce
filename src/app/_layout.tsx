import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
    return    <ToastProvider><Stack>
      
        <Stack.Screen name="(shop)" options={{headerShown:false, title:"Shop"}}/>
        <Stack.Screen name="categories" options={{headerShown:false, title:"Category"}}/>
        <Stack.Screen
                  name='products'
                  options={{ headerShown: false, title: 'Product' }}
                />
        <Stack.Screen name="cart" options={{presentation: 'modal' , title:"Shopping Cart"}}/>
        <Stack.Screen name="auth" options={{headerShown:true, title:"Auth"}}/>
       
    </Stack>
      </ToastProvider> 
}