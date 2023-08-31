function wrap_page() {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const header_a = document.createElement('a');

    header_a.setAttribute('href', '/');
    header_a.append('WEBSITE URODOV');
    h1.append(header_a);
    header.append(h1);

    document.body.prepend(header);

    const navigation_list = {
	'home': '/',
	'empty jar': '/ej/',
	'about': '/about/',
	'contact': '/contact/'
    };
    const separator = String.fromCharCode(32, 183, 32);

    const footer = document.createElement('footer');
    const hr = document.createElement('hr');
    const strong = document.createElement('strong');

    strong.append('rejoice!');
    footer.append(hr);
    footer.append(strong);

    for (const page in navigation_list) {
	let footer_a = document.createElement('a');
	footer_a.setAttribute('href', navigation_list[page]);
	footer_a.append(page);
	footer.append(separator);
	footer.append(footer_a);
    }

    document.body.append(footer);
}

document.body.onload = wrap_page;
