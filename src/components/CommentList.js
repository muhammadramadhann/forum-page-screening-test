import React from 'react';
import Moment from 'moment';
import './Comment.css';

function CommentList({ comments }) {
    return (
        <section className="forum-comment">
            <h2>Komentar</h2>
            <hr />
            {
                comments.map(item => (
                    <div key={item.id} className="comment-item">
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" width="90" />
                        <div className="comment-content">
                            <p className="comment-author">{item.author}</p>
                            <p className="comment-date">{Moment(item.date).format('DD MMMM YYYY h:mm')}</p>
                            <p className="comment-message">{item.message}</p>
                            <div className="comment-point">
                                <span>{item.point} point</span>
                                <button><i className="fa-solid fa-arrow-up"></i></button>
                                <button><i className="fa-solid fa-arrow-down"></i></button>
                            </div>
                            {
                                item.replies.map(reply => (
                                    <div key={reply.id} className="comment-replies">
                                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" width="60" />
                                        <div className="reply-content">
                                            <p className="comment-author">{reply.author}</p>
                                            <p className="comment-date">{Moment(reply.date).format('DD MMMM YYYY h:mm')}</p>
                                            <p className="comment-message">{reply.message}</p>
                                            <div className="comment-point">
                                                <span>{reply.point} point</span>
                                                <button><i className="fa-solid fa-arrow-up"></i></button>
                                                <button><i className="fa-solid fa-arrow-down"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default CommentList;