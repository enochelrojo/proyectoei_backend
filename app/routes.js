var Curso = require('./models/curso');
var Controlador = require('./controlador');

module.exports = function(app) {
    app.get('/api/curso', Controller.getCursos);
    app.post('/api/curso', Controller.setCurso);
    app.put('/api/curso/:curso_id', Controller.updateCurso);
    app.delete('/api/curso/:persona_id', Controller.removeCurso);
    app.get('*', function(req, res) {
        res.sendfile('../static/index.html');
    })
}