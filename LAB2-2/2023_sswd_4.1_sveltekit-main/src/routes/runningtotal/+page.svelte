<script>
    //variable to keep track of value entered (num) and running total
    let num = 0
    let total = 0;

    // function to add num to total
    function addToTotal() {
        total += num;
    }
    // function to reset
    function resetTotal() {
        total = 0;
    }


</script>

<!--- Display running total --->
<div class="m-5 w-50">
    <h1> Total = {total}</h1>

<!--- form --->
<form >

    <div class="mb-3">
        <label for="input_value" class="form-label">Enter value</label>
        <!--- value of num variable is bound to this field --->
        <input bind:value={num} type="number" class="form-control" id="input_value"> 
    </div>

    <!-- on:click -->
    <button on:click={addToTotal} type="button" class="btn btn-primary"> add to total </button>

    <!-- Reset button -->
    <button on:click={resetTotal} type="button" class="btn btn-secondary">Reset</button>


</form>
</div>