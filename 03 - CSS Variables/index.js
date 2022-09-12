
const inputs=document.querySelectorAll('.controls input');

//dataset contains all the data values of html tag
function handleUpdate(){
    const suffix=this.dataset.sizing || '' ;
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));