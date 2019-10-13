const area = document.getElementById('area');
let move = 0;

area.addEventListener('click', function (e) {
    if (move % 2 === 0) {
        e.target.innerHTML = 'X';
    } else {
        e.target.innerHTML = '0';
    }

    move++;
    check();
});

function check() {
    const boxes = document.getElementsByClassName('box');
    const win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < win.length; i++) {
        if (boxes[win[i][0]].innerHTML == 'X' && boxes[win[i][1]].innerHTML == 'X' && boxes[win[i][2]].innerHTML == 'X') {
            alert('Победили крестики!');
            location.reload();
        } else if (boxes[win[i][0]].innerHTML == '0' && boxes[win[i][1]].innerHTML == '0' && boxes[win[i][2]].innerHTML == '0') {
            alert('Победили нолики!');
            location.reload();
        }
    }
};