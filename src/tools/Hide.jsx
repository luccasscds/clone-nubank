export function Hide(){
    const texts = document.querySelectorAll(".isHide");
    texts.forEach( text => {
        text.classList.toggle("hide");
    });
}