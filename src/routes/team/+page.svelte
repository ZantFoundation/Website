<script>
  import Profile from "./../team/partials/Profile.svelte";
  import { data } from "$lib/data/en_gb.js";

  const { team } = data;
</script>

<div class="u-container c-team" id="team">
  <section>
    <h2 class="c-team__title">{team.title}</h2>
    <!-- <h4 class="c-team__subtitle">{team.subtitle}</h4> -->
  </section>
  <section class="c-profile--wrapper">
    {#each team.profiles as profile}
      <Profile {profile} />
    {/each}
  </section>
</div>

<style lang="scss">
  @import "./page.scss";
</style>
