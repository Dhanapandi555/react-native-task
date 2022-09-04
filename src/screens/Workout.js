import {View, Text, FlatList} from 'react-native';
import React, {useState, useRef,useEffect} from 'react';
import {StyleSheet} from 'react-native';
// import { IconButton } from 'react-native-paper';
// import { Timer } from 'react-native-stopwatch-timer';
import Video from 'react-native-video';
import {Stopwatch, Timer} from 'react-native-stopwatch-timer';
import video from '../videoplayback.mp4';
import Card from '../components/Card';
import {RESPONSE} from '../../constants';
import Icon from 'react-native-vector-icons/AntDesign';
import {default as FeatherIcon} from 'react-native-vector-icons/Feather';
import Controller from '../components/Controller';

const Workout = () => {
  const forward = () => {
    if(currentIndex+1<=1)
    setCurrentIndex(prev =>prev+1)
  }
  const back = () => {
    if(currentIndex-1>=0)
    setCurrentIndex(prev =>prev-1)
  }
  const playOrPause = () => {
   console.log(play)
   setPlay(prev => !prev)
   setPlayTimer(prev => !prev)
 }
  const handleRest = () => {
    
      setRest(true)
      setTimeout(function () {
        setRest(false)
        forward()
      }, 9000)
    
  }
  const onSeeking = currentTime => setCurrentTime(currentTime);
  const [currentIndex, setCurrentIndex] = useState(0)
  const [play, setPlay] = useState(true)
  const [playTimer, setPlayTimer] = useState(false)
  const [rest,setRest]=useState(false)

    
   
  return (

    

    
    <View style={styles.root}>
      <View style={styles.topBar}>
        <Icon name="close" size={30} color="black" />

        <Stopwatch
          totalDuration={90000}
          start={playTimer}
          reset={false}
          handleFinish={handleTimerComplete}
          options={options}
        
          // Callback when video cannot be loaded
        />

        <FeatherIcon name="more-vertical" size={30} color="black" />
      </View>
      <Video
        onBuffer={() => console.log('called')}
        volume={10} // Callback when remote video is buffering
        onError={(e) => console.log('error',e)}
        fullscreen={true}
        // source={video}
        source={{
          uri: RESPONSE.data[0].sets[currentIndex].motion.media.videos.main.url,
        }}
        paused={!play}
        style={{backgroundColor: 'red', width: '100%', height: 300}}
        resizeMode="cover"
        onLoad={() => setPlayTimer(true)}
        onLoadStart={() => console.log('load start')}
        onEnd={() =>handleRest() }
      />
     
      {rest && 

        <Text style={{color:"white",position:"relative",top:-150,fontSize:30,opacity:0.8,textAlign:"center"}}>Rest</Text>
}
     
       
      <FlatList
        contentContainerStyle={{marginBottom:200}}
        ItemSeparatorComponent={()=><Card duration={'0:10'} title={'Rest'} />}
        renderItem={val => (
         
            <Card
              duration={val.item.motion.media.videos.main.duration}
              title={val.item.motion.name}
            />
           
        )}
        data={RESPONSE.data[0].sets}
      />

      <Controller playOrPause={playOrPause} back={back} forward={forward} play={ play}  />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topBar: {
    backgroundColor: 'white',
    height: '10%',
    diplay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBar: {
    backgroundColor: 'white',
    height: '10%',
    diplay: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  overlayTextView: {
    position: 'relative',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    right: 5
},
overlayImageView: {
    position: 'relative',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    left: 5
},
overlayImage: {
    position: 'absolute',
    height: 40
},
overlayText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
},
video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
},
videoWithOverlays: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
}
});

export default Workout;

const handleTimerComplete = () => alert('custom completion function');

const options = {
  container: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginLeft: 7,
  },
};
