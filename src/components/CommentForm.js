import React from 'react';

function CommentForm() {
    return (
        <section className="add-comment">
            <h2>Tambah komentar</h2>
            <hr />
            <form action="">
                <input type="text" id="name" name="name" placeholder="Nama" /><br />
                <input type="email" id="email" name="email" placeholder="Email" /><br />
                <textarea name="comment" id="comment" cols="60" rows="5" placeholder="Komentar anda"></textarea>
                <div className="btn">
                    <button type="button" className="btn-reset">Reset</button>
                    <button type="button" className="btn-submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default CommentForm;