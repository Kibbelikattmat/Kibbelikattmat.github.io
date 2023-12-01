
<main>
<h1>Registration Form</h1>

<form on:submit|preventDefault={handleSubmit}>
    <label for=firstName id=firstName>First Name:</label>
    <input id="firstName" type="text"/>

    <label for=lastName id=lastName>Last Name:</label>
    <input id=lastName type="text"/>

    <label for=email id=email>Email:</label>
    <input id=email type="email"/>

    <label for=password id=password>Password:</label>
    <input id=password type="password"/>

    <p>Already have an account? <a

        href="/Login">Log in</a></p>

    <button type="submit">Register</button>
</form>
</main>
<style>
    form{display: grid;
    width: 60vw;
    max-width: 500px;
    min-width: 300px;
    margin: auto;
    gap: 10px;
    grid-template-columns: repeat(2, minmax(200px, 1fr));
    }   
    
    main {
    background-image: url('https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg');
    background-repeat: no-repeat;
    background-size: 2000px 5000px;

    }
</style>

<script>
    function handleSubmit() {
    // Perform form submission logic here
    console.log('Form submitted!');
    }
</script>   