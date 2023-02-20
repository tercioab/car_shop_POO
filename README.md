# README EM CONSTRUÇÃO 

# Linguagem obíqua


### CAR
| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `doorsQty` | _Number_ contendo quantidade de portas de um carro |
| `seatsQty` | _Number_ contendo quantidade de assentos de um carro |

## Motorcycle
| Atributos | Descrição |
| :-------: | :-------- |
| `id`   | _String_ contendo id do veículo |
| `model`   | _String_ contendo modelo do veículo |
| `year`    | _Number_ contendo ano de fabricação do veículo |
| `color`   | _String_ contendo cor principal do veículo |
| `status`  | _Booleano_ contendo status que define se um veículo pode ou não ser comprado _(este atributo deve ser opcional e se não passado, deve ser `false`)_ |
| `buyValue` | _Number_ contendo valor de compra do veículo |
| `category` | _String_ contendo categoria da moto _(opções: `Street`, `Custom` ou `Trail`)_ |
| `engineCapacity` | _Number_ contendo capacidade do motor |

## Rotas

#### CARS 
- `POST /cars` cria um novo carro.
- `GET /cars` retorna lista de carros.
- `GET /cars/:id` retorna um carrO específico pelo seu ID.
- `PUT /cars/:id` atualiza um carro especifico pelo seu ID.
- `DELETE /cars/:id`deleta um carro especifico pelo seu ID.

#### MOTORCYCLES

- `POST /motorcycles` cria um novo carro.
- `GET /motorcycles` retorna lista de carros.
- `GET /motorcycles/:id` retorna um carrO específico pelo seu ID.
- `PUT /motorcycles/:id` atualiza um carro especifico pelo seu ID.
- `DELETE /motorcycles/:id`deleta um carro especifico pelo seu ID.
