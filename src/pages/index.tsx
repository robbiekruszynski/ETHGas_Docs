import {useEffect} from 'react';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  useEffect(() => {
    // Redirect to welcome page
    window.location.href = '/docs/getting-started/welcome';
  }, []);

  return <Redirect to="/docs/getting-started/welcome" />;
}
