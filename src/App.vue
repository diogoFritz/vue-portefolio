<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/random-pictures">Portefolio</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App'
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f8f9fa;
}

nav a {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}
</style>