<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <i class="fas fa-headphones"></i> GameOpinions
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                <i class="fas fa-home"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/opiniones" class="nav-link">
                Opiniones
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mt-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Custom styles for the navbar and body */
body {
  background-color: #181818;
  color: #ffffff;
}

.navbar {
  background-color: #000000;
}

.navbar-brand {
  font-size: 1.5rem;
  color: #ffffff !important;
}

.navbar-nav .nav-link {
  color: #ffffff !important;
}

.navbar-nav .nav-link i {
  margin-right: 5px;
}
</style>
