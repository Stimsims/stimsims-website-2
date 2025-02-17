<script>
    import { onMount } from 'svelte';
    import './sidebar.css';
  
    const base = import.meta.env.BASE_URL;

    let isOpen = false;
  
    function toggleSidebar() {
      isOpen = !isOpen;
    }

  </script>
  

  
  <div>
    <div class="sidebar polka-dots" class:open={isOpen}>
      <button class="toggle-btn" on:click={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <h2>Navigation</h2>
      <div class="link-container">
        <a href="/">Home</a>
      </div>
      <div class="link-container">
        <a href={`${base}about`}>About</a>
      </div>
      <div class="link-container">
        <a href={`${base}stem-meditation`}>Stem Meditation</a>
      </div>
      <!-- <div class="link-container">
        <a href={`${base}childrens-adventure-books-by-stimsims`}>Childrens Adventure Books</a>
      </div> -->
      <div class="link-container">
        <a href={`${base}tags`}>Tags</a>
      </div>
      {#if import.meta.env.DEV}
        <div class="link-container">
          <a href={`${base}experiment`}>Experiment</a>
        </div>
      {/if}
    </div>
  </div>