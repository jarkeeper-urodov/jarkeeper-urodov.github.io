const images = [
    'empty',
    'everybody',
    'try',
    'falsity',
    'ichthyology',
    'sky'
];

const id = Math.floor(Number((new URL(window.document.location).searchParams).get('id')) % images.length);

const image = window.document.querySelector('img');

const prev = window.document.getElementById('prev');

const next = window.document.getElementById('next');

const prev_id = (id - 1 + images.length) % images.length

const next_id = (id + 1) % images.length

image.setAttribute('src', `carousel-images/${images[id]}.gif`);
image.setAttribute('alt', images[id]);
image.setAttribute('title', images[id]);

prev.setAttribute('href', `?id=${prev_id}`);

next.setAttribute('href', `?id=${next_id}`);
