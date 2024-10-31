<script>
    import { onMount } from 'svelte';
  
    const base = import.meta.env.BASE_URL;

    let isOpen = false;
  
    function toggleSidebar() {
      isOpen = !isOpen;
    }

  </script>
  
  <style>
    .sidebar {
      width: 250px;
      background-color: var(--color-primary);
      padding: 1rem;
      position: fixed;
      height: 100%;
      overflow: visible;
      left: -240px; /* Initially hidden */
      transition: left 0.3s ease;
      z-index: 2; /* Ensure sidebar is above other content */
    }
  
    .sidebar.open {
      left: 0; /* Show sidebar */
    }
  
    .toggle-btn {
      position: absolute; /* Change to fixed to ensure it's not clipped */
      top: 10px;
      right: -50px; /* Position it to the right of the sidebar */
      background-color: var(--color-primary);
      color: white;
      border: none;
      padding: 1rem; /* Increased padding */
      cursor: pointer;
      border-radius: 0 5px 5px 0; /* Rounded corners on the left side */
      transition: left 0.3s ease;
      z-index: 2; /* Ensure button is above the sidebar */
    }
    .sidebar.open + .toggle-btn {
      left: 250px; /* Adjust based on sidebar width */
    }
  </style>
  
  <div>
    <div class="sidebar" class:open={isOpen}>
      <button class="toggle-btn" on:click={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <h2>Navigation</h2>
      <a href="/">Home</a>
      <a href={`${base}/about`}>About</a>
    </div>
  </div>