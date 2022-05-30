
const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['/app/src/route/routes.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "tldv API Sample",
        description: "I was rushing to create this file zzzz"
    },
    host: "localhost:5000",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    definitions: {
        Video: {
            name: "Jhon Doe",
            url: "1Gve6LL11qGos88pyXhdaPcFQ265bLcqVJ",
            thumbnailUrl:"a99fbb39-e6c2-4094-8a9b-93d2077f3b03",
            isPrivate: false,
            timesViewed:0
        },
        create: {
            $name: "Jhon Doe",
            $url: "1Gve6LL11qGos88pyXhdaPcFQ265bLcqVJ",
            $thumbnailUrl:"a99fbb39-e6c2-4094-8a9b-93d2077f3b03",
            $isPrivate: false,
            $timesViewed:0
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('/app/src/server.js')
});