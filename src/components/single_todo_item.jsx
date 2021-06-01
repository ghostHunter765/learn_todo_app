import React, { Component } from 'react'

class SingleItem extends Component {
    render() {
        return (
            <div className="itemdiv">
                <input
                    id={"checkbox_" + this.props.id}
                    className="checkbox"
                    type="checkbox"
                    checked={this.props.finished}
                    onChange={() => this.props.handler(this.props.id)}
                ></input>
                <label
                    id={"lable_" + this.props.id}
                    className={this.props.finished ? "items items-checked" : "items"}
                >{this.props.discription}</label>
                <hr />
            </div>
        );
    }
}

export default SingleItem;