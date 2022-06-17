const sql = require('../../db').pool;

// CRUD functions

// criando item
exports.createItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'INSERT INTO storefront (product_pic, product_title, product_brand, product_color, product_category, product_subcategory, product_price, product_size) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [req.body.product_pic, req.body.product_title,
            req.body.product_brand, req.body.product_color, req.body.product_category,
            req.body.product_subcategory, req.body.product_price, req.body.product_size],
            (error) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                res.status(201).send({
                    message: 'Item criado com sucesso'
                });
            }
        );
    });
}

// retornando todos os itens da loja
exports.readStorefront = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM storefront',
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                res.status(200).send({
                    message: 'Exibindo todos os itens',
                    response: response
                });
            }
        );
    });
}

// retornando item especifico da loja
exports.readItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'SELECT * FROM storefront WHERE product_id = ?',
            [req.params.product_id],
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                if(response.length == 0){
                    return res.status(404).send({
                        error: "ID nao encontrado"
                    });
                }
                
                res.status(200).send({
                    message: 'Exibindo infos do item',
                    response: response
                });
            }
        );
    });
}

// atualizando item da loja
exports.updateItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'UPDATE storefront SET product_pic = ?, product_title = ?, product_brand = ?, product_color = ?, product_category = ?, product_subcategory = ?, product_price = ?, product_size = ? WHERE product_id = ?',
            [req.body.product_pic, req.body.product_title, req.body.product_brand,
            req.body.product_color, req.body.product_category, req.body.product_subcategory,
            req.body.product_price, req.body.product_size, req.params.product_id],
            (error) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                res.status(200).send({
                    message: 'Item atualizado com sucesso'
                });
            }
        );
    });
}

// deletando item da loja
exports.deleteItem = (req, res) => {
    sql.getConnection((error, conn) => {
        if(error) {return res.status(500).send({error: error})}
        conn.query(
            'DELETE FROM storefront WHERE product_id = ?',
            [req.params.product_id],
            (error, response) => {
                conn.release();

                if(error) {
                    return res.status(500).send({
                        error: error
                    });
                }

                if(response.affectedRows == 0){
                    return res.status(404).send({
                        error: "ID nao encontrado"
                    });
                }

                res.status(200).send({
                    message: 'Item deletado',
                    response: response
                });
            }
        );
    });
}