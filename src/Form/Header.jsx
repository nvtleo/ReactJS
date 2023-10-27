import React, { Component } from 'react';
import css from "./style/style.module.css";
// import { megeClassName } from '../utils';
export default class Header extends Component {
    render() {
        return (
            <div>
                <p className={css["header"]}>Thông tin sinh viên</p>
            </div>
        )
    }
}
