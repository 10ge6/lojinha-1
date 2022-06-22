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

Contém product_id e product_size. Imagem, nome, cor, marca e preço então recebidos por outro pedido através do id.

# Exemplos de uso

## storefront

### GET

localhost:3000/storefront

**ou**

localhost:3000/storefront/*(id)*

### POST

localhost:3000/storefront

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

localhost:3000/storefront/*(id)*

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

localhost:3000/storefront/*(id)*

## cart

### GET

localhost:3000/cart

**ou**

localhost:3000/cart/*(id)*

```
{
    "product_size": 4
}
```

### POST

localhost:3000/cart

```
{
    "product_id": ,
    "product_size": ,
    "product_qty":
}
```

### PATCH

localhost:3000/cart/*(id)*

```
{
    "product_qty": ,
    "product_size":
}
```

### DELETE

localhost:3000/cart/*(id)*

```
{
    "product_size":
}
```

# Pesquisa

localhost:3000/storefront?query= (por nome de produto)

localhost:3000/storefront?category= (por categoria)

localhost:3000/storefront?query=&category= **ou** localhost:3000/storefront?category=&query= (ambos)

