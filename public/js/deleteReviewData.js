async function deleteFormHanlder(event){
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split.length-1];

    const response = await fetch(`/api/reviewRoutes/${id}`,{
        method: 'DELETE',
    });
    if(response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}
document.querySelector('.del-rev-btn').addEventListener('click',deleteFormHanlder);