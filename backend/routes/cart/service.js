const sql = require('../../db').pool;

// CRUD functions

// adicionando item ao carrinho
exports.createCartItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO cart (product_id, product_size, product_qty) VALUES (?, ?, ?)',
            [req.body.product_id, req.body.product_size, req.body.product_qty],
            (error) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                res.status(201).send({
                    message: 'Item adicionado ao carrinho com sucesso'
                });
            }
        );
    });
}

// retornando todos os itens do carrinho
exports.readCart = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM cart',
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                res.status(200).send({
                    message: 'Exibindo todos os itens no carrinho',
                    response: response
                });
            }
        );
    });
}

// retornando item especifico da loja
exports.readCartItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM cart WHERE product_id = ? AND product_size = ?',
            [req.params.product_id, req.body.product_size],
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                if(response.length == 0){
                    return res.status(404).send({
                        error: "Item nao encontrado"
                    });
                }
                
                res.status(200).send({
                    message: 'Exibindo infos do item no carrinho',
                    response: response
                });
            }
        );
    });
}

// atualizando quantidade de item do carrinho
exports.updateCartItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'UPDATE cart SET product_qty = ? WHERE product_id = ? AND product_size = ?',
            [req.body.product_qty, req.params.product_id, req.body.product_size],
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                if(response.affectedRows == 0){
                    return res.status(404).send({
                        error: "Item nao encontrado"
                    });
                }

                res.status(200).send({
                    message: 'Item atualizado com sucesso no carrinho'
                });
            }
        );
    });
}

// deletando item do carrinho
exports.deleteCartItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'DELETE FROM cart WHERE product_id = ? AND product_size = ?',
            [req.params.product_id, req.body.product_size],
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                if(response.affectedRows == 0){
                    return res.status(404).send({
                        error: "Item nao encontrado"
                    });
                }

                res.status(200).send({
                    message: 'Item deletado do carrinho',
                    response: response
                });
            }
        );
    });
}
