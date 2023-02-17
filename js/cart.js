console.log('Working')

const insertName = document.getElementById("insert-name");
const insertDesc = document.getElementById("insert-desc");
const insertCost = document.getElementById("insert-cost");
const insertBtn = document.getElementById("insert-btn");

const itemsContainer = document.getElementById("items-container");

const itemContainerClasses = ["bg-emerald-300", "w-48", "h-auto", "py-2", "px-4", "mb-3", "text-center"];
const itemBtnClasses = ["h-8", "w-16", "bg-rose-300"];


insertBtn.addEventListener("click", function(){
    
    const itemContainer = document.createElement('div');
    itemContainer.classList.add(...itemContainerClasses);

    const itemHeader = document.createElement('h2');
    itemHeader.innerText = insertName.value;
    
    const itemDesc = document.createElement('p');
    itemDesc.innerText = insertDesc.value;

    const itemCost = document.createElement('p');
    itemCost.innerText = insertCost.value;

    const itemBtn = document.createElement('button');
    itemBtn.innerText = 'Delete';
    itemBtn.classList.add(...itemBtnClasses);

    itemContainer.appendChild(itemHeader);
    itemContainer.appendChild(itemDesc);
    itemContainer.appendChild(itemCost);
    itemContainer.appendChild(itemBtn);

    // implementing delete
    itemBtn.addEventListener("click", function(event){
        console.log(itemBtn.parentNode.parentNode);

        itemBtn.parentNode.parentNode.removeChild(event.target.parentNode);

     })

    itemsContainer.appendChild(itemContainer);

    insertName.value = '';
    insertDesc.value = '';
    insertCost.value = '';

})



