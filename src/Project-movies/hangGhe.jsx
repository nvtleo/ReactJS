import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { GHEDANGCHON } from '../redux/reducers/Project-movies/creator';
class HangGhe extends Component {


    pushVitri = (seat) => {
        let index = this.props.array.findIndex((vitri) => {
            return seat.soGhe === vitri.soGhe
        })
        if (index == -1) {
            this.props.array.push(seat)
        } else {
            this.props.array.splice(index, 1)
        }
        return this.props.array
    }

    setRow = () => {
        return this.props.danhSachGhe.map((seat) => {
            let { soGhe, gia, daDat } = seat;
            return <td key={soGhe}><input type="checkbox" id={soGhe} value={soGhe} onClick={() => {
                const arraya = this.pushVitri({
                    soGhe,
                    gia,
                    daDat,
                })
                this.props.dispatch(GHEDANGCHON(arraya))
            }} />
            </td>
        })
    }
    render() {

        return (
            <Fragment>
                {this.setRow()}
            </Fragment>
        )
    }
}


export default connect()(HangGhe) 
