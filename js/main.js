document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('viewer');
    const viewer = new IfcViewerAPI({ container, backgroundColor: 0xaaaaaa });
    viewer.grid.setGrid();
    viewer.axes.setAxes();

    async function loadIfc(url) {
        try {
            await viewer.IFC.loadIfcUrl(url);
            viewer.camera.fitModel();
        } catch (error) {
            console.error('Error al cargar el archivo IFC:', error);
        }
    }

    loadIfc('https://drive.google.com/uc?export=download&id=1L7Ba6i7emG31HL-tyXCkZpzeU__umQSW');
});
