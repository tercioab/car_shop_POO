# CAR SHOP 🚗 


## Descrição

Este é um projeto de uma loja de veículos que consiste em duas entidades principais: carros e motocicletas. Cada entidade possui sua própria API para criação, atualização, remoção e busca. O projeto utiliza Node.js e Express para construir as APIs, bem como o Mongoose como ODM para lidar com o banco de dados MongoDB. Além disso, o projeto usa o Jest para testes de unidade, o Mocha para testes de integração e o Supertest para testes de API.

---

# TASKS :heavy_check_mark:

| task | status |
--- | :---:
 01 - Criar a rota /cars onde seja possível cadastrar um carro | :heavy_check_mark:
 02 - Criar o endpoint para listar carros	 | :heavy_check_mark:
 03 - Escrever testes para cobrir 30% da camada de Service | :heavy_check_mark:
 04 - Criar a rota /cars/:id onde seja possível atualizar um carro por ID | :heavy_check_mark:
 05 - Criar a rota /motorcycles onde seja possível cadastrar uma moto | :heavy_check_mark:
 06 - Escrever testes para cobrir 60% da camada de Service | :heavy_check_mark:
 07 - Criar a rota /motorcycles onde seja possível listar motos | :heavy_check_mark:
 08 - Criar a rota /motorcycles/:id onde seja possível atualizar uma moto por ID | :heavy_check_mark:
 09 - Escrever testes para cobrir 80% da camada de Service | :heavy_check_mark:
 10 - Criar a rota /cars/:id onde seja possível excluir um carro por ID | :heavy_check_mark:
 11 - Criar a rota /motorcycles/:id onde seja possível excluir uma moto por ID | :heavy_check_mark:
 
 ---


## Instalação

 ## Para instalar e executar esse projeto, você precisará ter o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/) instalados em sua máquina.🐳


**⚠ Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. [Veja aqui](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-pt) ou [na documentação](https://docs.docker.com/compose/install/) como instalá-lo. No primeiro artigo, você pode substituir onde está com `1.26.0` por `1.29.2`.**

##### 1: Clone o repositório para sua máquina local: 

```
git clone git@github.com:tercioab/car_shop_POO
```

##### 2: Entre na pasta do projeto: 

```
cd car_shop_POO_SOLID
```

##### 3: Execute o comando `docker-compose up` para construir e iniciar os contêineres. 

```
docker-compose up -d
```
##### 4: A partir daqui você pode rodar o container car_shop via CLI ou abri-lo no VS Code.

```
docker exec -it car_shop bash.
```


##### 5: Instale as dependências

```
npm install
```
##### 6: Já dentro do container suba a aplicação

```
npm run dev 
```

##### 7: Para rodar os testes unitarios

```
npm run test:mocha
```

#### A API estará disponível em ` http://localhost:3000 `.
---

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

---


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

## Contribuição

Este projeto é aberto a contribuições. Se você encontrar algum bug ou tiver ideias para novas funcionalidades, sinta-se à vontade para abrir uma issue ou enviar um pull request.
