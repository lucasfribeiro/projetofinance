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

const calcRenda = document.getElementById('calc_r_total');

const showRenda = document.getElementById('r_total');

calcRenda.addEventListener('click', () => {
    rFixa = parseFloat(document.getElementById('r_fixa').value);
    rExtra = parseFloat(document.getElementById('r_extra').value);
    const resultado = rFixa + rExtra;
    document.getElementById('r_total').innerText = `R$ ${resultado.toFixed(2)}`
})