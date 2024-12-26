import { Stack } from "expo-router";

export default function RootLayout() {
    return <Stack>
        <Stack.Screen name="(shop)" options={{headerShown:false, title:"Shop"}}/>
        <Stack.Screen name="categories" options={{headerShown:true, title:"Category"}}/>
        <Stack.Screen name="cart" options={{presentation: 'modal' , title:"Shopping Cart"}}/>
        <Stack.Screen name="auth" options={{headerShown:true, title:"Auth"}}/>
    </Stack>
}