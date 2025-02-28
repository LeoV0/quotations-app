let quoteCount = 0;

function addQuote(){
    let inputAuteur = document.querySelector('#auteur').value;
    let inputCitation = document.querySelector('#titre').value;
    const compteur = document.querySelector("#count");

    const paragrapheText = document.createElement('p');
    paragrapheText.classList.add('text');

    const paragrapheAuteur = document.createElement('p');
    paragrapheAuteur.classList.add('author');

    paragrapheText.innerHTML =`Citation : ${inputCitation}`;
    paragrapheAuteur.innerHTML = `Auteur/Autrice : ${inputAuteur}`;
   
    const div = document.createElement('div');
    div.classList.add('quote');
    div.appendChild(paragrapheText);
    div.appendChild(paragrapheAuteur);

    const getQuoteList = document.querySelector('#quote-list');
    getQuoteList.appendChild(div)
    quoteCount += 1

    compteur.textContent = `${quoteCount} Citations`;
}