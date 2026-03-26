 function szamol() {
   let szelesseg = parseFloat(document.getElementById("szelesseg").value);
   let hosszusag = parseFloat(document.getElementById("hosszusag").value);
   let terulet = szelesseg * hosszusag;
   document.getElementById("terulet").innerHTML = `A téglalap területe: ${terulet}`;
}