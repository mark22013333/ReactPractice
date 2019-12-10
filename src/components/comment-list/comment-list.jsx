import React, { Component } from 'react'
import PropTypes from 'prop-types'

import CommentItem from '../comment-item/comment-item'
import './commentList.css'

export default class CommentList extends Component {

    // 給組件的類別指定屬性
    static propTypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired
    }
    render() {
        const { comments, deleteComment } = this.props
        const display = comments.length === 0 ? 'block' : 'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">評論回覆：</h3>
                <h2 style={{ display }}>暫無評論，點左側新增評論。</h2>
                <ul className="list-group">
                    {
                        comments.map((c, index) => <CommentItem comment={c} key={index} deleteComment={deleteComment} index={index} />)
                    }
                </ul>
            </div>
        )
    }
}

// CommentList.propTypes = {
//     comments: PropTypes.array.isRequired
// }