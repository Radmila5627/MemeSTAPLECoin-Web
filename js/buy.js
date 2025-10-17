
function buyOnPancake(){
  window.open('https://pancakeswap.finance/swap?outputCurrency=0x891920e5b704524C81c213F78473FC837C66fF31','_blank');
}
function copyText(id){
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.textContent.trim());
  alert('Copied: ' + el.textContent.trim());
}
function openChartDexTools(){
  window.open('https://www.dextools.io/app/en/bnb/token/0x891920e5b704524C81c213F78473FC837C66fF31','_blank');
}
function openChartPooCoin(){
  window.open('https://poocoin.app/tokens/0x891920e5b704524C81c213F78473FC837C66fF31','_blank');
}
