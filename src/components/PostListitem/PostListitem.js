import React from "react";
import "./PostListitem.css";

export default class PostListitem extends React.Component {
  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props;

    let classNames = "app-list-item d-flex justify-content-between",
      classNamess = "";
    if (important) {
      classNames += " important";
    }

    if (like) {
      classNamess += "fa fa-heart like";
    }

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLiked}>
          {label}
        </span>
        <div className="d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-star btn-sm"
            onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button
            type="button"
            className="btn-trash btn-sm"
            onClick={onDeleted}
          >
            <i className="fa fa-trash"></i>
          </button>
          <i className={classNamess}></i>
        </div>
      </div>
    );
  }
}
