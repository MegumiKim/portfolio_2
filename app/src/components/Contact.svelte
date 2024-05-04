<script>
  let name = '';
  let email = '';
  let message = '';
  let error = '';

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      error = 'All fields must be filled out';
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Use fetch or any other method to submit the form data to your server
      try {
        const response = await fetch('https://formspree.io/f/mrgnekjz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      
      window.location.href = '/contact/thankyou/';

        // Handle the response as needed
      } catch (error) {
        error = "Failed to submit the form. Please contact by email!"
        console.error('Error submitting the form:', error);
      }finally{
        name = '';
      email = '';
      message = '';
      }
    }
  };
</script>
      <form class="flex flex-col gap-2 flex-1" on:submit={(e)=>handleSubmit(e)}>
        {#if error}
          <p style="color: red;">{error}</p>
        {/if}
      
        <label for=""><span>Name</span><input bind:value={name} class="input mt-3" type="text" name="name" required></label>
        <label for=""><span>Email</span><input bind:value={email} class="input mt-3" type="email" name="email"></label>
        <label for=""><span>Message</span><textarea bind:value={message} class="mt-3 textarea rounded-lg" name="message" cols="30" rows="5"></textarea></label>
        <button type="submit" class=" mt-3 btn-xl variant-outline-warning rounded-xl hover:variant-filled-warning">Send</button>
      </form>


