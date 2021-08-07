
export function itemMenu (props){
    let {hash} = props
    const items = document.querySelectorAll('.item')


    if (!hash  || hash === '#/') {
        items[0].classList.toggle('active')
    } else if (hash.includes('#/fotos')) {
        items[1].classList.toggle('active')
    }
}