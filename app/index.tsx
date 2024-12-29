import {Text, View , StyleSheet, StatusBar, TouchableOpacity} from "react-native";
import { useEffect, useState } from "react";
import Header from "@/components/header";
import Timer from "@/components/timer";
import {Audio} from "expo-av"

export default function Index() {
  const [isWorking,setIsWorking] = useState(false);
  const [time,setTime] = useState(25 * 60);
  const [currentTime,setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive,setIsActive] = useState(false);
  const colors =["#f7dc6f","#a2d9c3","#d7bde2"];

  function handleStartStop (){
    playSound();
    setIsWorking(!isWorking);
  }

  async function playSound(){
    const {sound} = await Audio.Sound.createAsync(
      require("../assets/audio/click.mp3")
    );
    await sound.playAsync();
  }

  useEffect(()=>{
    let interval = null;
    if(isWorking){
      // run timer
      interval = setInterval(()=>{
        setTime(time -1)
      },1000)
    } else {
      // clear interval
      clearInterval(interval)
    }

    if(time===0){
      setIsWorking(false);
      setIsActive((prev)=>!prev)
      setTime(isActive ? 300 : 1500)
    }

    return()=>clearInterval(interval)
  },[isWorking,time]);
  
  return (
    
      <View style={[styles.container,{backgroundColor:colors[currentTime]}]}>
        <StatusBar></StatusBar>
        <Text style={styles.title}>Pomodoro</Text>
        <Header 
          currentTime={currentTime}
          setTime={setTime} 
          setCurrentTime={setCurrentTime} />
        <Timer time={time}></Timer>
        <TouchableOpacity style={styles.button} onPress={handleStartStop}>
          <Text style={[styles.text, {color:"white"}]}>
            {isWorking ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop:25,
    paddingHorizontal:15,
  },
  title:{
    fontFamily:'Roboto sans-serif',
    fontSize:32,
    fontWeight:700,
  },
  timer:{
    fontFamily:'Roboto sans-serif',
    fontSize:58,

  },
  button:{
    flex:0.15,
    marginVertical:35,
    justifyContent:"center",
    backgroundColor:"#444",
    borderRadius:20
  },
  text:{
    textAlign:"center",
    
    fontSize:48,
    fontWeight:"bold"
  }

});

