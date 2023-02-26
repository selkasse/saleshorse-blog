<script lang="ts">
  import type { PageServerData } from './$types';

  export let data: PageServerData;
</script>

<div class="container">
  <h1>saleshorse 🐴</h1>

  <ul class="links">
    {#each data.posts as post}
      <li class="link">
        <a href={`blog/${post.slug}`}>{post.title}</a>
        <br />
        <div class="postdate">
          {post.date}
        </div>
        {post.description}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .container {
    width: 80%;
    margin: 1.25rem auto;
    text-align: center;

    h1 {
      font-size: 1.5rem;
      line-height: 2rem;
      font-weight: 600;
      color: #ffffff;
      padding: 1rem;
      border-radius: 0.25rem;
      background-color: #2563eb;
    }

    .link {
      text-align: left;
      padding-bottom: 1rem;
    }

    .postdate {
      color: #336699;
    }

    .links {
      margin: 0.625rem 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;

      a {
        text-decoration-line: underline;
        color: #2563eb;
        font-size: 1.25rem;
        line-height: 1.75rem;
        :hover {
          color: #1e40af;
        }
      }
    }
  }
</style>
