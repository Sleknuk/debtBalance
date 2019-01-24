import React from 'react';
import {
    ScrollView,
    RefreshControl,
    View
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
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            />

        );
    }
}
