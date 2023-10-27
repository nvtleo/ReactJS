import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GHEDADAT } from '../redux/reducers/Project-movies/creator'

class ChonGhe extends Component {
    state = {
        listReservedSeat: [],
    }



    setTableSelectSeat = () => {
        return this.props.selectSeat.map((seat) => {
            let { soGhe, gia } = seat
            return <tr key={soGhe}>
                <td>{soGhe}</td>
                <td>{gia}</td>
                <td><button className='btn btn-warning'
                    onClick={() => {
                        this.props.dispatch(GHEDADAT(seat))
                        this.state.listReservedSeat.push(seat)
                        alert("Đặt chỗ thành công")
                    }}

                >Đặt</button></td>
            </tr>
        })
    }
    cancel = (seat) => {
        let newstate = this.state.listReservedSeat.filter((content) => {
            return content !== seat
        })
        this.setState({
            listReservedSeat: newstate,
        })
        alert("Bạn vừa hủy số ghế: " + seat.soGhe)
    }
    setTableReservedSeat = () => {
        return this.state.listReservedSeat.map((seat) => {
            let { soGhe, gia } = seat
            return <tr key={soGhe}>
                <td>{soGhe}</td>
                <td>{gia}</td>
                <td><button className='btn btn-warning' onClick={() => {
                    this.cancel(seat)
                }}>Hủy</button></td>
            </tr>
        })
    }


    render() {
        return (
            <div>
                <div>
                    <button type="button" className="gheDuocChon" data-toggle="collapse" href="#ghedadat">Ghế đã đặt</button>
                </div>
                <div>
                    <button type="button" className="gheDangChon" data-toggle="collapse" href="#ghedangchon">Ghế đang chọn</button>
                </div>
                <div id="ghedangchon" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế bạn chọn</h2>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Đặt ghế</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.setTableSelectSeat()}
                        </tbody>
                    </table>
                </div>
                <div id="ghedadat" className='collapse'>
                    <h2 style={{ textAlign: "center" }}>Danh sách ghế bạn đã đặt</h2>
                    <table className="table table-bordered " >
                        <thead>
                            <tr>
                                <th scope="col">Số ghế</th>
                                <th scope="col">Giá</th>
                                <th scope="col">Hủy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.setTableReservedSeat()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return { selectSeat: rootReducer.movieReducer }
}

export default connect(mapStateToProps)(ChonGhe)
