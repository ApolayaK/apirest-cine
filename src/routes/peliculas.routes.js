import { Router } from "express";
import { createPeliculas, deletePeliculas, getPeliculaById, getPeliculas, updatePeliculas } from "../controllers/peliculas.controller.js";

const router = Router()

//VERBOS...
//APIREST = Verbos
router.get('/peliculas', getPeliculas)
router.get('/peliculas/:id', getPeliculaById)

router.post('/peliculas',createPeliculas)

router.put('/peliculas/:id', updatePeliculas)

router.delete('/peliculas/:id', deletePeliculas)

export default router