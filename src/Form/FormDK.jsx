import React, { Component } from 'react'
import Header from './Header';
import { flushSync } from "react-dom";
import { connect } from "react-redux";
import { submitCreator, updateCreator } from './conect/creator';
// import { css } from "./style/style.module.css"
class FormDK extends Component {
    state = {
        value: {
            id: "",
            SDT: "",
            nameSV: "",
            email: "",
        },
        error: {
            id: "",
            SDT: "",
            nameSV: "",
            email: "",
        },
        touch: {
            id: false,
            SDT: false,
            nameSV: false,
            email: false,
        }

    }
    handleValidate = () => {
        let { value } = this.state
        const newError = { ...this.state.error };
        for (const key in value) {
            switch (key) {
                case "id":
                    newError[key] = "";
                    // xét id không được trùng
                    const isLife = this.props.listSV.find((sv) => +sv.id === Number(value[key]));
                    const isNotEdit = !this.props.listSVEdit;
                    if (isLife && isNotEdit) {
                        newError[key] = "id đã tồn tại"
                    }
                    // id phải là số
                    const REGEX_ID = /^\d+$/;
                    if (!REGEX_ID.test(value[key])) {
                        newError[key] = " Mã sinh viên phải là số";
                    }
                    //id không được bỏ trống
                    if (value[key].length === 0) {
                        newError[key] = "Mã sinh viên không được bỏ trống"
                    }

                    break;
                case "SDT":
                    newError[key] = "";
                    // id phải là số
                    const REGEX_NUMBER = /^\d+$/;
                    if (!REGEX_NUMBER.test(value[key])) {
                        newError[key] = " Số điện thoại phải là số";
                    }
                    //id không được bỏ trống
                    if (value[key].length === 0) {
                        newError[key] = "Số điện thoại không được bỏ trống"
                    }
                    break;
                case "nameSV":
                    newError[key] = "";
                    const REGEX_NAME = /^[a-z A-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$/
                    if (!REGEX_NAME.test(value[key])) {
                        newError[key] = " Tên sinh viên không hợp lệ"
                    }
                    if (value[key].length === 0) {
                        newError[key] = "Tên sinh viên không được bỏ trống"
                    }
                    break;
                case "email":
                    newError[key] = "";
                    const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if (!REGEX_EMAIL.test(value[key])) {
                        newError[key] = "email không hợp lệ"
                    }
                    if (value[key].length === 0) {
                        newError[key] = "Email sinh viên không được bỏ trống"
                    }
                    break;
                default:
                    break;
            }
        }
        this.setState({
            error: newError,
        });
        return newError;
    }
    handleChange = (event) => {
        console.log(event, "evetn")
        const { value, name } = event.target;
        // console.log(value, "123");
        flushSync(() => {
            this.setState({
                value: {
                    ...this.state.value,
                    [name]: value
                },
            });
        });
        this.handleValidate()
    }
    handleBlur = (event) => {
        const { name } = event.target;
        this.setState({
            touch: {
                ...this.state.touch,
                [name]: true,
            }
        });
        this.handleValidate()
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            touch: {
                id: true,
                SDT: true,
                nameSV: true,
                email: true,
            }
        });
        const newError = this.handleValidate();
        // kiểm tra nếu có 1 message error nào thì không cho submit
        const ready = Object.values(newError).every((i) => i.length === 0);
        if (ready === false) return;
        const action = this.props.listSVEdit ? updateCreator(this.state.value) : submitCreator(this.state.value)
        this.props.dispatch(action);
        this.setState({
            value: {
                id: "",
                SDT: "",
                nameSV: "",
                email: "",
            },
            touch: {
                id: false,
                SDT: false,
                nameSV: false,
                email: false,
            }
        }
        )
    };
    static getDerivedStateFromProps(newProps, currentState) {
        if (newProps.listSVEdit !== null) {
            // Lấy giá trị props.productEdit cập nhật 1 lần trước đó rồi.
            // Lần sau chúng ta sẽ không cần cập nhật lại nữa
            if (newProps.listSVEdit.id !== currentState.value.id)
                return {
                    value: newProps.listSVEdit,
                };
        }
        // không cập nhật lại state
        return null;
    }
    render() {
        console.log({ props: this.props }, "12345")
        return (
            <form onSubmit={this.handleSubmit}>
                <Header />
                <div className="row" >
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mã sinh viên</label>
                            <input
                                name="id"
                                disabled={this.props.listSVEdit}
                                value={this.state.value.id}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {this.state.touch.id && this.state.error.id && (
                                <p className="text-danger">{this.state.error.id}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input
                                name="SDT"
                                value={this.state.value.SDT}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="number" className="form-control" id="exampleInputPassword1" />
                            {this.state.touch.SDT && this.state.error.SDT && (
                                <p className="text-danger">{this.state.error.SDT}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-6">

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ tên</label>
                            <input
                                name="nameSV"
                                value={this.state.value.nameSV}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            {this.state.touch.nameSV && this.state.error.nameSV && (
                                <p className='text-danger'>{this.state.error.nameSV}</p>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input
                                name="email"
                                value={this.state.value.email}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                                type="email" className="form-control" id="exampleInputPassword1" />
                            {this.state.touch.email && this.state.error.email && (
                                <p className='text-danger'>{this.state.error.email}</p>
                            )}
                        </div>
                    </div>
                    <button
                        style={{ marginLeft: "10px" }} type="submit" className="btn btn-success ">
                        {this.props.listSVEdit ? "Cập nhật" : "Thêm sinh viên"}
                    </button>
                </div>
            </form>
        )
    }
}
const mapStateToProps = (rootReducer) => {
    console.log(rootReducer, "root")
    return {
        listSV: rootReducer.reactFormReducer.listSV,
        listSVEdit: rootReducer.reactFormReducer.listSVEdit

    };
};
export default connect(mapStateToProps)(FormDK)
