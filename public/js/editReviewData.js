async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="review-title"]').value;
    const review_text = document.querySelector('textarea[name="review_text"]').value;

    const id = window.location.toString().split('/')[window.location.toString().split.length-1];

    const response = await fetch(`/api/reviewRoutes/${id}`,{
        method: 'PUT',
        body: JSON.stringify({
            title,
            review_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-review-form').addEventListener('submit',editFormHandler);