// Abrir sidebar

const sideMenu = document.getElementById('sidebar');
const menuBtn = document.getElementById('open_menu');
const closeSideBtn = document.getElementById('close_btn');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block'
});

closeSideBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none'
});


//Transicionar telas e alterar classe na sidebar

//Botões para transicionar as telas

const homeBtn = document.getElementById('home_btn');
const desempenhoBtn = document.getElementById('desempenho_btn');
const lembretesBtn = document.getElementById('lembretes_btn');
const profileBtn = document.getElementById('profile_btn');
const comousarBtn = document.getElementById('comousar_btn');

//Telas

const homePage = document.getElementById('home_page');
const desempenhoPage = document.getElementById('desempenho_page');
const lembretesPage = document.getElementById('lembretes_page');
const profilePage = document.getElementById('profile_page');
const comousarPage = document.getElementById('comousar_page');

//Funções

homeBtn.addEventListener('click', () => {

    homeBtn.classList.add('active');

    desempenhoBtn.classList.remove('active');
    lembretesBtn.classList.remove('active');
    profileBtn.classList.remove('active');
    comousarBtn.classList.remove('active');

    homePage.style.display = 'block';

    desempenhoPage.style.display = 'none';
    lembretesPage.style.display = 'none';
    profilePage.style.display = 'none';
    comousarPage.style.display = 'none';
})

desempenhoBtn.addEventListener('click', () => {

    desempenhoBtn.classList.add('active');

    homeBtn.classList.remove('active');
    lembretesBtn.classList.remove('active');
    profileBtn.classList.remove('active');
    comousarBtn.classList.remove('active');

    desempenhoPage.style.display = 'block';

    homePage.style.display = 'none';
    lembretesPage.style.display = 'none';
    profilePage.style.display = 'none';
    comousarPage.style.display = 'none';
})
lembretesBtn.addEventListener('click', () => {

    lembretesBtn.classList.add('active');

    desempenhoBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    profileBtn.classList.remove('active');
    comousarBtn.classList.remove('active');

    lembretesPage.style.display = 'block';

    desempenhoPage.style.display = 'none';
    homePage.style.display = 'none';
    profilePage.style.display = 'none';
    comousarPage.style.display = 'none';
})
profileBtn.addEventListener('click', () => {

    profileBtn.classList.add('active');

    desempenhoBtn.classList.remove('active');
    lembretesBtn.classList.remove('active');
    homeBtn.classList.remove('active');
    comousarBtn.classList.remove('active');

    profilePage.style.display = 'block';

    desempenhoPage.style.display = 'none';
    lembretesPage.style.display = 'none';
    homePage.style.display = 'none';
    comousarPage.style.display = 'none';
})
comousarBtn.addEventListener('click', () => {

    comousarBtn.classList.add('active');

    desempenhoBtn.classList.remove('active');
    lembretesBtn.classList.remove('active');
    profileBtn.classList.remove('active');
    homeBtn.classList.remove('active');

    comousarPage.style.display = 'block';

    desempenhoPage.style.display = 'none';
    lembretesPage.style.display = 'none';
    profilePage.style.display = 'none';
    homePage.style.display = 'none';
})

// Calcular rendas

let rFixa = 0;

const calcRenda = document.getElementById('calc_r_total');

const showRenda = document.getElementById('r_total');

const alertCart = document.getElementById('alert');

const alertCloseBtn = document.getElementById('close_alert')


calcRenda.addEventListener('click', () => {
    const rFixa = parseFloat(document.getElementById('r_fixa').value);
    const rExtra = parseFloat(document.getElementById('r_extra').value);
    const resultado = rFixa + rExtra;
    

    if(rFixa , rExtra >= 0){
        document.getElementById('r_total').innerText = `R$ ${resultado.toFixed(2)}`
        

    }else{
      Toastify({
        text: "Preencha todas as receitas necessárias!  ",
        duration: 2000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          fontSize:'14px',
          boxShadow:'0',
          fontWeight:"700",
          borderRadius:"5px",
          background:"#ff0060",
        },
      }).showToast();
    }

})

// Despesas

let despesa = [];

document.getElementById('form_desp').addEventListener('submit', addDespesas);

function addDespesas(e){
    e.preventDefault();

    const nomeDesp = document.getElementById('name_desp').value;
    const valorDesp = parseFloat(document.getElementById('valor_desp').value);
    const venciDesp = document.getElementById('venci_desp').value;
    const selectDesp = document.getElementById('select_desp').value;
    const pagarDesp = document.getElementById('pagar_desp').value;
    const multaDesp = parseFloat(document.getElementById('multa_desp').value);
    const descDesp = parseFloat(document.getElementById('desc_desp').value);

    const totalDesp = valorDesp + multaDesp - descDesp

    const despesas ={
        id: Date.now(),
        nome: nomeDesp,
        valor: valorDesp,
        vencimento: venciDesp,
        descricao: selectDesp,
        pagamento: pagarDesp,
        multa: multaDesp,
        desconto: descDesp,
        total: totalDesp
    }

    despesa.push(despesas)
    document.getElementById('form_desp').reset();
    listarDespesa()
    calcTotal()
}

function listarDespesa(){

    document.getElementById('lista-despesas').style.display = 'block';

    const listaDesp = document.getElementById('information-desp');
    listaDesp.innerHTML = ''

    despesa.forEach(despesas => {
        const row = document.createElement('div');

        row.innerHTML = `
        <h3>Conta de: ${despesas.nome}</h3>
          <div class="values">
            <div class="value-desp">
              <p>Valor</p>
              <span>R$ ${despesas.valor.toFixed(2)}</span>
            </div>

            <div class="value-desp">
              <p>Vencimento</p>
              <span>${despesas.vencimento}</span>
            </div>

            <div class="value-desp">
              <p>Descrição</p>
              <span>${despesas.descricao}</span>
            </div>

            <div class="value-desp">
              <p>Pagamento</p>
              <span>${despesas.pagamento}</span>
            </div>

            <div class="value-desp">
              <p>Multa</p>
              <span>R$ ${despesas.multa.toFixed(2)}</span>
            </div>

            <div class="value-desp">
              <p>Desconto</p>
              <span>R$ ${despesas.desconto.toFixed(2)}</span>
            </div>

            <div class="value-desp">
              <p>Total a pagar</p>
              <span>R$ ${despesas.total.toFixed(2)}</span>
            </div>

            <div class="button-area-desp">
              <button onClick='editarDespesa(${despesas.id})'>
                <i class="bx bx-pencil"></i>
                <p>Editar</p>
              </button>
              <button onClick='apagarDespesa(${despesas.id})'>
                <i class="bx bx-trash"></i>
                <p>Apagar</p>
              </button>
            </div>
        `;

        listaDesp.appendChild(row)
    })
}

function calcTotal(){
    const totalDesp = despesa.reduce((total, despesas) => total + despesas.total, 0);
    document.getElementById('total_desp').innerText = totalDesp.toFixed(2);
}

function apagarDespesa(id){
    despesa = despesa.filter(despesas => despesas.id !== id);
    listarDespesa();
    calcTotal();
}

function editarDespesa(id){
    const despesas = despesa.find(despesas => despesas.id == id);

    document.getElementById('name_desp').value = despesas.nome;
    document.getElementById('valor_desp').value = despesas.valor;
    document.getElementById('venci_desp').value = despesas.vencimento;
    document.getElementById('select_desp').value = despesas.descricao;
    document.getElementById('pagar_desp').value = despesas.pagamento;
    document.getElementById('multa_desp').value = despesas.multa;
    document.getElementById('desc_desp').value = despesas.desconto;
    
    apagarDespesa(id)
}

// Saldo

function calcSaldo(){

  const rFixa = parseFloat(document.getElementById('r_fixa').value);
  const rExtra = parseFloat(document.getElementById('r_extra').value);
  const resultado = rFixa + rExtra;

  calcTotal();

  const totalDesp = despesa.reduce((total, despesas) => total + despesas.total, 0);

  const resultadoSaldo = resultado - totalDesp

  document.getElementById('saldo_valor').innerHTML = `${resultadoSaldo.toFixed(2)}`
}