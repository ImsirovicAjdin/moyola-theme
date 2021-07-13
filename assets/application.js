// Put your application javascript here
// alert('It works!');
document.querySelector('#sort_by').addEventListener('change', function(e) {
    let url = new URL(window.location.href);
    url.searchParams.set('sort_by', e.currentTarget.value);

    window.location = url.href;
})