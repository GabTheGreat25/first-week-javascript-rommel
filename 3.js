var foo = 'bar'

if (foo) {
    let bar = 42 //will not work because let is only locally hindi siya same pag hindi var pag var ito gagana kkasi kukunin nya both value
    console.log(bar)
}
console.log(bar) //but commenting this will work kasi hindi siya sa loob ng function