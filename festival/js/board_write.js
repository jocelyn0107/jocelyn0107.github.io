// quill 에디터
const toolbarOptions = [
    [{ 'font': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'color': [] }, { 'background': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['clean'],

    ['link', 'image', 'video'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],

    [{ 'align': [] }],

    [{ 'indent': '-1'}, { 'indent': '+1' }],
    ['blockquote', 'code-block']
];

const quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },
    theme: 'snow'
});     