function iniciaModal(modalID){
                        const modal = document.getElementById(modalID);
                        modal.classList.add('mostrarModal');
                        modal.addEventListener('click', (e) => {
                            if(e.target.id == modalID || e.target.className == 'fecharModal'){
                            modal.classList.remove('mostrarModal')
                        }
                        })
   
                        }
                        const abrir = document.querySelector('.botaoReserva');
                        abrir.addEventListener('click', function(){
                            iniciaModal('modal');

                        });