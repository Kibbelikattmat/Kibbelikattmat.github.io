<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    }
</script>   


<h1>Registration Form</h1>
<div>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="email" id="email">Email:</label>
        <input id="email" type="email"/>

        <label for="password" id="password">Password:</label>
        <input id="password" type="password"/>
        <p>Don't have an account? </p>
        <a href="/Register">Register</a>
            
        <button type="submit">Login</button>
    </form>
</div>

<style>

    form{display: grid;
    width: 60vw;
    max-width: 500px;
    min-width: 300px;
    margin: auto;
    gap:10px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    }
    
</style>