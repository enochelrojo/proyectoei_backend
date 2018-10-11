var Curso = require('./models/curso');

exports.getCurso = function(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    Curso.find(function(err, curso) {
        if (err) res.send(err);    
        
        res.json(curso);
    });    
}

exports.setCurso = function(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    Curso.create({
        nombre: req.body.nombre
    }, 
    function(err, curso) {
        if (err) {
            res.send(err)
        }

        Curso.findOne({'nombre': curso.nombre}, function(err, curso) {
            console.log(curso);
            
            if (err) {
                res.send(err)                
            }

            res.json(curso);
        })
    });
}