const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Presiona Ctrl+C para detenerlo');
});
