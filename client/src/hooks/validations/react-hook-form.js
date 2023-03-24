import { z } from "zod";
import validator from "validator";

export const reservationSchema = z.object({
	name: z.string().min(1, { message: "Please fill in all credentials" }),
	email: z.string().min(1, { message: "Please fill in all credentials" }).email({ message: "Please enter a valid email address" }),
	date: z.string().min(1, { message: "Please fill in all credentials" }),
	timing: z.string().min(1, { message: "Please fill in all credentials" }),
	reservation: z.string().min(1, { message: "Please fill in all credentials" }),
});

export const contactSchema = z.object({
	name: z.string().min(1, { message: "Please fill in all credentials" }),
	email: z.string().min(1, { message: "Please fill in all credentials" }).email({ message: "Please enter a valid email address" }),
	subject: z.string().min(10, { message: "Subject must be more than 10 characters" }),
	phone: z
		.string()
		.min(1, { message: "Please fill in all credentials" })
		.refine(validator.isMobilePhone, { message: "Please enter a valid phone number : Add country code and do not add special characters, leave no spaces either " }),
	message: z.string().min(75, { message: "Message must be more than 75 characters" }),
});
