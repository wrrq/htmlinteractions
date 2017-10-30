var _element,
    _type;
document.addEventListener('DOMContentLoaded', function() {
    _element = document.querySelector('.element > *');
    _type = _element.type;

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
        valueRandom.addEventListener('click', setValueRandom);
    }
    
    const toggletype = document.getElementById('toggle-type');
    if (toggletype) {
        toggletype.addEventListener('click', toggleType);
    }
    
    const togglestate = document.getElementById('toggle-state');
    if (togglestate) {
        togglestate.addEventListener('click', toggleState);
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

function setValue(value) {
    _element.value = value;
}

function clearValue() {
    setValue('');
}

function setValueRandom() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 /*-+=,.;:_#!?()&/$%"§^[]{}@|';
    let result = '';

    const charCount = ~~(getRandomInt() * 7) + 13
    for (let i = 0; i < charCount; i++) {
        result += chars.charAt(~~(getRandomInt() * chars.length));
    }

    setValue(result);
}

function getRandomInt() {
    return +('0.' + window.crypto.getRandomValues(new Uint32Array(1)));
}

function toggleType() {
    _element.type = _element.type === _type ? '' : _type;
}

function toggleState() {
    _element.disabled = !_element.disabled;
}