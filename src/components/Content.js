import React, { useState } from 'react';
import Aside from './Aside';
import CommentList from './CommentList';
import discussion from '../utils/discussions.json';
import comments from '../utils/comments.json';
import './Content.css';
import CommentForm from './CommentForm';

function Content() {
    const [discussions] = useState(discussion);

    return (
        <main>
            <div id="content">
                <section className="forum-header">
                    <h1>Lampu webcam tiba-tiba menyala sendiri tanpa membuka aplikasi webcam</h1>
                    <p className="forum-question">Mau tanya, akhir-akhir ini webcam sering nyala sendiri. Apakah ada yang tahu penyebabnya dan solusi untuk memperbaiki hal itu? Apakah ada kemungkinan laptop saya di-hack karena kasus terjadi tiap terkoneksi internet.</p>
                </section>
                <CommentList comments={comments} />
                <CommentForm />
            </div>
            <Aside discussions={discussions} />
        </main >
    );
}

export default Content;