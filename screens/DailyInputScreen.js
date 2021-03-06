import React from 'react';
import { Text, View, Button, Slider, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DailyInputSecondScreen from './DailyInputSecondScreen';
import DailyInputThirdScreen from './DailyInputThirdScreen';
import * as Progress from 'react-native-progress';


class DailyInputScreen extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = { 
            bedTime: 9,
            minBedTime: 8,
            maxBedTime: 12,

            sleepTime: 9,
            minSleepTime: 8,
            maxSleeptime: 12,

            wakeUpTime: 6,
            minWakeUpTime: 4,
            maxWakeUpTime: 8,

            timesWokenUp: 2,
            minTimesWokenUp: 0,
            maxTimesWokenUp: 5
        }
    } 

    render() {
        return (
        <ScrollView style={styles.container}>
            <Progress.Bar alignSelf="center" color="blue" progress={0} width={300} />
            <Text style={styles.getStartedText}>What time was it when you went to bed last night?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minBedTime}
                maximumValue={this.state.maxBedTime}
                value = {this.state.bedTime}
                onValueChange={val => this.setState({ bedTime: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minBedTime} PM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.bedTime}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxBedTime} AM</Text>
            </View>
            

            <Text style={styles.getStartedText}>What time was it roughly when you went to sleep last night?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minSleepTime}
                maximumValue={this.state.maxSleeptime}
                value = {this.state.sleepTime}
                onValueChange={val => this.setState({ sleepTime: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minSleepTime} PM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.sleepTime}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxSleeptime} AM</Text>
            </View>

            <Text style={styles.getStartedText}>What time is it when you woke up?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minWakeUpTime}
                maximumValue={this.state.maxWakeUpTime}
                value = {this.state.wakeUpTime}
                onValueChange={val => this.setState({ wakeUpTime: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minWakeUpTime} AM</Text>
                <Text style={styles.colorYellow}>
                    {this.state.wakeUpTime}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxWakeUpTime} AM</Text>
            </View>

            <Text style={styles.getStartedText}>How many times did you wake up last night?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minTimesWokenUp}
                maximumValue={this.state.maxTimesWokenUp}
                value = {this.state.timesWokenUp}
                onValueChange={val => this.setState({ timesWokenUp: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minTimesWokenUp} times</Text>
                <Text style={styles.colorYellow}>
                    {this.state.timesWokenUp}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxTimesWokenUp} times</Text>
            </View>

            <Button
                onPress={() => {
                    console.log("Next daily input screen");
                    this.props.navigation.navigate('DailyTwo');
                }}
                title="Next"
            ></Button>
        </ScrollView>
        
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignContent: 'center',
    backgroundColor: '#7d85b0',
  },
    textCon: {
        width: 320,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center'
    },
    colorGrey: {
        color: '#d3d3d3'
    },
    colorYellow: {
        color: 'rgb(252, 228, 149)'
    },
    getStartedText: {
        fontSize: 17,
        color: '#fff',
        lineHeight: 24,
        textAlign: 'center',
        paddingTop: 20
    }
});

export default DailyInputScreen;
