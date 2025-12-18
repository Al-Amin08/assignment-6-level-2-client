import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Home, ShieldAlert } from "lucide-react";
// import "@lottiefiles/lottie-player";
import { Player } from "@lottiefiles/react-lottie-player";

export default function Unauthorized() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center animate-fadeIn">
        {/* Lottie Animation */}

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-3 rounded-full bg-destructive/20 shadow-lg">
            <ShieldAlert className="h-10 w-10 text-destructive" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-foreground tracking-tight">
          Access Denied
        </h1>

        {/* Message */}
        <p className="text-muted-foreground mb-8 leading-relaxed">
          You don’t have permission to view this page. If you think this is a
          mistake, please reach out to the administrator.
        </p>

        {/* Action Button */}
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 transition-colors"
        >
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Return to Home
          </Link>
        </Button>

        {/* Additional options */}
        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            Or try to{" "}
            <Link to="/login" className="text-primary hover:underline">
              sign in
            </Link>{" "}
            with a different account
          </p>
        </div>
      </div>
    </div>
  );
}
