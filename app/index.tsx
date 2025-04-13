import { View, Text, StyleSheet } from 'react-native';
//exporting all the requirements

export default function HomeScreen() {
return (
<View style={styles.container}>
<Text style={styles.text}>Name: Keerthi Gajjela</Text>
<Text style={styles.text}>Degree: MS in Computer Science</Text>
<Text style={styles.text}>School: City University of Seattle</Text>
</View>
);
}

//giving the style,fonts 
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'yellow',
justifyContent: 'center',
alignItems: 'center',
},
text: {
fontSize: 20,
margin: 10,
},
});