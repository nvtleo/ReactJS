import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteCreator } from './conect/creator';
import { eidtCreator } from './conect/creator';
class ListSV extends Component {
    render() {
        return (

            <>
                <table style={{ marginTop: "30px" }} class="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Mã sinh viên</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Số điện thoại</th>
                            <th scope="col">Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.listSV.map((sv) => {
                            return (
                                <tr>
                                    <th>{sv.id}</th>
                                    <td>{sv.nameSV}</td>
                                    <td>{sv.SDT}</td>
                                    <td>{sv.email}</td>
                                    <td>
                                        <button onClick={() => {
                                            this.props.dispatch(eidtCreator(sv))
                                            console.log(sv, "sv")
                                        }}
                                        >Edit</button>
                                        <button
                                            onClick={() => {
                                                this.props.dispatch(deleteCreator(sv.id))
                                            }}
                                            className="mx-2"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }

}
const mapStateToProps = (rootReducer) => {
    return {
        listSV: rootReducer.reactFormReducer.listSV,
    };
};
export default connect(mapStateToProps)(ListSV);
