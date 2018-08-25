import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foo: 0,
        };
    }

    componentDidMount() {
        this.setState({ foo: 1 });
    }

    render() {
        const { foo } = this.state;
        return (
            <View style={styles.container}>
                <Text>
                    Foo:
                    {foo}
                </Text>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
