function displayPyramid() {
    let n = document.getElementById("heightOfPyramid").value;
    console.log('Salut, bienvenue dans ma super pyramide ! Combien d étages veux-tu ?');
    console.log(n);
    if (0 < n && n <= 25) {
        console.log('Voici la pyramide : ');
        for (var i = 0; i < n; i++) {
            var str = '';
            for (var j = 1; j < n - i; j++) {
                str = str + ' ';
            }
            for (var k = 1; k <= (2 * i + 1); k++) {
                str = str + '#';
            }
            console.log(str);
        }
    } else {
        console.log('Désolé la hauteur de la pyramide est invalide');
        alert('Désolé la hauteur de la pyramide est invalide');
    }

}