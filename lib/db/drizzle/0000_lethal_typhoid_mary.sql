CREATE TABLE "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text
);
--> statement-breakpoint
CREATE TABLE "authenticator" (
	"credentialID" text NOT NULL,
	"userId" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"credentialPublicKey" text NOT NULL,
	"counter" integer NOT NULL,
	"credentialDeviceType" text NOT NULL,
	"credentialBackedUp" boolean NOT NULL,
	"transports" text,
	CONSTRAINT "authenticator_credentialID_unique" UNIQUE("credentialID")
);
--> statement-breakpoint
CREATE TABLE "investor_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"tipe_investor" text,
	"sumber_dana" text,
	"pengalaman" text,
	CONSTRAINT "investor_profile_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "pembeli_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"provinsi" text,
	"kota" text,
	"alamat" text,
	CONSTRAINT "pembeli_profile_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "peserta_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"pekerjaan" text,
	"pendidikan" text,
	"minat" text,
	CONSTRAINT "peserta_profile_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "petani_profile" (
	"id" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"provinsi" text,
	"kota" text,
	"alamat" text,
	CONSTRAINT "petani_profile_userId_unique" UNIQUE("userId")
);
--> statement-breakpoint
CREATE TABLE "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text,
	"email" text,
	"emailVerified" timestamp,
	"image" text,
	"password" text,
	"telepon" text,
	"nik" text,
	"role" text DEFAULT 'petani',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "authenticator" ADD CONSTRAINT "authenticator_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "investor_profile" ADD CONSTRAINT "investor_profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pembeli_profile" ADD CONSTRAINT "pembeli_profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "peserta_profile" ADD CONSTRAINT "peserta_profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "petani_profile" ADD CONSTRAINT "petani_profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;