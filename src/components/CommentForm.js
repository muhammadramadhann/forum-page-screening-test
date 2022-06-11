import React, { useState } from 'react';

function CommentForm() {

    const initialValues = {
        name: "",
        email: "",
        comment: ""
    }

    const [commentValues, setCommentValues] = useState(initialValues);
    const [commentErrors, setCommentErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCommentValues({
            ...commentValues,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCommentErrors(validation(commentValues));
        setCommentValues({
            ...commentValues,
            name: "",
            email: "",
            comment: ""
        })
    }

    const validation = (comments) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!comments.name) {
            errors.name = "Wajib diisi"
        }
        if (!comments.email) {
            errors.email = "Wajib diisi"
        } else if (!regexEmail.test(comments.email)) {
            errors.email = "Format email salah"
        }
        if (!comments.comment) {
            errors.comment = "Wajib diisi"
        }
        return errors;
    }

    const handleReset = () => {
        setCommentValues({
            ...commentValues,
            name: "",
            email: "",
            comment: ""
        })
    }

    return (
        <section className="add-comment">
            <h2>Tambah komentar</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Nama" value={commentValues.name} onChange={handleChange} />
                <p className="error">{commentErrors.name}</p>
                <input type="text" id="email" name="email" placeholder="Email" value={commentValues.email} onChange={handleChange} />
                <p className="error">{commentErrors.email}</p>
                <textarea name="comment" id="comment" cols="60" rows="5" placeholder="Komentar anda" value={commentValues.comment} onChange={handleChange}></textarea>
                <p className="error">{commentErrors.comment}</p>
                <div className="btn">
                    <button type="button" className="btn-reset" onClick={handleReset}>Reset</button>
                    <button type="submit" className="btn-submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default CommentForm;