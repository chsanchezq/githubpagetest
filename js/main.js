import { IfcViewerAPI } from 'web-ifc-viewer';

// Configuración básica de la escena
const container = document.getElementById('viewer');
const viewer = new IfcViewerAPI({ container, backgroundColor: 0xaaaaaa });
viewer.grid.setGrid();
viewer.axes.setAxes();

// Cargar archivo IFC
async function loadIfc(url) {
    await viewer.IFC.loadIfcUrl(url);
    viewer.camera.fitModel();
}

// Llama a la función con la URL de tu archivo IFC
loadIfc('https://drive.google.com/file/d/1L7Ba6i7emG31HL-tyXCkZpzeU__umQSW/view?usp=drive_link');
