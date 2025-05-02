import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  
  // Extract form data
  const name = formData.get('name')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const organization = formData.get('organization')?.toString() || '';
  const orgType = formData.get('organization_type')?.toString() || '';
  const message = formData.get('message')?.toString() || '';
  const newsletter = formData.has('newsletter') ? 'Yes' : 'No';
  
  // Here you would typically send an email
  // This is a placeholder for your email sending logic
  
  // If you're using an email service like Nodemailer, SendGrid, etc.
  // you would configure and use it here
  
  try {
    // Example of email sending (replace with your actual implementation)
    /*
    await sendEmail({
      to: "youremail@example.com",
      subject: "New Contact Form Submission - MicroPig",
      body: `
        Name: ${name}
        Email: ${email}
        Organization: ${organization}
        Type of Organization: ${orgType}
        Subscribed to Newsletter: ${newsletter}
        
        Message:
        ${message}
      `
    });
    */
    
    // For now, let's log the data (remove in production)
    console.log({
      name,
      email,
      organization,
      orgType,
      message,
      newsletter
    });
    
    // Redirect to thank you page on success
    return redirect('/thank-you', 302);
  } catch (error) {
    // Handle errors
    console.error('Error sending message:', error);
    
    // Return error response
    return new Response(JSON.stringify({
      error: 'Error sending message. Please try again later.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};