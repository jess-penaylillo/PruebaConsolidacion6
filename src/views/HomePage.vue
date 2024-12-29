<!-- src/views/Home.vue -->
<template>
    <div>
        <h1 class="text-center my-4">Lista de Juegos Disponibles</h1>
        <div class="row">
            <div v-for="game in games" :key="game.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div class="card">
                    <img :src="game.background_image" class="card-img-top" alt="Imagen del juego" />
                    <div class="card-body">
                        <h5 class="card-title">{{ game.name }}</h5>
                        <p class="card-text">
                            <strong>Rating:</strong> {{ game.rating }}<br />
                            <strong>Lanzado:</strong> {{ game.released }}<br />
                            <strong>Última actualización:</strong> {{ game.updated }}
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn btn-primary" @click="redirectToOpinions(game.name)">
                                Opinar
                            </button>
                            <span class="text-danger" style="cursor: pointer;" @click="toggleLike(game)">
                                <i :class="game.liked ? 'fas fa-heart' : 'far fa-heart'"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchGames } from "../services/api";

export default {
    data() {
        return {
            games: [],
        };
    },
    async created() {
        try {
            const data = await fetchGames();
            // Asegúrate de que los datos incluyan `updated` y otras propiedades necesarias.
            this.games = data.results.map((game) => ({
                ...game,
                liked: false, // Añadimos una propiedad `liked` para controlar los "me gusta"
            }));
        } catch (error) {
            console.error("Error al cargar los juegos:", error);
        }
    },
    methods: {
        redirectToOpinions(gameName) {
            this.$router.push(`/opiniones/${gameName}`);
        },
        toggleLike(game) {
            game.liked = !game.liked; // Alternar el estado de "me gusta"
        },
    },
};
</script>

<style scoped>
.card {
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.card-img-top {
    height: 180px;
    object-fit: cover;
}

.card-title {
    font-size: 1.2rem;
    font-weight: bold;
}

.card-text {
    font-size: 0.9rem;
    color: #555;
}

.fas.fa-heart {
    color: red;
}

.far.fa-heart {
    color: gray;
}
</style>