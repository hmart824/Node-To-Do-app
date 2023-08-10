let list = document.getElementById('list');

list.addEventListener('click' , (e)=>{
    e.stopPropagation();
    let target = e.target;

    //handle check event
    if(target.classList.contains('check-box')){
        let checked;
        let update;
        target.toggleAttribute('checked');
        target.parentNode.classList.toggle('active');
        target.hasAttribute('checked') ? checked = true : checked = false;
        console.log(checked);
        update = {checked: checked};
        console.log(update)
        window.location.href = `/updates/?id=${target.parentNode.dataset.id}&update=${JSON.stringify(update)}`;
    }

    //edit the task
    if(target.classList.contains('edit')){
        if(target.parentNode.children[1].getAttribute('contenteditable') === 'false' && !target.parentNode.firstElementChild.checked){
            target.parentNode.children[1].setAttribute('contenteditable' , true)
        }
    }

    //save the task
    if(target.classList.contains('save')){
        if(target.parentNode.children[1].getAttribute('contenteditable') === 'true'){
            let update;
            target.parentNode.children[1].removeAttribute('contenteditable');
            update = {
                task: target.parentNode.children[1].children[0].innerText,
                category: target.parentNode.children[1].children[2].innerText,
                due_date: target.parentNode.children[1].children[1].innerText
            };
            window.location.href = `/updates/?id=${target.parentNode.dataset.id}&update=${JSON.stringify(update)}`;
        }
    }

    //handle delete
    if(target.classList.contains('delete')){
        window.location.href = `/delete-task/?id=${target.parentNode.dataset.id}`;
    }
   

})