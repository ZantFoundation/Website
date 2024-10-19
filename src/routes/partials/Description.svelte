<script>
  import { data } from "$lib/data/en_gb.js";

  const { description } = data;
</script>

<section class="c-description" id="description">
  <h2 class="c-description__title">{description.title}</h2>
  {#each description.paragraphs as p}
    <div class="c-description__p">{@html p}</div>
  {/each}
</section>

<style lang="scss">
  @import "../page.scss";
</style>
