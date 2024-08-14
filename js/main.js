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
loadIfc('assets/ifcbridge-model01.ifc');
