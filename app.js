let checkBoxInput = document.getElementById('checkBoxInput');
let body = document.getElementsByTagName('body')[0];

checkBoxInput.addEventListener('change', function(){
    if( checkBoxInput.checked ){
        body.classList.add('darkmode')
    }else {
        body.classList.remove('darkmode')
    }

    // body.classList.toggle('darkmode',  checkBoxInput.checked)

    localStorage.setItem('saveitem', checkBoxInput.checked ? 1 : '')
});

if ( localStorage.getItem('saveitem') ){
    body.classList.add('darkmode')
    checkBoxInput.checked = true;
}
