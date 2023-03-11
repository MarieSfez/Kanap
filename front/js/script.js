// n° 1 appel a API et recupêere le tableau d'objeet de produits 
fetch('http://localhost:3000/api/products/') // appel a API
.then(reponse => reponse.json())
.then(products => { // recuperation des donnees en JSON
    creationCards(products);

//n°2 iteration sur le tableau et inserer chaque produit dans la div avec ID qui convient    
})
.catch (error=>{
    document.getElementById('items').innerHTML = 'Aucun produit a été trouvé. Veuillez recommencer dans un instant';
    console.log(error)
})
    





function creationCards(products) {
    products.forEach(product => {

        const linkProduct = document.createElement('a');
        linkProduct.setAttribute('href',"./product.html?id=" + product._id )
        //creer les elements html avec createElement();
       
        const article = document.createElement('article');
        
        const image = document.createElement('img');
        image.setAttribute('src', product.imageUrl);
        
        const title = document.createElement('h3');
        title.classList.add('productName');
        title.innerContent = product.name;

        const descriptionProduit = document.createElement('p');
        descriptionProduit.classList.add('productDescription');
        descriptionProduit.innerHTML = product.description;

        //faire les appenchild qui vont bien  
        article.appendChild(image);
        article.appendChild(title);
        article.appendChild(descriptionProduit);

        linkProduct.appendChild(article);

        //faire le appendchild dans le html sur l'id choisit 
        document.getElementById('items').appendChild(linkProduct);

    })
}