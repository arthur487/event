
const dataDoEvento = new Date("Aug 3, 2025 12:00:00");
const timeStamp = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaEvento = timeStamp - timeStampAtual;

     const DiasAteEvento = Math.floor(distanciaEvento / (1000 * 60 * 60 * 24))
    const horasAteEvento = Math.floor(distanciaEvento % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    const Minutos = Math.floor(distanciaEvento % ((1000 * 60 * 60)) / (1000 * 60));
    const Segundos = Math.floor((distanciaEvento % (1000 * 60) / 1000 ))
    console.log(DiasAteEvento);
    console.log(horasAteEvento);
    console.log(Minutos);
    console.log(Segundos);


    document.getElementById('contador').innerHTML = `${DiasAteEvento}d ${horasAteEvento}h ${Minutos}m ${Segundos}s`;

    if (distanciaEvento < 0 ) {
        clearInterval(contaHoras);
            document.getElementById('contador').innerHTML = 'evento expirado'
    }
}, 1000);
