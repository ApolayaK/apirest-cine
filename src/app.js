//Ecmascript Modules
import express from 'express'
import peliculasRouters from './routes/peliculas.routes.js'

const app = express()

app.use(express.json())
app.use('/api/',peliculasRouters) // Rutas peliculas

//Control sobre rutas inexistentes
app.use((req, res, next) =>{
  res.status(404).json({
    message: 'No existe el endpoind'
  })
})

export default app