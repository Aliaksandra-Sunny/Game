import React from "react";
import style from "./Field.module.css"

class Field extends React.Component {
    render() {
        return (
            <div onClick={this.props.active !== "" ? this.props.incCounter : this.props.decCounter}
                 className={`${style.item} ${style[this.props.active]}`}>
            </div>
        )
    }
}

export default Field;