# Estrutura das tables

## storefront:

(todas as colunas precedidas por "product_")

| id | pic | title | brand | color | category | subcategory | price | size |
|----|-----|-------|-------|-------|----------|-------------|-------|------|
|INT (auto increment)|200 chars (p/ URL)|50 chars|25 chars|15 chars|15 chars|20 chars|INT (p/ div. por 100)|INT (entre 0~63)|

Tamanho(s) determinado(s) por:

- PP = 1
- P = 2
- M = 4
- G = 8
- GG = 16
- XG = 32

Desta maneira uma quantidade arbitrária de tamanhos pode ser dada a cada item, com seu valor sendo a soma dos disponíveis.
product_size = 0 indica tamanho único.

## cart:

Contém product_id e product_size. Imagem, nome, cor, marca e preço então recebidos por outro pedido através do id.
