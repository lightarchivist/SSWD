<script>
    export let data;
</script>

<div id="products">

    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>stock</th>
            </tr>
        </thead>
        <tbody>
            {#each data.products as product}
            <tr>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
            </tr>
            {/each}
         </tbody>
    </table>
</div>