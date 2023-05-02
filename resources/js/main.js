document.addEventListener('DOMContentLoaded', () => {
    init();
    function init () {
        handlerClick(getItemsList())
    }

    function getItemsList () {
        return document.querySelectorAll('.table .row');
    }

    function handlerClick (list) {
        let up, down;
        [...list].map((item)=>{
            up = item.querySelector('.fa-caret-up');
            down = item.querySelector('.fa-caret-down');

            up.addEventListener('click', () => {
                changeUpPosition([...list], item, list);
            })

            down.addEventListener('click', () => {
                changeDownPosition([...list], item, list);
            })
        })
    }

    function changeUpPosition (items, itemEvent, list) {
        let position = itemEvent.getAttribute('data-position');
        let previousPosition = position - 1;
        let previousEl;

        items.forEach((item) => {
            if (+item.getAttribute('data-position') === +previousPosition) {
                previousEl = item;
            }
        })

        list.forEach((item) => {
            if (+item.getAttribute('data-position') === +previousPosition) {
                previousEl.setAttribute('data-position', position);
                itemEvent.setAttribute('data-position', previousPosition);
                item.insertAdjacentElement('beforebegin', itemEvent)
            }
        })

    }

    function changeDownPosition (items, itemEvent, list) {
        let position = itemEvent.getAttribute('data-position');
        let nextPosition = +position + 1;
        let nextEl;

        items.forEach((item) => {
            if (+item.getAttribute('data-position') === +nextPosition) {
                nextEl = item;
            }
        })

        list.forEach((item) => {
            if (+item.getAttribute('data-position') === +nextPosition) {
                nextEl.setAttribute('data-position', position);
                itemEvent.setAttribute('data-position', nextPosition);

                item.insertAdjacentElement('afterend', itemEvent);
            }
        })
    }

})