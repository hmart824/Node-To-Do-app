let list = document.getElementById('list');

list.addEventListener('click' , (e)=>{
    e.stopPropagation();

    //handle check event
    if(e.target.classList.contains('check-box')){
        let checked;
        let update;
        e.target.toggleAttribute('checked');
        e.target.parentNode.classList.toggle('active');
        e.target.hasAttribute('checked') ? checked = true : checked = false;
        console.log(checked);
        update = {checked: checked};
        console.log(update)
        window.location.href = `/updates/?id=${e.target.parentNode.dataset.id}&update=${JSON.stringify(update)}`;
    }

    //edit the task
    if(e.target.classList.contains('edit')){
        if(e.target.parentNode.children[1].getAttribute('contenteditable') === 'false' && !e.target.parentNode.firstElementChild.checked){
            e.target.parentNode.children[1].setAttribute('contenteditable' , true)
        }
    }

    //save the task
    if(e.target.classList.contains('save')){
        if(e.target.parentNode.children[1].getAttribute('contenteditable') === 'true'){
            let update;
            e.target.parentNode.children[1].removeAttribute('contenteditable');
            update = {
                task: e.target.parentNode.children[1].children[0].innerText,
                category: e.target.parentNode.children[1].children[2].innerText,
                due_date: e.target.parentNode.children[1].children[1].innerText
            };
            window.location.href = `/updates/?id=${e.target.parentNode.dataset.id}&update=${JSON.stringify(update)}`;
        }
    }

    //handle delete
    if(e.target.classList.contains('delete')){
        window.location.href = `/delete-task/?id=${e.target.parentNode.dataset.id}`;
    }
   

})