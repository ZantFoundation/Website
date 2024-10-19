<script>
  import { data } from "$lib/data/en_gb.js";

  const { gettingStarted } = data;
</script>

<section class="c-getting-started" id="getting-started">
  <h2 class="c-getting-started__title">{gettingStarted.title}</h2>
  <h4 class="c-getting-started__subtitle">{gettingStarted.subtitle}</h4>
  {#each gettingStarted.paragraphs as p}
    <div class="c-getting-started__p">{@html p}</div>
  {/each}
</section>

<style lang="scss">
  @import "../page.scss";
</style>
