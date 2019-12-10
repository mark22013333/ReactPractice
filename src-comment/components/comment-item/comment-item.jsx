import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './commentItem.css'

export default class CommentItem extends Component {

    static propTypes = {
        comment: PropTypes.object.isRequired,
        deleteComment: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired
    }

    handleClick = () => {
        const { comment, deleteComment, index } = this.props
        if (window.confirm(`Are you delete ${comment.username} comment?`)) {
            deleteComment(index)
        }
    }

    render() {
        const { comment } = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="javascript:;" onClick={this.handleClick}>刪除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>Say:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}