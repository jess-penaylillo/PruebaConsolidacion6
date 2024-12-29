<template>
    <div>
        <h1>Escribe tu opinión sobre el juego: {{ gameName }}</h1>

        <!-- Formulario para agregar nombre y opinión -->
        <div class="mt-3">
            <label for="author">Nombre:</label>
            <input v-model="newAuthor" id="author" placeholder="Tu nombre" class="form-control" />

            <label for="opinion" class="mt-2">Opinión:</label>
            <input v-model="newOpinion" id="opinion" placeholder="Escribe tu opinión" class="form-control" />

            <button @click="addOpinion" class="btn btn-primary mt-2">Agregar Opinión</button>
        </div>

        <!-- Mostrar las opiniones -->
        <div v-if="opinions.length > 0" class="mt-4">
            <h2>Comentarios:</h2>
            <div v-for="(opinion, index) in opinions" :key="index" class="mt-2">
                <div class="card">
                    <div class="card-header">
                        <strong>{{ opinion.author }}</strong>
                    </div>
                    <div class="card-body">
                        <p>{{ opinion.text }}</p>
                        <button @click="editOpinion(index)" class="btn btn-warning btn-sm">Editar</button>
                        <button @click="deleteOpinion(index)" class="btn btn-danger btn-sm">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Alerta cuando no haya opiniones -->
        <div v-else class="mt-4 alert alert-info">
            No hay opiniones disponibles para este juego. ¡Sé el primero en comentar!
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            gameName: this.$route.params.gameName,
            opinions: [], // Array de opiniones
            newAuthor: '', // Nombre del usuario que escribe la opinión
            newOpinion: '', // Opinión del usuario
        };
    },
    created() {
        // Cargar las opiniones desde un servicio o API
        this.fetchOpinions();
    },
    methods: {
        fetchOpinions() {
            // Aquí cargarías las opiniones desde la API o la base de datos
            // Este es un ejemplo con datos estáticos
            this.opinions = [
                { author: 'Juan', text: 'Gran juego, me encanta.' },
                { author: 'Ana', text: 'Muy bueno, aunque podría mejorar.' },
            ];
        },
        addOpinion() {
            if (this.newAuthor.trim() && this.newOpinion.trim()) {
                this.opinions.push({ author: this.newAuthor, text: this.newOpinion });
                this.newAuthor = '';
                this.newOpinion = '';
            } else {
                alert('Por favor, completa ambos campos antes de agregar una opinión.');
            }
        },
        editOpinion(index) {
            const updatedOpinion = prompt('Editar opinión', this.opinions[index].text);
            if (updatedOpinion !== null) {
                this.opinions[index].text = updatedOpinion;
            }
        },
        deleteOpinion(index) {
            if (confirm('¿Estás seguro de eliminar esta opinión?')) {
                this.opinions.splice(index, 1);
            }
        },
    },
};
</script>

<style scoped>
/* Estilos específicos de la vista Opiniones */
.card-header {
    font-weight: bold;
}
.card-body {
    font-size: 14px;
}
</style>
