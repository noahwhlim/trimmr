import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Redirect = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!id) return;

    const redirectToOriginalUrl = async () => {
      try {
        const response = await fetch(`https://trimmr-server-apcxfqh6gxbkdxhc.centralus-01.azurewebsites.net/${id}`);
        if (!response.ok) {
          throw new Error('Short URL not found');
        }

        const data: { original_url: string } = await response.json();

        // Perform redirect
        window.location.href = data.original_url;
      } catch (error) {
        console.error('Redirect failed:', error);
        // Optional: show error or navigate to a 404 page
      }
    };

    redirectToOriginalUrl();
  }, [id]);

  return <p>Redirecting...</p>;
};

export default Redirect;
