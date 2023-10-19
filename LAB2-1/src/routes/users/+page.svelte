<script>
    export let data;
</script>

<div id="users">

    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th>id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>IP</th>
            </tr>
        </thead>
        <tbody>
            {#each data.users as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.ip}</td>
            </tr>
            {/each}
         </tbody>
    </table>
</div>