# Inicializar Node com TS com 1 linha

npm init -y typescript -D

# Inicializa um projeto Node.js

npm init -y

# Cria a pasta src

mkdir src

# Cria o arquivo inicial

echo 'console.log("hello world");' > src\dado.ts

# Instala as dependências

npm i typescript tsx tsup -D

# Cria o arquivo tsconfig

npx tsc --init
configure depois a forma que deseja que o tsconfig funcione
referencias: https://www.typescriptlang.org/tsconfig/

# Scripts padrões

"scripts": {
"dist": "tsup src",
"start:dev": "tsx src/index.ts",
"start:watch": "tsx watch src/index.ts",
"start:dist": "npm run dist && node dist/index.js"
},

