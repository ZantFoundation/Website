<script>
  import { data } from "$lib/data/en_gb.js";

  const { docs } = data;
</script>

<div class="u-container">
  <section class="c-docs" id="docs">
    <h2 class="c-docs__title">{docs.title}</h2>
    <!-- <h4 class="c-docs__subtitle">{docs.subtitle}</h4> -->
    {#each docs.paragraphs as p}
      <div class="c-docs__p">{@html p}</div>
    {/each}
  </section>
</div>

<style lang="scss">
  @import "./page.scss";
</style>
