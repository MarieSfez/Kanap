//1 je recupere l'id en parametre de l'url
const params = new URLSearchParams(window.location.search);
const productID = params.get('id');
console.log(params)
console.log(productID)

//2. appel de API sur cet ID => retour objet product
fetch('http://localhost:3000/api/products/'+productID) // appel a API
.then(reponse => reponse.json())
.then(product => {
    console.log(product);
    affichageProduit(product);
 })
//3. ajouter dans le html les données qui viennent du product
function affichageProduit(product){
    creationImageProduit(product);
    affichageInformationProduit(product);
    creationOptionsCouleur(product.colors);
}
function creationOptionsCouleur(colors){
    colors.forEach(nomCouleur=>{
        const option = document.createElement('option');
        option.innerHTML = nomCouleur;
        option.setAttribute('value', nomCouleur);

        document.getElementById('colors').appendChild(option)
    })
}

function affichageInformationProduit(product){
    document.getElementById('title').innerHTML = product.name;
    document.getElementById('price').innerHTML = new Intl.NumberFormat('fr-FR').format( product.price);
    //document.getElementById('price').innerHTML = product.price;
    document.getElementById('description').innerHTML = product.description;

}

function creationImageProduit(product){
    const image = document.createElement('img');
    image.setAttribute('src',product.imageUrl);
    image.setAttribute('alt', product.altTxt);
    document.querySelector('.item__img').appendChild(image);
}

//4. pouvoir créer un panier

