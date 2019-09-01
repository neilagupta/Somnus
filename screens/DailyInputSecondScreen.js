import React from 'react';
import { Text, View, Button, Slider, ScrollView, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import { TextInput } from 'react-native-gesture-handler';

class DailyInputSecondScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            napAmount: 60,
            minNapAmount: 0,
            maxNapAmount: 120,

            sleepAid: "",

            wokenUpMinutes: 45,
            minWokenUpMinutes: 0,
            maxWokenUpMinutes: 90,

            qualitySleep: 3,
            minQualitySleep: 1,
            maxQualitySleep: 5
        } 
    } 

    render(props) {
        return (
        <ScrollView style={styles.container}>
            <Progress.Bar alignSelf="center" color="blue" progress={0.333} width={300} />

            <Text style={styles.getStartedText}>If you did wake up in the middle of the night, how long were you awake roughly for?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minWokenUpMinutes}
                maximumValue={this.state.maxWokenUpMinutes}
                value = {this.state.wokenUpMinutes}
                onValueChange={val => this.setState({ wokenUpMinutes: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minWokenUpMinutes} min </Text>
                <Text style={styles.colorYellow}>
                    {this.state.wokenUpMinutes}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxWokenUpMinutes} min</Text>
            </View>

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
            

            <Text style={styles.getStartedText}>What sleep aids did you use, if you used any at all??</Text>
            <TextInput 
                style={{height: 40, borderColor: 'black', borderWidth: 2}}
                onChangeText={(text) => this.setState({sleepAid: text})}
                value={this.state.sleepAid} />

            <Text style={styles.getStartedText}>On a scale of 1 to 5 how was the quality of your sleep?</Text>
            <Slider
                style={{width: 300, height: 40, alignSelf: "center"}}
                step={1}
                minimumValue={this.state.minQualitySleep}
                maximumValue={this.state.maxQualitySleep}
                value = {this.state.qualitySleep}
                onValueChange={val => this.setState({ qualitySleep: val })}
                minimumTrackTintColor="#FFFFFF"
                maximumTrackTintColor="#000000"
            />
            <View style={styles.textCon}>
                <Text style={styles.colorGrey}>{this.state.minQualitySleep}</Text>
                <Text style={styles.colorYellow}>
                    {this.state.qualitySleep}
                </Text>
                <Text style={styles.colorGrey}>{this.state.maxQualitySleep}</Text>
            </View>

            <Button
                title="Next"
                onPress={() => {
                    console.log("Third daily input screen");
                    this.props.navigation.navigate('DailyThree');
                }}
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

export default DailyInputSecondScreen;