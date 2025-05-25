export interface GenerateResponse {
  id: string;
  original_url: string;
}

export async function submitLink(longUrl: string): Promise<GenerateResponse> {
  const url =
    "/api/generate";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ long_url: longUrl }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate short URL: ${response.statusText}`);
  }

  const data: GenerateResponse = await response.json();
  return data;
}
