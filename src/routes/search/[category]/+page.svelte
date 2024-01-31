<script>
  export let data;

  function isObject(variable) {
    return typeof variable === "object" && variable !== null;
  }

  function formatKey(parentKey, childKey) {
    return childKey ? `${parentKey} - ${childKey}` : parentKey;
  }
  
  function getClass(keyName, type) {
    if (['id', 'uid', 'password', 'account_number', 'city'].includes(keyName)) {
      return `key-${keyName.toLowerCase()} ${type}-${keyName.toLowerCase()}`;
    }
    return '';
  }
</script>

<main>
  <h2>{"Showing results for: " + data.params.category}</h2>
  <hr />
  <div>
    {#each data.response as item}
      <article class="grid">
        {#each item as [key, value]}
          {#if isObject(value)}
            {#each Object.entries(value) as [key2, value2]}
            <div class={getClass(key2, 'key')}>{formatKey(key, key2)}</div>
            <div class={getClass(key2, 'value')}>{isObject(value2) ? JSON.stringify(value2) : value2}</div>
            {/each}
          {:else}
          <div class={getClass(key, 'key')}>{key}</div>
          <div class={getClass(key, 'value')}>{value}</div>
          {/if}
        {/each}
      </article>
    {/each}
  </div>
</main>

<style>
.grid {
  display: grid;
  grid-template-columns: 500px 1fr;
  gap: 30px;
  margin-bottom: 20px;
}
  .key-password, .value-password, .key-id, .value-id, .key-uid, .value-uid, .key-account_number, .value-account_number, .key-city, .value-city{
    font-weight: bold;
  }

  .key-account_number, .value-account_number{ color:red; }
  .key-city, .value-city{ color: red; }
  .key-id, .value-id { color: blue; }
  .key-uid, .value-uid { color: green; }
  .key-password, .value-password { color: red; }
</style>