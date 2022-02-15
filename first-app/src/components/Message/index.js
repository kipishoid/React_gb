import React from "react";
import "./style.sass";
export class Message extends React.Component {
  render() {
    const { txt, author } = this.props;
    return (
      <div>
        <span className="message__txt">
          {author + ":"} {txt}
        </span>
      </div>
    );
  }
}
