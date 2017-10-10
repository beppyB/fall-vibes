'use strict';

function toDoList(focusArea){
    var task = document.createElement('input')
    var checkbox = document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    var closeButt = document.createElement('button')
    var x = document.createTextNode('x')
    closeButt.appendChild(x)
    


    var entry = document.createElement ('div')

    entry.appendChild(checkbox)
    entry.appendChild(task)
    entry.appendChild(closeButt)
    entry.classList.add('entry')

    document.getElementById(focusArea).appendChild(entry)

    var clickHandler = function myFn() {
        document.getElementById(focusArea).removeChild(entry) 
    };

    closeButt.addEventListener("click", clickHandler);
}
