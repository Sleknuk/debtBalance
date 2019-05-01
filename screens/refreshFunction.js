import React from 'react';
import {
    ScrollView,
    RefreshControl,
    Text,
    StyleSheet
} from 'react-native';





export default class RefreshableList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    fetchData() {
        console.log('Hello');
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchData().then(() => {
            this.setState({ refreshing: false });
        });
    }

    render() {
        return (

            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={true}
                        onRefresh={this._onRefresh}
                        tintColor="#de411b"
                colors={['#de411b', '#64666d']}
                progressBackgroundColor="#ffffff"
                    />
                }
            >
            <Text style={styles.text}>example pull to refresh</Text>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
text: {
    paddingTop: '50%',
    color: '#000000',
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'center',
  },
});