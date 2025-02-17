<script setup></script>
<template>
  <div>
    <router-view />
  </div>
</template>

<style>
body {
  font-family: "Roboto", sans-serif;
}
button {
  cursor: pointer;
}
.bg-gradient {
  background: linear-gradient(to bottom right, #777272, #e6e5e5);
}
.transition-colors {
  transition: background-color 1s ease;
}
.hover-border {
  position: relative;
  overflow: hidden;
}
.hover-border::before,
.hover-border::after,
.hover-border span::before,
.hover-border span::after {
  content: "";
  position: absolute;
  background: black;
  transition: all 1s ease-in-out;
}
.hover-border::before {
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
}
.hover-border::after {
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
}
.hover-border span::before {
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
}
.hover-border span::after {
  bottom: 0;
  left: 0;
  width: 2px;
  height: 0;
}
.hover-border:hover::before,
.hover-border:hover::after {
  width: 100%;
}
.hover-border:hover span::before,
.hover-border:hover span::after {
  height: 100%;
}
/* Custom styles for the border animation */
.top-border {
  width: 0;
  height: 2px; /* Set height for the border */
  background-color: #000000; /* Border color */
  transition: width 0.3s ease-in-out;
}
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown:hover .top-border {
  width: 100%;
}
.dropdown-content {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 2s ease-out, opacity 0.5s ease-out;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  max-height: 500px;
  transform: translateY(0);
  pointer-events: auto; /* Allow interaction when visible */
}
.slow-hover {
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
}
</style>
