import React, { Component } from 'react';
import FormDK from './FormDK';
import ListSV from './ListSV';

export default class FormAll extends Component {
    render() {
        return (
            <>
                <FormDK />
                <ListSV />
            </>
        )
    }
}
