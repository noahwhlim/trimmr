import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy, ExternalLink, Scissors } from "lucide-react";
import "../App.css";
import React, { useState } from "react";
import { submitLink } from "@/api/submitLink";


export default function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [trimmedUrl, setTrimmedUrl] = useState("https://www.trimmr.dev/short");

  const handleInputChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLongUrl(event.target.value);
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Scissors className="h-10 w-10 text-teal-500" />
            <h1 className="text-3xl font-bold ml-2">Trimmr</h1>
          </div>
          <p className="text-muted-foreground max-w-md mx-auto">
            Transform your long URLs into brief, shareable links in seconds.
          </p>
        </header>

        <Card className="mb-8 border-2 shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl">Trim Your URL</CardTitle>
            <CardDescription>
              Paste your long URL below to generate a short link
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="https://example.com/very/long/url"
                className="flex-1"
                value={longUrl}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 cursor-pointer"
                onClick={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await submitLink(longUrl);
                    setTrimmedUrl("https://www.trimmr.dev/" + response.id); // Assuming the response has a shortUrl property
                  } catch (error) {
                    console.error("Error trimming URL:", error);
                    // You might want to handle errors by showing a message to the user
                  }
                }}
              >
                Trim
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="mb-12 border shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg">Your Trimmed URL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-md">
              <div className="flex-1 font-medium text-teal-600 truncate">
                {trimmedUrl}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex gap-1 cursor-pointer" onClick={() => {navigator.clipboard.writeText(trimmedUrl)}}>
                  <Copy className="h-4 w-4" />
                  <span className="hidden sm:inline">Copy</span>
                </Button>
                <Button variant="outline" size="sm" className="flex gap-1 cursor-pointer" onClick={() => (window.location.href = `${trimmedUrl}`)}>
                  <ExternalLink className="h-4 w-4" />
                  <span className="hidden sm:inline">Visit</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="mt-16 py-6 border-t bg-slate-50 dark:bg-slate-900">
        <div className="container max-w-5xl mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 Trimmr. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:text-teal-500">
              Terms
            </a>
            <a href="#" className="hover:text-teal-500">
              Privacy
            </a>
            <a href="#" className="hover:text-teal-500">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
