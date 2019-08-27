import React from 'react';
import { Text, View, Button, Slider, ScrollView, StyleSheet } from 'react-native';

class DailyInputSecondScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            napAmount: 30,
            minNapAmount: 0,
            maxNapAmount: 120,

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

    render(props) {
        return (
        <ScrollView style={styles.container}>
            <Text style={styles.getStartedText}>How long did you nap, if you napped yesterday?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minNapAmount}
                maximumValue={this.state.maxNapAmount}
                value = {this.state.napAmount}
                onValueChange={val => this.setState({ napAmount: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minNapAmount} min</Text>
                <Text style={styles.colorYellow}>
                    {this.state.napAmount}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxNapAmount} min</Text>
            </View>
            

            <Text style={styles.getStartedText}>What time was it roughly when you fell sleep?</Text>
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

            <Text style={styles.getStartedText}>What time was it when you woke up?</Text>
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

            <Text style={styles.getStartedText}>How many times were you woken up?</Text>
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
                title="Next"
            ></Button>
        </ScrollView>
        
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 65,
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

export default DailyInputSecondScreen;