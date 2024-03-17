function green(){
    const grn =document.getElementById('A1')
   
}

function hiddedElement(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden'); 
}
// show element
function Showelement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
// Random seat
function randomSeat(){
    const randomString ='A1A2A3A4B1B2B3B4C1C2C3C4D1D2D3D4E1E2E3E4F1F2F3F4G1G2G3G4H1H2H3H4G1G2G3G4J1J2J3J4';
    const randoms =randomString.split('');
}