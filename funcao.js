function convert() 
{

  const binary = document.getElementById('bin').value;

    if (binary === '') return alert('Por favor, insira um número binário!');
              binary.split('').map((char) => {
    if (char !== '0' && char !== '1') return alert('Por favor, insira um número binário!');
 });

  const decimal = parseInt(binary, 2);
  document.getElementById('dec').value = decimal;
  return true;


}
/*

function convert1() {

  const hexadec = document.getElementById('hex').value;

if (hexadec >= 0) 
hexadec.split('').map((char) => {
if (char == '0' && char == '1') return alert('Por favor, insira um número binário!');
});

const decimal = parseInt(hexadec, 16);
document.getElementById('dec').value = decimal;
return true;
}

*/