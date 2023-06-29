export function centerItem() {
    let items = document.querySelectorAll('.move');
    let viewportWidth = window.innerWidth;
    for (let item of items){
      let itemWidth = item.offsetWidth + 20;
      let leftPosition = (viewportWidth - itemWidth) / 2;
      let rightPosition = (viewportWidth - itemWidth) / 2;
      item.style.left = leftPosition + 'px';
      item.style.right = rightPosition + 'px';
    }
}
  
export async function getDataFromJson(){
      let jsonData = await fetch("/json/images.json");
      let data = await jsonData.json();
      return data;
}

export function cleanContent(){

    const divElements = modalContainer.getElementsByTagName('div');

    // Convert the HTMLCollection to an array for easier manipulation
    const divArray = Array.from(divElements);

    // Remove each div element
    divArray.forEach((div) => {
        div.remove();
    });

    const modalDivElements = modalContainer.getElementsByTagName('div');
    const modalDivArray = Array.from(modalDivElements);

    // Remove each div element
    modalDivArray.forEach((div) => {
        div.remove();
    });
}