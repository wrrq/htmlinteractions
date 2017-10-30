document.addEventListener('DOMContentLoaded', function() {
    const search = document.getElementById('search');
    if (search) {
        search.addEventListener('keyup', search);
    }
    
    const valueClear = document.getElementById('value-clear');
    if (valueClear) {
        valueClear.addEventListener('click', clearValue);
    }
    
    const valueRandom = document.getElementById('value-random');
    if (valueRandom) {
        valueRandom.addEventListener('click', clearValue);
    }
    
    const valueZoom = document.getElementById('zoom');
    if (valueZoom) {
        valueZoom.addEventListener('input', zoomElement);
    }
});

function search(e) {
    const elementsQs = [
        'input',
        'button',
        'select',
        'textarea'
    ].map(function(x) {
        return '.elements ' + x;
    }).join(', ');

    [].forEach.call(document.querySelectorAll(elementsQs), function(x) {
        x.hidden = x.matches(e.target.value);
    });
}

function getElement() {
    return document.querySelector('.elements *');
}

function setValue(value) {
    getElement().value = value;
}

function clearValue() {
    setValue('');
}

function setValueRandom() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setValue(result);
}

function zoomElement(e) {
    getElement().style.zoom = e.target.value;
}