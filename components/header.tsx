import { View , Text, Pressable, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from "react-native";

const options = ["Pomodoro","Short Break","Long Break"];

export default function Header({currentTime,setCurrentTime,setTime}){
    
    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime*60);
    }
    
    return(
        <View style={styles.container}>
            {options.map((item, index)=>( 
                <TouchableOpacity
                    key={index} 
                    onPress={()=>{handlePress(index)}}
                    style={[styles.headers,currentTime!==index && {borderColor:"transparent"} ]}
                >
                    <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>))
            }
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        gap:1
    },
    headers:{
        width:"33%",
        borderWidth: 3,
        padding:3,
        borderRadius:15,
        textAlign:"center",
        borderColor:"white",
        marginVertical:20,
        
    },
    text:{
        fontWeight:"bold",
        textAlign:"center"
    }
});