import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ADMIN_PASSKEY = "5309";

interface Props {
  onAuthenticated: () => void;
}

const AdminLogin = ({ onAuthenticated }: Props) => {
  const [passkey, setPasskey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passkey === ADMIN_PASSKEY) {
      localStorage.setItem("amuma_admin_auth", "true");
      onAuthenticated();
    } else {
      setError("Incorrect passkey");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="max-w-sm w-full space-y-6">
        <div>
          <h1 className="font-display text-2xl font-bold text-primary">AMUMA Admin</h1>
          <p className="font-body text-sm text-muted-foreground mt-1">Enter admin passkey</p>
        </div>
        <Input
          type="password"
          placeholder="Passkey"
          value={passkey}
          onChange={(e) => { setPasskey(e.target.value); setError(""); }}
          autoFocus
        />
        {error && <p className="font-body text-sm text-destructive">{error}</p>}
        <Button type="submit" className="w-full">Enter</Button>
      </form>
    </div>
  );
};

export default AdminLogin;
