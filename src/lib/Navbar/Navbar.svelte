<script>
  import "./Navbar.scss";
  import { data } from "$lib/data/en_gb.js";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  const { navbar } = data;

  const scrollIntoView = (e) => {
    const target = e.target.getAttribute("href");
    // check if target is a anchor
    if (target.indexOf("#") === 0) {
      if ($page.url.pathname === "/") {
        const el = document.querySelector(e.target.getAttribute("href"));
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({
          behavior: "smooth",
        });
      } else {
        goto(`/${target}`);
      }
    }
  };
</script>

<div class="c-navbar">
  {#each navbar as item}
    <a
      href={item.url}
      class="c-navbar__item"
      on:click={scrollIntoView}
      class:active={$page.url.pathname === item.url}
    >
      {item.label}
    </a>
  {/each}
</div>
