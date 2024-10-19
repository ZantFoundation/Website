<script>
  import "@fontsource-variable/noto-sans";
  import Navbar from "$lib/Navbar/Navbar.svelte";
  import { data } from "$lib/data/en_gb.js";
  import { page } from "$app/stores";
  import { onNavigate } from "$app/navigation";

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  const { header, footer } = data;
</script>

<main>
  <section class="c-header" class:full-height={$page.url.pathname === "/"}>
    <h1 class="c-header__title">{@html header.title}</h1>
    <Navbar />
  </section>
  <slot />
</main>
<footer class="footer">
  <a href={`mailto:${footer.url}`}>{footer.title}</a>
</footer>

<style lang="scss">
  @import "./layout.scss";
</style>
