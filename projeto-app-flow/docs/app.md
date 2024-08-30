# Podcast Manager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts
separados por categoria

### Domínio
Podcasts feitos em video

### Features
- Listar os episódios podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor, esporte, corrida]
- Filtrar episódios por nome de podcast

## Como

### Feature:
 Listar os episódios podcasts em sessões de categorias

### Como vou implementar:
GET: retorna lista de episódios

response:
```js
[
    {
        podcastName: "flow",
        episode: "CBUM - FLOW #319",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg?",
        link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
        category: ["saúde", "esporte", "bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELO - FLOW #339",
        videoId: "pQSuQmUfS30",
        cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg?",
        link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
        category: ["esporte", "corrida"]
    },
]
```

GET: retorna lista de episódios baseado em um parametro enviado
pelo cliente do nome do podcast