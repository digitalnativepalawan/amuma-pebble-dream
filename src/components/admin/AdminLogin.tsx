import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminLogin = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await signIn(email);
    if (error) {
      setError(error.message);
    } else {
      setSent(true);
    }
    setLoading(false);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-sm w-full text-center space-y-6">
          <h1 className="font-display text-2xl font-bold text-primary">Check your email</h1>
          <p className="font-body text-sm text-muted-foreground">
            We sent a magic link to <strong>{email}</strong>. Click it to sign in.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">AMUMA Admin</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">Sign in with your email</p>
        </div>
        <Input
          type="email"
          placeholder="admin@amuma.ph"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="font-body text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending..." : "Send Magic Link"}
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
