const body          = document.querySelector('body');
const modals        = document.querySelectorAll('.modal');
const listItems     = document.querySelectorAll('.list-item');
const overlay        = document.querySelector('.modal-overlay');
const closeButtons = document.querySelectorAll('.modal1_close');



listItems.forEach((listItem) => {
    listItem.addEventListener('click',()=>{
        const modal = getModal(listItem);
        const overflowValue = body.getAttribute('data-overflow');
        if(overflowValue === 'true') {
            closeModal(modal);
        }else if(overflowValue === 'false') {
            openModal(modal);
        }
    });
});
//モーダルの閉じるボタンを押した時の処理
closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        const modal = closeButton.closest('.modal');
        if(modal){
            closeModal(modal);
        }
    });
});
//オーバーレイをクリックした時の処理
overlay.addEventListener('click',()=>{
    modals.forEach((modal)=>{
        if(modal.getAttribute('data-modal-active') === 'true'){
            closeModal(modal); 
     }});
});

//該当するモーダルの取得
const getModal = (listItem) => {
    const index = listItem.getAttribute('data-btn-index');
    const modal = modals[index];
    return modal;
}
//モーダルの閉じるボタンを取得
const closeModal = (modal) => {
    modal.setAttribute('data-modal-active', 'false');
    overlay.setAttribute('data-overlay-active', 'false');
    body.setAttribute('data-overflow','false');

}
//モーダルの開くボタンを取得
const openModal = (modal) => { 
    modal.setAttribute('data-modal-active', 'true');
    overlay.setAttribute('data-overlay-active', 'true');
    body.setAttribute('data-overflow','true');
}
