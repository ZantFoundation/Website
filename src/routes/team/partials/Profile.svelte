<script>
  export let profile;

  let { name, role, description, image } = profile;
</script>

<div class="c-profile">
  <img src={image} alt="" class="c-profile__image" />
  <strong class="c-profile__name">{name}</strong>
  <span class="c-profile__role">{role}</span>
  <span class="c-profile__description">{description}</span>
</div>
