function sayMyname(name) {
    console.log("Antes de executar a função callback")

    name()

    console.log("Depois de executar o name")
}

sayMyname(
    function Ab(){
        console.log("Estou em um callback")
    }
)