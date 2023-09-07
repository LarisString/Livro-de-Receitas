    const tabs= document.querySelectorAll ('.tab_btn');
    const all_contents= document.querySelectorAll ('.content');

tabs.forEach((tab, index)=>{    
    tab.addEventListener('click', (e)=>{    
        tab.classList.add('active');
    })
})