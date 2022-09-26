let nb1 = document.querySelector("#nb1");
let submit = document.querySelector("#submit");
let content = document.querySelector("#content");
// * 10 permet mettre entre 10
let valeur = Math.random() * 10;
//toFixed() permet de retirer le nbr décimal
let fixe = valeur.toFixed(0)
// le nbr est au début: 1
let coup =1;
submit.addEventListener('click', (e) => {
    //afficher le nombre de coup
    alert('nombre de coup est: '+coup +' nombre');
     coup += 1;
    let nb1 = document.querySelector("#nb1");
    e.preventDefault()
    if (nb1.value == fixe) {
        console.log(fixe);
        content.innerHTML = 'Félicitation c\'est la reponse :  ' + nb1.value
        content.className = 'bravo'
        //il va afficher le nombre total
        alert('Votre nombre au total est ' + coup + ' nombre' );
        
    } else if (nb1.value < fixe) {
        console.log(fixe);
        content.innerHTML = 'Ce n\'est pas la bonne reponse :  ' + nb1.value + '</br> la valeur est très petit'
        content.className = 'echec'
    } else if (nb1.value > fixe) {
        console.log(fixe);
        content.innerHTML = 'Ce n\'est pas la bonne reponse :  ' + nb1.value + '</br>  la valeur est très grand'
        content.className = 'echec'
        
    } 
})