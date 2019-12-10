import React, { Component } from 'react'

import CommentAdd from '../comment-add/comment-add'
import CommentList from '../comment-list/comment-list'

export default class App extends Component {
    /*
    constructor(props) {
        super(props)
        this.state = {
            comment: [
                { username: 'Tom', content: 'good' },
                { username: 'Jack', content: 'bad' }
            ]
        }
    }*/
    // 給組件指定屬性
    state = {
        comments: [
            { username: 'Tom', content: 'good~!!' },
            { username: 'Jack', content: 'bad@@' }
        ]
    }

    addComment = (comment) => {
        const { comments } = this.state
        comments.unshift(comment)
        this.setState({ comments })
    }

    deleteComment = (index) => {
        const { comments } = this.state
        comments.splice(index, 1) // 可方法可新刪修
        this.setState({ comments })
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>發表評論</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment} />
                    <CommentList comments={comments} deleteComment={this.deleteComment} />
                </div>
            </div>
        )
    }
}