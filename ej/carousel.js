const images = [
    'empty',
    'everybody',
    'try',
    'falsity',
    'ichthyology',
    'sky'
];

const id = Math.floor(Number((new URL(document.location).searchParams).get('id')) % images.length);

const image = document.querySelector('img');

const prev = document.getElementById('prev');

const next = document.getElementById('next');

const prev_id = (id - 1 + images.length) % images.length;

const next_id = (id + 1) % images.length;

if (id == 4) {
    console.log('fish time');
    const fish = document.createElement('a');
    document.querySelector('.carousel').replaceChild(fish, image);
    fish.append(image);
    fish.setAttribute('href', 'https://en.wikipedia.org/wiki/Sailfish');
}

image.setAttribute('src', `carousel-images/${images[id]}.gif`);
image.setAttribute('alt', images[id]);
image.setAttribute('title', images[id]);

prev.setAttribute('href', `?id=${prev_id}`);

next.setAttribute('href', `?id=${next_id}`);
