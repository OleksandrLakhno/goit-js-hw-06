const allCategories = document.querySelectorAll('li.item');
console.log('Numbers of categories:',allCategories.length);

allCategories.forEach(element => {
    const titleElem = element.querySelector('h2');
    const liElem = element.querySelectorAll('li');

    console.log('Category:',titleElem.textContent);
    console.log('Elements:',`${liElem.length}`);
});




