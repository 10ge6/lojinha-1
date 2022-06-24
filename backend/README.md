# Índice

[Estrutura das tables](#estrutura-das-tables)

[Exemplos de requests](#exemplos-de-requests)

[Exemplos de pesquisa](#exemplos-de-pesquisa)

[Exemplo de paginação](#exemplo-de-paginação)

# Estrutura das tables

## storefront

(todas as colunas precedidas por "product_")

| id | pic | title | desc | brand | color | category | subcategory | price | size |
|----|-----|-------|------|-------|-------|----------|-------------|-------|------|
|INT (auto increment)|200 chars (URL)|50 chars|300 chars|25 chars|15 chars|15 chars|20 chars|INT (p/ div. por 100)|INT (entre 0~63)|

Tamanho(s) determinado(s) por:

- PP = 1
- P = 2
- M = 4
- G = 8
- GG = 16
- XG = 32

Desta maneira uma quantidade arbitrária de tamanhos pode ser dada a cada item, com seu valor sendo a soma dos disponíveis.
product_size = 0 indica tamanho único.

## cart

Contém product_id e product_size. Imagem, nome, cor, marca e preço então recebidos por outro pedido (para storefront) através do id.

# Exemplos de requests

## storefront

### GET

localhost:8000/storefront

**ou**

localhost:8000/storefront/*(id)*

retorna todos ou um, respectivamente, no formato:
```
{
	"product_id": ,
	"product_pic": "",
 	"product_title": "",
 	"product_desc": "",
 	"product_brand": "",
 	"product_color": "",
 	"product_category": "",
 	"product_subcategory": "",
	"product_price": ,
	"product_size": 
}
```

### POST

localhost:8000/storefront
+
```
{
	"product_pic": "",
 	"product_title": "",
 	"product_desc": "",
 	"product_brand": "",
 	"product_color": "",
 	"product_category": "",
 	"product_subcategory": "",
	"product_price": ,
	"product_size": 
}
```

### PATCH

localhost:8000/storefront/*(id)*
+
```
{
	"product_pic": "",
	"product_title": "",
	"product_desc": "",
	"product_brand": "",
	"product_color": "",
	"product_category": "",
	"product_subcategory": "",
	"product_price": ,
	"product_size": 
}
```

### DELETE

localhost:8000/storefront/*(id)* (caso o item também se encontre no cart, será deletado de ambas tables)

## cart

### GET

localhost:8000/cart

**ou**

localhost:8000/cart/*(id)*
+
```
{
    "product_size": 
}
```

retorna todos ou um, respectivamente, no formato:
```
{
	"product_id": ,
	"product_size": ,
 	"product_qty": ,
 	"product_pic": "",
	"product_title": "",
 	"product_brand": "",
 	"product_color": "",
	"product_price": 
}
```

### POST

localhost:8000/cart
+
```
{
    "product_id": ,
    "product_size": ,
    "product_qty": 
}
```

### PATCH

localhost:8000/cart/*(id)*
+
```
{
    "product_qty": ,
    "product_size": 
}
```

### DELETE

localhost:8000/cart/*(id)*
+
```
{
    "product_size": 
}
```

# Exemplos de pesquisa

localhost:8000/storefront?query= (por nome de produto)

localhost:8000/storefront?category= (por categoria)

localhost:8000/storefront?query=&category= **ou** localhost:8000/storefront?category=&query= (ambos)

# Exemplo de paginação

É necessário ao frontend, de modo a renderizar os botões indicando a quantidade de páginas da loja, obter a quantidade de itens presentes em storefront:

localhost:8000/storefront?count

retorna no formato:
```
{
    "COUNT(*)": 
}
```

**Cada página contém, no máximo, 10 itens.**

Para realizar a requisição em si, o número de páginas deve ser fornecido:

localhost:8000/storefront?page=

Naturalmente este pode ser combinado com a pesquisa:

localhost:8000/storefront?page=&query=&category= (em qualquer ordem)
