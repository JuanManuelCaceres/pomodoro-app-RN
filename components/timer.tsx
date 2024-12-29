import { View , Text, StyleSheet} from "react-native";

export default function Timer({time}){
    
    const formatedTimeMinutes = `${Math.floor(time/60).toString().padStart(2,"0")}`;
    const formatedTimeSeconds = `${(time % 60).toString().padStart(2,"0")}`;
    return(
        <View style={style.container}>
            <Text style={style.time}>{formatedTimeMinutes}</Text>
            <Text style={[style.time]}> : </Text>
            <Text style={style.time}>{formatedTimeSeconds}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        backgroundColor:"#f2f2f2",
        padding:15,
        borderRadius:20,
        flex:.4,
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center"
    },
    time:{
       fontSize:80,
       fontWeight:"bold",
       textAlign:"center",
    }
});