"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { LogIn, Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getSession, signIn } from "next-auth/react";

// ─── Zod Schema ─────────────────────────────────────────────────────

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email wajib diisi")
    .email("Format email tidak valid"),
  password: z.string().min(1, "Password wajib diisi"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

// ─── Component ──────────────────────────────────────────────────────

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) {
      toast.error("Login gagal", {
        description: "Email atau password salah",
      });
      return;
    }

    toast.success("Berhasil masuk!");

    // Paksa refresh session dulu baru ambil
    await fetch("/api/auth/session");
    const sessionRes = await fetch("/api/auth/session");
    const session = await sessionRes.json();
    const role = session?.user?.role;

    const roleRedirect: Record<string, string> = {
      admin: "/dashboard",
      petani: "/marketplace",
      investor: "/investasi",
      pembeli: "/marketplace",
      peserta: "/academy",
    };

    router.push(roleRedirect[role] ?? "/");
  };

  return (
    <Card className="w-full max-w-md shadow-[0_2px_16px_rgba(0,0,0,0.06)] border-gray-100">
      <Toaster />
      <CardHeader className="text-center space-y-2 pb-2">
        <div className="flex items-center justify-center gap-2">
          <div className="w-10 h-10 bg-[#206536] rounded-xl flex items-center justify-center">
            <LogIn className="w-5 h-5 text-white" />
          </div>
        </div>
        <CardTitle className="text-xl sm:text-2xl font-bold text-[#1a4528]">
          Masuk ke SiTani
        </CardTitle>
        <CardDescription className="text-gray-500 text-sm">
          Masuk ke akun Anda untuk melanjutkan
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-[#1a4528]">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="contoh@email.com"
                        className="pl-10 focus-visible:ring-[#2d7a3a]"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel className="text-sm font-medium text-[#1a4528]">
                      Password
                    </FormLabel>
                    <Link
                      href="#"
                      className="text-xs text-[#2d7a3a] hover:text-[#1a4528] font-medium transition-colors"
                    >
                      Lupa password?
                    </Link>
                  </div>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password"
                        className="pl-10 pr-10 focus-visible:ring-[#2d7a3a]"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Remember Me */}
            <FormField
              control={form.control}
              name="rememberMe"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="w-4 h-4 accent-[#206536] cursor-pointer rounded"
                    />
                  </FormControl>
                  <FormLabel className="text-sm text-gray-600 font-normal cursor-pointer">
                    Ingat saya
                  </FormLabel>
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="w-full bg-[#206536] hover:bg-[#1a5530] text-white font-semibold py-5 cursor-pointer transition-colors duration-200"
            >
              {form.formState.isSubmitting && (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              )}
              <LogIn className="w-4 h-4 mr-2" />
              Masuk
            </Button>

            <Separator />

            {/* Social Login Placeholder */}
            <Button
              type="button"
              variant="outline"
              className="w-full font-medium py-5 cursor-pointer border-gray-200 hover:bg-gray-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Masuk dengan Google
            </Button>

            <p className="text-center text-sm text-gray-500">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-[#2d7a3a] hover:text-[#1a4528] font-semibold transition-colors"
              >
                Daftar Sekarang
              </Link>
            </p>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
