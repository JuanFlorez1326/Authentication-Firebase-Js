const postList = document.querySelector('.posts');

export const setupPostsList = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const post = doc.data();
            const li = `
                <li class='list-group-item list-group-item-action list-group-item-dark'>
                    <h5 class='fw-bold'>${post.title}</h5>
                    <p>${post.content}</p>
                </li>
            `;
            html += li;
            console.log(post);
        });
        postList.innerHTML = html;
    }else {
        postList.innerHTML = '<h1 class="center-align">Login To See Posts</h1>';
    }
}