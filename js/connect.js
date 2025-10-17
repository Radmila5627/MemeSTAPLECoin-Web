
async function connectWallet(){
  if(window.ethereum){
    try{
      const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const btn = document.getElementById('connectBtn');
      if(btn){
        btn.textContent = 'Connected: ' + acc[0].slice(0,6)+'…'+acc[0].slice(-4);
        btn.disabled = true;
      }
    }catch(e){ alert('Connection rejected.'); }
  }else{
    window.open('https://metamask.io/download','_blank');
  }
}
async function addToken(){
  if(!window.ethereum){ return alert('Please install MetaMask.'); }
  try{
    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: '0x891920e5b704524C81c213F78473FC837C66fF31',
          symbol: 'MSTAPLE',
          decimals: 18,
          image: window.location.origin + '/assets/logo.png'
        }
      }
    });
    if(wasAdded){ alert('MSTAPLE added to MetaMask!'); }
  }catch(err){
    alert('Could not add token: ' + (err && err.message ? err.message : err));
  }
}
function setLang(lang){
  const dict = {
    en:{title:'Meme STAPLE Coin (MSTAPLE)',tagline:'Connecting Humanity & Technology through Positive Energy.',contractLabel:'Contract:',walletLabel:'Project Wallet:',btnConnect:'Connect Wallet',btnBuy:'Buy on PancakeSwap',btnCopy:'Copy',aboutTitle:'About',aboutText:'Meme STAPLE Coin (MSTAPLE) is a community-driven BEP-20 token on the BNB Chain. It symbolizes connection, creativity, and positive energy, turning the everyday paperclip into a global symbol of unity between people and technology.',keyTitle:'Key Info',cta:'Ready to join? Connect your wallet and swap BNB/USDC for MSTAPLE on PancakeSwap.',bannerH1:'STAPLE Meme Coin — Built with Purpose, Backed by Community',bannerP:'Now live on PancakeSwap! Buy, trade, and share positive energy through technology.'},
    hr:{title:'Meme STAPLE Coin (MSTAPLE)',tagline:'Povezujemo čovjeka i tehnologiju kroz pozitivnu energiju.',contractLabel:'Ugovor:',walletLabel:'Projektni novčanik:',btnConnect:'Poveži novčanik',btnBuy:'Kupi na PancakeSwapu',btnCopy:'Kopiraj',aboutTitle:'O projektu',aboutText:'Meme STAPLE Coin (MSTAPLE) je zajednički BEP-20 token na BNB mreži. Simbolizira povezivanje, kreativnost i pozitivnu energiju – pretvarajući svakodnevnu spajalicu u globalni simbol jedinstva ljudi i tehnologije.',keyTitle:'Ključne informacije',cta:'Spremni? Povežite novčanik i zamijenite BNB/USDC za MSTAPLE na PancakeSwapu.',bannerH1:'STAPLE Meme Coin — Izgrađen s namjerom, podržan zajednicom',bannerP:'Sada dostupan na PancakeSwapu! Kupi, trguj i dijeli pozitivnu energiju kroz tehnologiju.'}
  };
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    el.innerHTML = dict[lang][key] || el.innerHTML;
  });
  const h1 = document.getElementById('banner-h1'); if(h1) h1.textContent = dict[lang].bannerH1;
  const p  = document.getElementById('banner-p');  if(p)  p.textContent  = dict[lang].bannerP;
  document.querySelectorAll('.lang button').forEach(b=>b.classList.remove('active'));
  const btn = document.getElementById('btn-'+lang); if(btn) btn.classList.add('active');
}
window.addEventListener('DOMContentLoaded', ()=>{
  const pref = (navigator.language || 'en').toLowerCase().startsWith('hr') ? 'hr' : 'en';
  setLang(pref);
});
