async function shrink() {
    let data = document.getElementById('fullurl').value;
    console.log(data);
    fetch("http://localhost:5000/shorturl", {
        method: 'POST',
        body: JSON.stringify({ "url": data }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        alert('Shrinked!!');
    }).catch(err => console.log(err));

}

async function filldata() {

    let raw = await fetch('http://localhost:5000/');
    let data = await raw.json();

    let tbody = document.createElement('tbody');
    data.forEach(url => {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerHTML = `<a href="${url.fullURL}">${url.fullURL}</a>`
        let td2 = document.createElement('td');
        td2.innerHTML = `<a href="http://localhost:5000/${url.shortURL}">${url.shortURL}</a>`
        let td3 = document.createElement('td');
        td3.innerHTML = url.clicks;
        tr.append(td1, td2, td3);
        tbody.append(tr);
    })
    document.getElementById('urlTable').appendChild(tbody);
}


filldata();