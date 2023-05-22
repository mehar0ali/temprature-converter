const cel = document.getElementById('cel')
const far = document.getElementById('far')

cel.addEventListener('input', function(){
    let c = this.value
    let f = (c * 9/5) +32;

    far.value = f
})

far.addEventListener('input', function(){
    let f = this.value
    let c = (f - 32) * 9/5;

    cel.value = c
})


















