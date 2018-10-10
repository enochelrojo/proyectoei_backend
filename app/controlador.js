var Curso = require('./models/curso');

exports.getCurso = function(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    Curso.find(function(err, curso) {
        if (err) res.send(err);    
        
        res.json(curso);
    });    
}

exports.setCurso = function(req, res) {
    Curso.create({
        nombre: req.body.nombre
    }, 
    function(err, curso) {
        if (err) {
            res.send(err)
        }

        Curso.find(function(err, curso) {
            if (err) {
                res.send(err)                
            }

            res.json(curso);
        })
    });
}