import React, { Component } from 'react'
import HangGhe from './hangGhe';
export default class ListSeat extends Component {
    arraySeat = this.props.arraySeat
    array = [];
    setListSeat = () => {
        return this.arraySeat.map((obj) => {
            let { hang, danhSachGhe } = obj;
            return <tr key={hang}>
                <td>{hang}</td>
                <HangGhe danhSachGhe={danhSachGhe} array={this.array} />
            </tr>
        })
    }

    render() {
        return (
            <table className='table table-seat'>
                <tbody>
                    <tr>
                        <td></td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                    </tr>
                    {this.setListSeat()}
                </tbody>
            </table>
        )
    }
}
