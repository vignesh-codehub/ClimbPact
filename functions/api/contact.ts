interface Env {
  RESEND_API_KEY: "re_RSsYKZVP_48Q4RkE1218jJTb5a9NyMyeW";
  CONTACT_RECEIVER_EMAIL?: "abc441448@gmail.com";
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// Handle browser preflight checks
export const onRequestOptions = async () => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders,
  });
};

export const onRequestPost = async (context: {
  request: Request;
  env: Env;
}) => {
  try {
    const body = (await context.request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      organization?: string;
      message?: string;
      enquiryType?: string;
    };

    const { firstName, lastName, email, phone, organization, message, enquiryType } = body;

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" } 
        }
      );
    }

    const recipient = context.env.CONTACT_RECEIVER_EMAIL || "abc441448@gmail.com";
    const typeLabel = enquiryType === "employer" ? "Employer / Business" : "Candidate / Job Seeker";

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${context.env.RESEND_API_KEY || "re_RSsYKZVP_48Q4RkE1218jJTb5a9NyMyeW"}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "ClimbPact Inquiries <onboarding@resend.dev>",
        to: [recipient],
        reply_to: email,
        subject: `New ${typeLabel} Inquiry: ${firstName} ${lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #092C55; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
            <h2 style="color: #079f96; margin-top: 0;">New ClimbPact Inquiry Received</h2>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <p><strong>Enquiry Category:</strong> ${typeLabel}</p>
            <p><strong>Full Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email Address:</strong> <a href="mailto:${email}" style="color: #079f96;">${email}</a></p>
            <p><strong>Phone Number:</strong> ${phone || "Not provided"}</p>
            <p><strong>Organization / Role:</strong> ${organization || "Not provided"}</p>
            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
            <h4 style="margin-bottom: 8px; color: #092C55;">Message Details:</h4>
            <div style="background-color: #f8fbfe; border-left: 4px solid #079f96; padding: 12px 16px; border-radius: 6px; white-space: pre-wrap; font-size: 14px; color: #334155;">
              ${message}
            </div>
          </div>
        `,
      }),
    });

    const result = await resendResponse.json();

    if (!resendResponse.ok) {
      return new Response(JSON.stringify(result), {
        status: resendResponse.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Internal Server Error" }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  }
};