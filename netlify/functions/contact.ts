import { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { z } from "zod";

// Contact form schema
const insertContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  inquiryType: z.string().optional(),
  quantity: z.string().optional(),
});

// In-memory storage for demo (use a database in production)
const contactInquiries: any[] = [];

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  // Handle POST request - Create new contact inquiry
  if (event.httpMethod === "POST") {
    try {
      if (!event.body) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: "Request body is required",
          }),
        };
      }

      const body = JSON.parse(event.body);
      const validatedData = insertContactSchema.parse(body);

      // Create inquiry object
      const inquiry = {
        id: Date.now().toString(),
        ...validatedData,
        createdAt: new Date().toISOString(),
      };

      // Store inquiry (in production, save to database)
      contactInquiries.push(inquiry);

      // In production, you might want to:
      // 1. Save to a database (Netlify + Neon/Supabase)
      // 2. Send email notification
      // 3. Integrate with CRM

      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Thank you for your inquiry. We will get back to you soon!",
          data: inquiry,
        }),
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: "Invalid form data",
            errors: error.errors,
          }),
        };
      }

      console.error("Contact form error:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Something went wrong. Please try again later.",
        }),
      };
    }
  }

  // Handle GET request - Retrieve contact inquiries
  if (event.httpMethod === "GET") {
    try {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: contactInquiries,
        }),
      };
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Failed to fetch inquiries",
        }),
      };
    }
  }

  // Method not allowed
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({
      success: false,
      message: "Method not allowed",
    }),
  };
};

export { handler };
