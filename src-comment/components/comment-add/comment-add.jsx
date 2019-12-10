import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class CommentAdd extends Component {

    static propTypes = {
        addComment: PropTypes.func.isRequired
    }

    state = {
        content: ''
    }

    handleSubmit = () => {
        const comment = this.state
        this.props.addComment(comment)
        this.setState({
            username: '',
            content: ''
        })
    }

    handleNameChange = (e) => {
        const username = e.target.value
        this.setState({ username })
    }

    handleContentCgange = (e) => {
        const content = e.target.value
        this.setState({ content })
    }

    render() {
        const { username, content } = this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>帳號</label>
                        <input type="text" className="form-control" placeholder="帳號"
                            vaule={username} onChange={this.handleNameChange} />
                    </div>
                    <div className="form-group">
                        <label>評論內容</label>
                        <textarea className="form-control" rows="6" placeholder="評論內容"
                            value={content} onChange={this.handleContentCgange}></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.handleSubmit}>送出</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}