# Apps em Express para estudar:

- Node e TypeScript
- Verbos HTTP e APIs
- Processamento assíncrono
- Estrutura de dados: Objetos e Coleções
- Operações com os tipos primitivos da linguagem

## Detalhes

1. Para testar a API 

O `Curl` foi usado pelo terminal, mas também é possível usar o `Postman` por exemplo.

`Curl`

```bash
curl    GET     http://localhost:3000/ -v
curl -X POST    http://localhost:3000/ -v
curl -X PUT     http://localhost:3000/ -v
curl -X DELETE  http://localhost:3000/ -v
```

2. A porta usada foi :3000

```typescript
// Express Router _______________________________________________________________________________________
app.listen(3000, () => {
    (...)
});
```

3. Servindo um dos apps

O `yarn` está configurado para servir cada app:
- app1.ts: `yarn http`
- app2.ts: `yarn routes`

## 1 Verbos HTTP

Criando um app Express e Descobrindo como uma requisicao funciona com sua resposta.

```typescript
// Create an express application
const app = express();

// Middleware
app.use(express.json());

// GET
app.get('/', (req: Request, res: Response) => {
    (...)
}
```

## 2 Encadeando Requisicoes em suas Rotas

Simplificando a leitura tomando as rotas como objeto de interesse

```typescript
// Index Route
app.route('/')
    .get(...)
    .post(...)
    .put(...)
    .delete(...)
    .all(...)
```

## 3 Routes

Rotas podem ser string ou RegExp

```typescript
const wildcardRoutes: string[] = ['/api/*', '/ab*cd'];
const excatRoutes: RegExp[] = [/cars/, /cats/, /instruments/];
```
