<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="container">
  <article>
    <header>
      <h1>{data.post.title}</h1>
    </header>
    <!-- render the post -->
    <div>
      <svelte:component this={data.component} />
    </div>
  </article>
</div>

<style lang="scss">
  .container {
    --width: 700px;
    padding-left: max(1rem, calc(calc(100vw - var(--width)) / 2));
    padding-right: max(1rem, calc(calc(100vw - var(--width)) / 2));
  }
</style>
